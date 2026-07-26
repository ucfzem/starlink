# LEO LIVE Satellite Tracker — Session Backup
**Project:** starlink
**Target URL:** https://ufczem.github.io/starlink
**Date:** July 26, 2026

---

## Status: ✅ COMPLETE

All files written, npm install done, and build succeeds.

### Build Output
- `dist/index.html` — entry point
- `dist/assets/index-DSClIjk2.js` — main bundle (650 kB)
- `dist/assets/index-CT9QuegP.css` — styles (16 kB)
- `dist/assets/propagator.worker-D01MEj1n.js` — worker bundle (21 kB)

---

## Git Commands to Push & Deploy

### 1. Push to GitHub
```bash
cd /tmp/starlink
git remote add origin https://github.com/ufczem/starlink.git
git branch -M main
git push -u origin main
```

If you need to authenticate:
```bash
# Option A: GitHub CLI
gh auth login

# Option B: Personal Access Token
git remote set-url origin https://TOKEN@github.com/ufczem/starlink.git
git push -u origin main
```

### 2. Enable GitHub Pages
```bash
# After pushing, go to:
# https://github.com/ufczem/starlink/settings/pages
# Set source: GitHub Actions or deploy from gh-pages branch
```

### 3. Deploy to Vercel (recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel login
vercel --prod
# Follow prompts — set framework to "Vite" and root to project dir
```

### 4. Alternative: GitHub Pages via gh-pages
```bash
npm install -D gh-pages
# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"
npm run deploy
```

---

## All 26 Source Files Created

| File | Status |
|------|--------|
| `package.json` | ✅ |
| `tailwind.config.js` | ✅ |
| `vite.config.ts` | ✅ |
| `tsconfig.json` | ✅ |
| `tsconfig.node.json` | ✅ |
| `postcss.config.js` | ✅ |
| `.eslintrc.cjs` | ✅ |
| `index.html` | ✅ |
| `src/index.css` | ✅ |
| `src/App.tsx` | ✅ |
| `src/main.tsx` | ✅ |
| `public/snapshot.tle` | ✅ |
| `src/lib/satellites.ts` | ✅ |
| `src/lib/tle-cache.ts` | ✅ |
| `src/lib/globe-engine.ts` | ✅ |
| `src/workers/propagator.worker.ts` | ✅ |
| `src/hooks/useSimClock.ts` | ✅ |
| `src/hooks/useTleData.ts` | ✅ |
| `src/hooks/usePropagator.ts` | ✅ |
| `src/hooks/useUrlParam.ts` | ✅ |
| `src/components/hud/SearchBox.tsx` | ✅ |
| `src/components/hud/LayerPanel.tsx` | ✅ |
| `src/components/hud/DetailPanel.tsx` | ✅ |
| `src/components/hud/FallbackTable.tsx` | ✅ |
| `src/components/hud/TrackerHud.tsx` | ✅ |
| `src/pages/Home.tsx` | ✅ |

---

## Links to Share
- **GitHub Repo:** https://github.com/ufczem/starlink
- **GitHub Pages:** https://ufczem.github.io/starlink
- **Vercel (after deploy):** will be provided by `vercel` CLI on first deploy

---

## Project Architecture

### LEO LIVE Satellite Tracker
A React + Three.js WebGL application for tracking LEO satellites in real-time 3D.

#### Key Features:
- **3D Globe** — wireframe Earth with atmosphere glow
- **Satellite Points** — rendered as custom shader points with Earth occlusion
- **TLE Data Pipeline** — Snapshot → IndexedDB Cache → CelesTrak Live Retry
- **Web Worker** for orbital propagation (keeps UI thread free)
- **Simulation Clock** — pause/play, 1×/60×/600× speed
- **Layer Panel** — toggle ISS/Starlink/Weather/Science/Other groups
- **Search Box** — name or NORAD ID search with dropdown
- **Detail Panel** — selected satellite info + past/future trajectory arcs
- **URL Persistence** — `?sat=NORAD_ID` syncs selection
- **Adaptive DPR** — reduces pixel ratio under frame pressure
- **WebGL Context Lost Recovery** — shows overlay with reload button
- **Fallback Table** — 2D table when WebGL unavailable

#### Tech Stack:
- React 18 + TypeScript + Vite
- Three.js for WebGL 3D globe
- satellite.js for orbital propagation (Web Worker)
- idb-keyval for IndexedDB TLE caching
- Tailwind CSS for HUD styling
