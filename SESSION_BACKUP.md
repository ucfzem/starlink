# LEO LIVE Satellite Tracker - Session Backup

## Project: starlink
**Target URL:** ucfzem.github.io/starlink
**Date:** July 26, 2026
**Status:** All source files written; npm install, build, and deploy pending due to environment constraints

---

## What Was Completed

### All 26 source files were created in `/starlink/`:

| File | Status |
|------|--------|
| `package.json` | Done |
| `tailwind.config.js` | Done |
| `vite.config.ts` | Done |
| `tsconfig.json` | Done |
| `postcss.config.js` | Done |
| `eslint.config.js` | Done |
| `index.html` | Done |
| `vite-env.d.ts` | Done |
| `.gitignore` | Done |
| `public/snapshot.tle` | Done |
| `src/lib/satellites.ts` | Done |
| `src/lib/tle-cache.ts` | Done |
| `src/workers/propagator.worker.ts` | Done |
| `src/hooks/useSimClock.ts` | Done |
| `src/hooks/useTleData.ts` | Done |
| `src/hooks/usePropagator.ts` | Done |
| `src/hooks/useUrlParam.ts` | Done |
| `src/components/hud/SearchBox.tsx` | Done |
| `src/components/hud/LayerPanel.tsx` | Done |
| `src/components/hud/DetailPanel.tsx` | Done |
| `src/components/hud/FallbackTable.tsx` | Done |
| `src/components/hud/TrackerHud.tsx` | Done |
| `src/pages/Home.tsx` | Done |
| `src/App.tsx` | Done |
| `src/main.tsx` | Done |
| `src/index.css` | Done |

### Git Repo
- Initialized at `/starlink/`
- Branch: `main`
- Initial commit made with all 26 files

### What Could NOT Be Completed
1. **`npm install`** — npm install timed out/hung due to no network access to npm registry in this environment
2. **`npm run lint`** — blocked pending install
3. **`npm run build`** — blocked pending install
4. **Deploy to GitHub Pages** — requires GitHub token for `gh` CLI or SSH key
5. **Create GitHub repository** — requires `gh auth login` or a PAT

---

## Steps to Complete Manually

### 1. Install Dependencies
```bash
cd /starlink
npm install
```

### 2. Lint
```bash
npm run lint
```

### 3. Build
```bash
npm run build
```

### 4. Deploy to GitHub Pages
```bash
# Create the GitHub repo (requires gh CLI auth)
gh repo create ucfzem/starlink --public --source=. --push

# Or if repo already exists, push existing
git remote add origin https://github.com/ucfzem/starlink.git
git push -u origin main

# Enable GitHub Pages from dist/ folder in repo settings
# Or deploy via gh-pages package:
npm install -g gh-pages
# Add to package.json scripts:
# "deploy": "gh-pages -d dist"
npm run deploy
```

### Required GitHub Token
To authenticate with GitHub:
- Generate a PAT at: https://github.com/settings/tokens
- Required scopes: `repo`, `workflow` (for Pages deployment)
- Then: `gh auth login` and paste the token

---

## Project Architecture Summary

**LEO LIVE Satellite Tracker** — A React + Three.js WebGL application for tracking LEO satellites in real-time 3D.

### Key Features:
- **3D Globe** rendered with Three.js showing satellite positions as points
- **TLE Ticker** fetching from CelesTrak with fallback chain: Snapshot → IndexedDB Cache → Live Retry
- **Web Worker** for orbital propagation (satellite.js) keeping UI thread free
- **Simulation Clock** with pause/speed controls (1×, 60×, 600×)
- **Layer Panel** toggling ISS/Starlink/Weather/Science/Other groups
- **Search Box** with NORAD ID and name matching
- **Detail Panel** showing selected satellite metadata and orbit trajectory
- **URL Persistence** — selected satellite syncs to `?sat=NORAD_ID` URL param
- **Fallback Table** for browsers without WebGL
- **Adaptive DPR** — reduces pixel ratio under frame pressure for performance

### Tech Stack:
- React 18 + TypeScript + Vite
- Three.js for WebGL 3D globe
- satellite.js for orbit propagation (runs in Web Worker)
- idb-keyval for IndexedDB caching of TLE data
- Tailwind CSS for HUD styling
- Web Worker for off-main-thread computation
