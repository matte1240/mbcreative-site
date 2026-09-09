# syntax=docker/dockerfile:1

# The site is a static bundle, so the image is nginx plus `dist/`. Nothing is compiled
# at runtime and nothing is read from the network: what CI builds here is byte for byte
# what the cluster serves.
#
# Both stages are pinned by digest rather than by tag alone. A tag moves under you --
# `24-alpine` is a different image next month -- and an image that changes without a
# commit is the drift this cluster's repo exists to prevent.

# --- build -------------------------------------------------------------------
FROM node:24-alpine@sha256:e67514e5d0f6c46656005e1b693b2ec9d52e80b641307de684d4a015ba7a4eaf AS build

WORKDIR /src

# Manifests first, so a source-only change reuses the cached install layer.
COPY package.json package-lock.json ./
RUN npm ci

COPY tsconfig.json tsconfig.app.json tsconfig.node.json vite.config.ts index.html ./
COPY public ./public
COPY src ./src

# `npm run build` is `tsc -b && vite build`: a type error fails the image build rather
# than shipping a bundle nobody type-checked.
RUN npm run build

# --- serve -------------------------------------------------------------------
FROM nginx:1.31-alpine@sha256:72ba65eb42c10344912a84ff42408db7d34f2feb642204570ab8fc5ffd29f1d3

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /src/dist /usr/share/nginx/html

# nginx writes its pid and its temp bodies, and as uid 101 it can write to neither of
# these by default. The Deployment mounts tmpfs over both anyway (read-only root
# filesystem), but doing it here as well is what makes a plain `docker run` work for
# someone checking the image locally.
RUN chown -R 101:101 /var/cache/nginx /run

# 8080 rather than 80: binding a privileged port is the one thing that would force this
# container to start as root, and the namespace it lands in enforces `restricted`.
EXPOSE 8080
USER 101

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/healthz || exit 1
