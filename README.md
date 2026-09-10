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

## Deploy on Kubernetes

The site is a static bundle, so the image is nginx plus `dist/`. Everything the cluster
needs is in three places:

| Path | What it is |
| --- | --- |
| `Dockerfile`, `deploy/nginx.conf` | multi-stage build: `npm ci && npm run build`, then nginx on 8080 as uid 101 |
| `deploy/k8s/` | Namespace, Deployment, Service, Ingress and PodDisruptionBudget — `kustomize build deploy/k8s` |
| `deploy/flux/mbcreative-site.yaml` | the file to copy into [prox-lab](https://github.com/matte1240/prox-lab) so Flux reconciles `deploy/k8s/` from here |

`.github/workflows/publish-image.yaml` publishes the image to
`ghcr.io/matte1240/mbcreative-site`: `main` on every push to the default branch, plus an
immutable `sha-<short commit>` for every build. `deploy/k8s/kustomization.yaml` is the one
place a tag is written down — a reproducible deploy pins a `sha-` there, and a rollback is
reverting that commit.

### Locally

```sh
docker build -t mbcreative-site:dev .
docker run --rm -p 8080:8080 mbcreative-site:dev   # http://localhost:8080
```

### On the cluster

```sh
kubectl apply -k deploy/k8s          # one-off, by hand
```

Under Flux, in prox-lab instead: add `deploy/flux/mbcreative-site.yaml` as
`clusters/prod/web.yaml` and, in the same commit, drop `- ../base/web` from
`apps/prod/kustomization.yaml` — the prune removes the old ConfigMap-served page in the
reconcile that brings this one up.

Two details that are only visible once they are missing:

- **The GHCR package has to be public**, or the `web` namespace needs an
  `imagePullSecret`: Talos nodes carry no registry credentials.
- **The Ingress carries the entrypoint annotation as well as the
  `mbcreative.cc/exposure` label.** In prox-lab that annotation is rendered from the label
  by `components/exposure/`, which a Flux Kustomization pointed at this repository does
  not pass through. The two have to be kept in step with that component — it is still the
  definition of what internal and public mean.

The workload meets the `restricted` Pod Security level: nginx on 8080 as uid 101, a
read-only root filesystem (pid and temp bodies on tmpfs), every capability dropped,
seccomp `RuntimeDefault`. Three replicas spread one per node, with a `minAvailable: 2`
PodDisruptionBudget so a Talos upgrade cannot take the page down.

## Status

- Copy, layout, and animations are ported pixel-for-pixel from the design mockup.
- The three photo slots (`src/components/ImageSlot.tsx`) are placeholders — no real photos wired in yet.
- Status-page metrics/gauges/probes are still the mockup's illustrative sample data (`src/data.ts`), not a live connection to the cluster's uptime-kuma.
- The image is built and published by CI; the cluster manifests live in `deploy/k8s/` and are validated on every push (`kustomize build` + `kubeconform`).


## Aggiornamenti e deploy

Ogni push applicativo su `main` pubblica `ghcr.io/matte1240/mbcreative-site:main` e
un tag immutabile per commit. Il Deployment conserva il tag leggibile `main`, fissato
al digest OCI effettivamente distribuito. Renovate controlla quel digest: quando
l'immagine cambia apre una PR; il merge modifica il Pod template e Flux esegue il
rolling update. Le modifiche del solo manifest di deploy non ricostruiscono l'immagine,
così il digest appena approvato non diventa immediatamente obsoleto.
