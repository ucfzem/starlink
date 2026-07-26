# LEO LIVE Satellite Tracker — Session Backup
**Project:** starlink  
**Date:** July 26, 2026  
**Status:** ✅ DEPLOYED

---

## Live Links
| Resource | URL |
|----------|-----|
| **GitHub Repo** | https://github.com/ucfzem/starlink |
| **GitHub Pages (live)** | https://ucfzem.github.io/starlink/ |
| **Vercel** | Deploy locally with `vercel --prod` |

---

## Build & Deploy Status
- `npm install` — ✅ Passed
- `npm run build` — ✅ Passed
- Git push to `main` — ✅ Pushed (force)
- GitHub Pages deploy (gh-pages branch) — ✅ Deployed via API
- Site verified HTTP 200 — ✅ Confirmed

---

## Deployment Commands (for future use)

### Rebuild & Push
```bash
cd /tmp/starlink
git add -A && git commit -m "Update" && git push origin main
```

### Re-deploy to GitHub Pages
```bash
python3 /tmp/deploy.py
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel login
cd /tmp/starlink
vercel --prod
# Set framework: Vite
# Set root: . (current directory)
```

---

## All Source Files (26 + config)
| File | Purpose |
|------|---------|
| `package.json` | Dependencies & scripts |
| `vite.config.ts` | Vite build config (base: /starlink/) |
| `tailwind.config.js` | Tailwind CSS config |
| `tsconfig.json` / `tsconfig.node.json` | TypeScript configs |
| `postcss.config.js` | PostCSS config |
| `.eslintrc.cjs` | ESLint 8 config |
| `index.html` | Entry HTML |
| `src/index.css` | Global styles (Tailwind) |
| `src/main.tsx` | React DOM entry |
| `src/App.tsx` | Root component |
| `src/pages/Home.tsx` | Main page (3D + HUD) |
| `src/lib/satellites.ts` | TLE parser & satellite groups |
| `src/lib/tle-cache.ts` | IndexedDB TLE caching |
| `src/lib/globe-engine.ts` | Three.js 3D globe renderer |
| `src/workers/propagator.worker.ts` | Web Worker orbit propagation |
| `src/hooks/useSimClock.ts` | Simulation clock (pause/speed) |
| `src/hooks/useTleData.ts` | TLE data pipeline (snapshot→cache→live) |
| `src/hooks/usePropagator.ts` | Worker communication hook |
| `src/hooks/useUrlParam.ts` | URL ?sat= persistence |
| `src/components/hud/SearchBox.tsx` | Satellite search |
| `src/components/hud/LayerPanel.tsx` | Group toggle panel |
| `src/components/hud/DetailPanel.tsx` | Selected satellite details |
| `src/components/hud/FallbackTable.tsx` | 2D fallback (no WebGL) |
| `src/components/hud/TrackerHud.tsx` | Main HUD panel |
| `public/snapshot.tle` | Built-in TLE snapshot |

---

## Architecture
- React 18 + TypeScript + Vite
- Three.js WebGL 3D globe with shader points
- satellite.js for orbital propagation (Web Worker)
- idb-keyval for IndexedDB TLE caching
- Tailwind CSS for HUD panels
- CelesTrak live TLE fetch with fallback chain
