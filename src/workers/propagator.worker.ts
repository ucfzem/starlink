import * as satellite from 'satellite.js';

export type WorkerMessageIn =
  | { type: 'INIT'; tles: Array<{ tle1: string; tle2: string }>; genId: number }
  | { type: 'FRAME'; simTime: number; genId: number };

export type WorkerMessageOut =
  | {
      type: 'POSITIONS';
      positions: Array<{
        pos1: [number, number, number] | null;
        pos2: [number, number, number] | null;
        velocity: [number, number, number] | null;
      }>;
      genId: number;
      simTime: number;
    }
  | { type: 'STALE'; genId: number };

let currentGenId = -1;
let satRecords: satellite.SatRec[] = [];

self.onmessage = (e: MessageEvent<WorkerMessageIn>) => {
  const msg = e.data;

  if (msg.type === 'INIT') {
    currentGenId = msg.genId;
    satRecords = msg.tles.map((t) => satellite.twoline2satrec(t.tle1, t.tle2));
    return;
  }

  if (msg.type === 'FRAME') {
    if (msg.genId !== currentGenId) {
      self.postMessage({ type: 'STALE', genId: msg.genId });
      return;
    }

    const d1 = new Date(msg.simTime);
    const d2 = new Date(msg.simTime + 1000);

    const positions = satRecords.map((satrec) => {
      const p1 = satellite.propagate(satrec, d1);
      const p2 = satellite.propagate(satrec, d2);

      let pos1: [number, number, number] | null = null;
      let pos2: [number, number, number] | null = null;
      let velocity: [number, number, number] | null = null;

      if (p1.position && typeof p1.position !== 'boolean') {
        pos1 = [p1.position.x, p1.position.y, p1.position.z];
      }
      if (p2.position && typeof p2.position !== 'boolean') {
        pos2 = [p2.position.x, p2.position.y, p2.position.z];
      }
      if (p1.velocity && typeof p1.velocity !== 'boolean') {
        velocity = [p1.velocity.x, p1.velocity.y, p1.velocity.z];
      }

      if (!pos1 || !pos2) {
        return { pos1: null, pos2: null, velocity: null };
      }

      return { pos1, pos2, velocity };
    });

    self.postMessage({
      type: 'POSITIONS',
      positions,
      genId: msg.genId,
      simTime: msg.simTime,
    });
  }
};
