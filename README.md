# mbcreative.cc

Portfolio site for **prox-lab** — a bare-metal Talos Kubernetes homelab cluster. React + Vite + TypeScript implementation of a Claude Design mockup, built on real facts from [matte1240/prox-lab](https://github.com/matte1240/prox-lab): three Talos control planes, a switchless 10GbE Longhorn storage mesh, dual-VIP exposure, and the fourth node's NVMe post-mortem.

Three screens — Home, Architettura, Status — toggled client-side, with an IT/EN language switch. Nocturne design system (dark, mono-accented, terminal/LED motifs).

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Status

- Copy, layout, and animations are ported pixel-for-pixel from the design mockup.
- The three photo slots (`src/components/ImageSlot.tsx`) are placeholders — no real photos wired in yet.
- Status-page metrics/gauges/probes are still the mockup's illustrative sample data (`src/data.ts`), not a live connection to the cluster's uptime-kuma.
