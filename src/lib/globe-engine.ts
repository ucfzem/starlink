import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as satellite from 'satellite.js';
import { SatelliteRecord } from './satellites';

export class GlobeEngine {
  private container: HTMLDivElement;
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private controls: OrbitControls;
  private earthMesh: THREE.Mesh;
  private pointsMesh: THREE.Points;
  private pointsGeometry: THREE.BufferGeometry;
  private pointsMaterial: THREE.ShaderMaterial;

  private selectedMarker: THREE.LineLoop;
  private trajectoryPast: THREE.Line;
  private trajectoryFuture: THREE.Line;
  private footprintRing: THREE.LineLoop;

  private satRecords: SatelliteRecord[] = [];
  private positions: Array<{
    pos1: [number, number, number] | null;
    pos2: [number, number, number] | null;
    velocity: [number, number, number] | null;
  }> = [];

  private simTime = Date.now();
  private selectedNorad: number | null = null;
  private visibleGroups: Set<string> = new Set();
  private frameTimes: number[] = [];
  private animFrameId: number | null = null;

  constructor(container: HTMLDivElement, canvas: HTMLCanvasElement) {
    this.container = container;
    this.canvas = canvas;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x020617);

    this.camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 15);

    // OrbitControls for mouse drag/zoom
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.rotateSpeed = 0.6;
    this.controls.zoomSpeed = 1.2;
    this.controls.minDistance = 7;
    this.controls.maxDistance = 40;
    this.controls.enablePan = false;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    this.scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.5);
    sunLight.position.set(10, 5, 8);
    this.scene.add(sunLight);

    const backLight = new THREE.DirectionalLight(0x4488ff, 0.3);
    backLight.position.set(-10, -5, -8);
    this.scene.add(backLight);

    // Earth Sphere with Blue Marble texture
    const earthGeo = new THREE.SphereGeometry(6.371, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/earth-blue-marble.jpg');
    const earthMat = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.85,
      metalness: 0.05,
    });
    this.earthMesh = new THREE.Mesh(earthGeo, earthMat);
    this.scene.add(this.earthMesh);

    // Atmosphere Glow
    const atmoGeo = new THREE.SphereGeometry(6.55, 64, 64);
    const atmoMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.55 - dot(vNormal, vec3(0, 0, 1.0)), 2.5);
          gl_FragColor = vec4(0.3, 0.6, 1.0, 0.15) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    this.scene.add(new THREE.Mesh(atmoGeo, atmoMat));

    // Stars background
    const starsGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const r = 80 + Math.random() * 120;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    starsGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starsMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.3, sizeAttenuation: true });
    this.scene.add(new THREE.Points(starsGeo, starsMat));

    // Points setup
    this.pointsGeometry = new THREE.BufferGeometry();
    this.pointsMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        attribute vec3 pos1;
        attribute vec3 pos2;
        attribute vec3 velocity;
        attribute float visible;
        uniform float uTime;

        void main() {
          if (visible < 0.5) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }
          vec3 p0 = pos1;
          vec3 p1 = pos2;
          vec3 m0 = velocity;
          float t = uTime;
          float t2 = t * t;
          float t3 = t2 * t;
          vec3 pos = (2.0 * t3 - 3.0 * t2 + 1.0) * p0 + (t3 - 2.0 * t2 + t) * m0 + (-2.0 * t3 + 3.0 * t2) * p1 + (t3 - t2) * m0;
          
          // Scale down from km to engine units (1 unit = 1000km)
          vec4 mvPosition = modelViewMatrix * vec4(pos / 1000.0, 1.0);
          gl_PointSize = 3.0;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0 - d * 2.0);
        }
      `,
      transparent: true,
      depthTest: true,
    });

    this.pointsMesh = new THREE.Points(this.pointsGeometry, this.pointsMaterial);
    this.scene.add(this.pointsMesh);

    // Selected Overlays
    const markerGeo = new THREE.BufferGeometry();
    const markerPts: number[] = [];
    for (let i = 0; i <= 32; i++) {
      const theta = (i / 32) * Math.PI * 2;
      markerPts.push(Math.cos(theta) * 0.2, Math.sin(theta) * 0.2, 0);
    }
    markerGeo.setAttribute('position', new THREE.Float32BufferAttribute(markerPts, 3));
    this.selectedMarker = new THREE.LineLoop(
      markerGeo,
      new THREE.LineBasicMaterial({ color: 0xffff00 })
    );
    this.selectedMarker.visible = false;
    this.scene.add(this.selectedMarker);

    this.trajectoryPast = new THREE.Line(
      new THREE.BufferGeometry(),
      new THREE.LineBasicMaterial({ color: 0xff4444 })
    );
    this.trajectoryFuture = new THREE.Line(
      new THREE.BufferGeometry(),
      new THREE.LineBasicMaterial({ color: 0x4444ff })
    );
    this.scene.add(this.trajectoryPast);
    this.scene.add(this.trajectoryFuture);

    const fpGeo = new THREE.BufferGeometry();
    const fpPts: number[] = [];
    for (let i = 0; i <= 64; i++) {
      const theta = (i / 64) * Math.PI * 2;
      fpPts.push(Math.cos(theta) * 0.5, Math.sin(theta) * 0.5, 0);
    }
    fpGeo.setAttribute('position', new THREE.Float32BufferAttribute(fpPts, 3));
    this.footprintRing = new THREE.LineLoop(
      fpGeo,
      new THREE.LineBasicMaterial({ color: 0x00ffff })
    );
    this.footprintRing.visible = false;
    this.scene.add(this.footprintRing);

    this.animate = this.animate.bind(this);
    this.animFrameId = requestAnimationFrame(this.animate);
  }

  public setSatellites(sats: SatelliteRecord[]) {
    this.satRecords = sats;
  }

  public updatePositions(
    positions: Array<{
      pos1: [number, number, number] | null;
      pos2: [number, number, number] | null;
      velocity: [number, number, number] | null;
    }>,
    selectionNorad: number | null,
    visibleGroups: Set<string>
  ) {
    this.positions = positions;
    this.selectedNorad = selectionNorad;
    this.visibleGroups = visibleGroups;

    const count = positions.length;
    const pos1Arr = new Float32Array(count * 3);
    const pos2Arr = new Float32Array(count * 3);
    const velArr = new Float32Array(count * 3);
    const visArr = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const p = positions[i];
      const sat = this.satRecords[i];
      const isVis = sat && visibleGroups.has(sat.group) && p && p.pos1 && p.pos2;

      visArr[i] = isVis ? 1.0 : 0.0;
      if (p && p.pos1 && p.pos2) {
        pos1Arr[i * 3] = p.pos1[0];
        pos1Arr[i * 3 + 1] = p.pos1[1];
        pos1Arr[i * 3 + 2] = p.pos1[2];

        pos2Arr[i * 3] = p.pos2[0];
        pos2Arr[i * 3 + 1] = p.pos2[1];
        pos2Arr[i * 3 + 2] = p.pos2[2];

        if (p.velocity) {
          velArr[i * 3] = p.velocity[0];
          velArr[i * 3 + 1] = p.velocity[1];
          velArr[i * 3 + 2] = p.velocity[2];
        }
      }
    }

    this.pointsGeometry.setAttribute('pos1', new THREE.BufferAttribute(pos1Arr, 3));
    this.pointsGeometry.setAttribute('pos2', new THREE.BufferAttribute(pos2Arr, 3));
    this.pointsGeometry.setAttribute('velocity', new THREE.BufferAttribute(velArr, 3));
    this.pointsGeometry.setAttribute('visible', new THREE.BufferAttribute(visArr, 1));
    this.pointsGeometry.attributes.pos1.needsUpdate = true;

    this.updateTrajectory();
  }

  public setSimTime(t: number) {
    this.simTime = t;
    this.pointsMaterial.uniforms.uTime.value = (t % 1000) / 1000;
  }

  public resize(width: number, height: number) {
    this.camera.aspect = width / height;
    if (width > 768) {
      const panelWidth = 340;
      this.camera.setViewOffset(width, height, panelWidth / 2, 0, width - panelWidth, height);
    } else {
      this.camera.clearViewOffset();
    }
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  public pick(screenX: number, screenY: number): number | null {
    const rect = this.canvas.getBoundingClientRect();
    const x = ((screenX - rect.left) / rect.width) * 2 - 1;
    const y = -((screenY - rect.top) / rect.height) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.params.Points.threshold = 0.2;
    raycaster.setFromCamera(new THREE.Vector2(x, y), this.camera);

    const intersects = raycaster.intersectObject(this.pointsMesh);
    for (const intersect of intersects) {
      const idx = intersect.index;
      if (idx !== undefined && this.satRecords[idx]) {
        const sat = this.satRecords[idx];
        if (!this.visibleGroups.has(sat.group)) continue;

        // Earth occlusion test
        const pos = intersect.point;
        const camPos = this.camera.position;
        const dir = pos.clone().sub(camPos).normalize();
        const distToSat = camPos.distanceTo(pos);

        // Ray sphere intersection check for Earth (r = 6.371)
        const occluded = this.checkEarthOcclusion(camPos, dir, distToSat);
        if (!occluded) {
          return sat.norad;
        }
      }
    }
    return null;
  }

  private checkEarthOcclusion(rayOrigin: THREE.Vector3, rayDir: THREE.Vector3, maxDist: number): boolean {
    const radius = 6.371;
    const oc = rayOrigin.clone();
    const b = oc.dot(rayDir);
    const c = oc.dot(oc) - radius * radius;
    const h = b * b - c;
    if (h < 0) return false;
    const t = -b - Math.sqrt(h);
    return t > 0 && t < maxDist;
  }

  private updateTrajectory() {
    if (!this.selectedNorad) {
      this.selectedMarker.visible = false;
      this.trajectoryPast.visible = false;
      this.trajectoryFuture.visible = false;
      this.footprintRing.visible = false;
      return;
    }

    const idx = this.satRecords.findIndex((s) => s.norad === this.selectedNorad);
    if (idx === -1 || !this.positions[idx] || !this.positions[idx].pos1) return;

    const currentPos = new THREE.Vector3().fromArray(this.positions[idx].pos1!).divideScalar(1000);
    this.selectedMarker.position.copy(currentPos);
    this.selectedMarker.quaternion.copy(this.camera.quaternion);
    this.selectedMarker.visible = true;

    const sat = this.satRecords[idx];
    const satrec = satellite.twoline2satrec(sat.tle1, sat.tle2);

    const pastPts: THREE.Vector3[] = [];
    const futurePts: THREE.Vector3[] = [];
    const quarterOrbitMs = (90 * 60 * 1000) / 4;

    for (let i = -20; i <= 0; i++) {
      const t = new Date(this.simTime + (i / 20) * quarterOrbitMs);
      const p = satellite.propagate(satrec, t);
      if (p.position && typeof p.position !== 'boolean') {
        pastPts.push(new THREE.Vector3(p.position.x, p.position.y, p.position.z).divideScalar(1000));
      }
    }

    for (let i = 0; i <= 20; i++) {
      const t = new Date(this.simTime + (i / 20) * quarterOrbitMs);
      const p = satellite.propagate(satrec, t);
      if (p.position && typeof p.position !== 'boolean') {
        futurePts.push(new THREE.Vector3(p.position.x, p.position.y, p.position.z).divideScalar(1000));
      }
    }

    this.trajectoryPast.geometry.dispose();
    this.trajectoryPast.geometry = new THREE.BufferGeometry().setFromPoints(pastPts);
    this.trajectoryPast.visible = true;

    this.trajectoryFuture.geometry.dispose();
    this.trajectoryFuture.geometry = new THREE.BufferGeometry().setFromPoints(futurePts);
    this.trajectoryFuture.visible = true;
  }

  private animate(time: number) {
    this.animFrameId = requestAnimationFrame(this.animate);

    this.controls.update();

    // Dynamic DPR Management
    if (this.frameTimes.length > 0) {
      const delta = time - this.frameTimes[this.frameTimes.length - 1];
      if (delta > 40) {
        this.renderer.setPixelRatio(1);
      } else {
        const slowFrames = this.frameTimes.filter((t, i) => i > 0 && t - this.frameTimes[i - 1] > 30);
        if (slowFrames.length === 0 && this.frameTimes.length > 5) {
          this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }
      }
    }
    this.frameTimes.push(time);
    if (this.frameTimes.length > 10) this.frameTimes.shift();

    this.renderer.render(this.scene, this.camera);
  }

  public dispose() {
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    this.controls.dispose();
    this.renderer.dispose();
  }
}
