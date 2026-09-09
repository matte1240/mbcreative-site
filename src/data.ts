export type Lang = 'it' | 'en'
export type StatusMode = 'operativo' | 'degradato' | 'incidente'

/** Same waveform generator as the design's Component.spark(seed). */
export function spark(seed: number): string {
  let v = 14
  const out: string[] = []
  for (let i = 0; i <= 40; i++) {
    v += (Math.sin(i * 1.7 + seed) + Math.sin(i * 0.53 + seed * 2)) * 2.6
    v = Math.max(4, Math.min(20, v))
    out.push(`${i * 5},${v.toFixed(1)}`)
  }
  return out.concat(out.map((p, i) => `${200 + i * 5},${p.split(',')[1]}`)).join(' ')
}

export type Bar = { h: string; c: string; d: string }

/** Same uptime-bar generator as the design's Component.bars(seed, dips). */
export function bars(seed: number, dips: number[]): Bar[] {
  const out: Bar[] = []
  for (let i = 0; i < 45; i++) {
    const dip = dips.indexOf(i) !== -1
    const h = dip ? 34 + (i % 3) * 8 : 76 + (Math.sin(i * 1.3 + seed) + 1) * 12
    out.push({
      h: `${h.toFixed(0)}%`,
      c: dip ? 'var(--warn)' : 'var(--color-accent-500)',
      d: `${i * 12}ms`,
    })
  }
  return out
}

export const statusColor = (mode: StatusMode) =>
  mode === 'operativo' ? 'var(--color-accent-400)' : 'var(--warn)'

export const statusLabel = (mode: StatusMode) =>
  ({ operativo: 'CLUSTER OPERATIVO', degradato: 'PRESTAZIONI RIDOTTE', incidente: 'INCIDENTE IN CORSO' })[mode]

export function getMetrics(it: boolean) {
  return [
    { label: it ? 'Uptime cluster' : 'Cluster uptime', value: '41', unit: it ? 'giorni' : 'days', spark: spark(0.4) },
    { label: it ? 'Pod in esecuzione' : 'Running pods', value: '63', unit: '/ 110', spark: spark(1.9) },
    { label: it ? 'Repliche per volume' : 'Replicas per volume', value: '3', unit: '× NVMe', spark: spark(3.1) },
    { label: it ? 'Drift manuale' : 'Manual drift', value: '0', unit: 'kubectl apply', spark: spark(4.7) },
  ]
}

export const nodes = [
  {
    name: 'talos-1', d1: '0s', d2: '.3s', d3: '.7s', specs: [
      { k: 'Indirizzo nodo', v: '10.0.30.101/24' }, { k: 'Storage net', v: 'bond0 · 10.0.40.101' },
      { k: 'CPU / RAM', v: 'i5-9500T · 16 GiB' }, { k: 'Longhorn', v: 'nvme0n1 · 256 GB' },
      { k: 'NIC pinned', v: '20:e1:5d:ae:e9:bf' },
    ],
  },
  {
    name: 'talos-2', d1: '.2s', d2: '.9s', d3: '.5s', specs: [
      { k: 'Indirizzo nodo', v: '10.0.30.102/24' }, { k: 'Storage net', v: 'bond0 · 10.0.40.102' },
      { k: 'CPU / RAM', v: 'i5-9500T · 16 GiB' }, { k: 'Longhorn', v: 'nvme0n1 · 256 GB' },
      { k: 'Talos', v: 'v1.13.10 · k8s 1.36.4' },
    ],
  },
  {
    name: 'talos-3', d1: '.6s', d2: '.1s', d3: '1s', specs: [
      { k: 'Indirizzo nodo', v: '10.0.30.103/24' }, { k: 'Storage net', v: 'bond0 · 10.0.40.103' },
      { k: 'CPU / RAM', v: 'i5-9500T · 16 GiB' }, { k: 'Longhorn', v: 'nvme0n1 · 256 GB' },
      { k: 'Estensioni', v: 'i915 · iscsi · ucode' },
    ],
  },
]

export function getServices(it: boolean) {
  const pub = { exposure: 'public', tagColor: 'var(--color-accent-200)', tagBorder: 'color-mix(in srgb, var(--color-accent) 55%, transparent)' }
  const int = { exposure: 'internal', tagColor: 'color-mix(in srgb, #e9e9ed 62%, transparent)', tagBorder: 'var(--color-divider)' }
  const vip = { exposure: 'vip lan', tagColor: 'color-mix(in srgb, #e9e9ed 62%, transparent)', tagBorder: 'var(--color-divider)' }
  const rows: [string, string, string, typeof pub][] = [
    ['Sito vetrina', 'mbcreative.cc', it ? 'Questa pagina: tre repliche nginx distribuite su nodi distinti, contenuto da un ConfigMap generato.' : 'This page: three nginx replicas spread across distinct nodes, content from a generated ConfigMap.', pub],
    ['Home Assistant', 'homeassistant.mbcreative.cc', it ? 'Hub domotico con PVC Longhorn per /config. In container, non Home Assistant OS.' : 'Home automation hub with a Longhorn-backed PVC for /config. Container, not Home Assistant OS.', pub],
    ['Frigate', 'frigate.mbcreative.cc', it ? 'NVR con detection sull’iGPU UHD 630. Credenziali telecamere cifrate con SOPS.' : 'NVR with detection on the UHD 630 iGPU. Camera credentials encrypted with SOPS.', pub],
    ['Homepage', 'home.mbcreative.cc', it ? 'Dashboard del lab. Girava sul quarto nodo; ora si rischedula da sola.' : 'Lab dashboard. It ran on the fourth node; now it simply reschedules.', int],
    ['Dozzle', 'dozzle.mbcreative.cc', it ? 'Log in streaming di tutti i pod. Ristretto agli entrypoint LAN.' : 'Streaming logs for every pod. Restricted to the LAN entrypoints.', int],
    ['Longhorn UI', 'longhorn.mbcreative.cc', it ? 'Volumi, repliche e snapshot. Ingress interno per applicazione.' : 'Volumes, replicas and snapshots. Internal Ingress by enforcement.', int],
    ['TrueNAS', 'truenas.mbcreative.cc', it ? 'Reverse proxy verso il NAS ZFS, per non parlare a un certificato non attendibile.' : 'Reverse proxy to the ZFS NAS, so nothing talks to an untrusted certificate.', int],
    ['uptime-kuma', 'uptime.mbcreative.cc', it ? 'Le sonde che alimentano la pagina Status.' : 'The probes behind the Status page.', int],
    ['Mosquitto', '10.0.30.241:1883', it ? 'Broker MQTT su VIP MetalLB dedicato. Nessuna superficie HTTP.' : 'MQTT broker on its own MetalLB VIP. No HTTP surface at all.', vip],
    ['Matter server', '10.0.30.242:5580', it ? 'Controller Matter in hostNetwork, per il discovery mDNS.' : 'Matter controller on hostNetwork, for mDNS discovery.', vip],
  ]
  return rows.map(([name, host, desc, tag]) => ({ name, host, desc, ...tag }))
}

export function getPrinciples(it: boolean) {
  return it
    ? [
        { num: '01 / DRIFT_ZERO', title: 'Git è l’unica fonte di verità', body: 'Nessun kubectl apply a mano. Se una risorsa non è nel repository non deve esistere nel cluster: Flux fa il prune.' },
        { num: '02 / IMMUTABILITY', title: 'Nessuna shell, nessun SSH', body: 'Talos gira su filesystem read-only e non ha package manager. Un upgrade sostituisce l’immagine intera al reboot.' },
        { num: '03 / FAIL_CLOSED', title: 'Esporre richiede una dichiarazione', body: 'Una configurazione mancante o sbagliata finisce isolata sulla LAN, non su internet. Il VIP interno rifiuta per source range.' },
        { num: '04 / PINNED', title: 'Versioni fissate, non a intervalli', body: 'Un aggiornamento è un commit con un diff, non qualcosa che accade di notte. La CI rende ogni chart alla versione fissata qui.' },
      ]
    : [
        { num: '01 / DRIFT_ZERO', title: 'Git is the only source of truth', body: 'No manual kubectl apply. If a resource is not in the repository it must not exist in the cluster: Flux prunes it.' },
        { num: '02 / IMMUTABILITY', title: 'No shell, no SSH', body: 'Talos runs a read-only filesystem and ships no package manager. An upgrade replaces the whole OS image on reboot.' },
        { num: '03 / FAIL_CLOSED', title: 'Exposure takes a declaration', body: 'A missing or wrong config ends up isolated on the LAN, not on the internet. The internal VIP refuses by source range.' },
        { num: '04 / PINNED', title: 'Versions pinned, not ranged', body: 'An upgrade is a commit with a diff, not something that happens overnight. CI renders every chart at the version pinned here.' },
      ]
}

export function getAddresses(it: boolean) {
  return [
    { what: 'Kubernetes API', addr: 'via Omni', how: 'omnictl kubeconfig' },
    { what: 'Pool MetalLB', addr: '10.0.30.240–250', how: 'IPAddressPool, autoAssign' },
    { what: 'Traefik interno', addr: '10.0.30.240', how: 'annotation · RFC1918 only' },
    { what: 'Mosquitto', addr: '10.0.30.241', how: it ? 'annotation, fissato' : 'annotation, pinned' },
    { what: 'Matter server', addr: '10.0.30.242', how: it ? 'annotation, fissato' : 'annotation, pinned' },
    { what: it ? 'Traefik pubblicato' : 'Traefik, published', addr: '10.0.30.243', how: it ? 'unico target del router' : 'the router’s only target' },
    { what: it ? 'Nodi' : 'Nodes', addr: '10.0.30.101–103', how: it ? 'statici, NIC per MAC' : 'static, NIC by MAC' },
    { what: it ? 'Rete storage' : 'Storage network', addr: '10.0.40.0/24', how: 'bond0 · MTU 9000' },
  ]
}

export function getChoices(it: boolean) {
  return it
    ? [
        { title: 'Tre control plane, non quattro', body: 'Quattro membri etcd servono tre voti per il quorum e tollerano comunque un solo guasto. Questo cluster ci è già cascato: con un membro irraggiungibile, i due più avanzati hanno votato per sé stessi e l’elezione non si è mai risolta.' },
        { title: 'La porta 2.5GbE è fissata per MAC', body: 'Entrambe le NIC prendevano DHCP sulla stessa /24, lasciando l’IP del nodo su quella che il kubelet pescava. Longhorn replica sull’IP del nodo, quindi la replica era silenziosamente ferma a 1 Gbps.' },
        { title: 'Longhorn ha bisogno di estensioni', body: 'iscsi-tools e util-linux-tools non sono nell’immagine Talos di serie. Omni le porta per macchina; cambiare la lista ricostruisce lo schematic e riavvia il nodo.' },
        { title: 'Un disco dedicato, non una directory', body: 'Un UserVolumeConfig formatta l’NVMe di scorta e Talos lo monta su /var/mnt/longhorn, così un volume impazzito non riempie il filesystem su cui vive etcd.' },
        { title: 'lldpd è assente, di proposito', body: 'Aggiunto e rimosso lo stesso giorno: il suo service dichiara depends: configuration, quindi Talos aspettava per sempre un secondo documento e il boot restava bloccato su ext-lldpd. E comunque non guardava bond0.' },
      ]
    : [
        { title: 'Three control planes, not four', body: 'Four etcd members need three votes for quorum and still tolerate only one failure. This cluster has already been bitten: with one member unreachable, the two most-advanced each voted for themselves and the election never resolved.' },
        { title: 'The 2.5GbE port is pinned by MAC', body: 'Both NICs were taking DHCP on the same /24, leaving the node IP on whichever the kubelet picked. Longhorn replicates over the node IP, so replication was silently capped at 1Gbps.' },
        { title: 'Longhorn needs system extensions', body: 'iscsi-tools and util-linux-tools are not in a stock Talos image. Omni carries them per machine; changing that list rebuilds the schematic and reboots the node.' },
        { title: 'A dedicated disk, not a directory', body: 'A UserVolumeConfig formats the spare NVMe and Talos mounts it at /var/mnt/longhorn, so a runaway volume cannot fill the filesystem etcd lives on.' },
        { title: 'lldpd is deliberately absent', body: 'Added and removed the same day: its service declares depends: configuration, so Talos waited forever on a second config document and the boot hung on ext-lldpd. It never looked at bond0 anyway.' },
      ]
}

export function getSmart(it: boolean) {
  return [
    { k: it ? 'Cicli di accensione' : 'Power cycles', v: '194.185', c: 'var(--warn)' },
    { k: it ? 'Ore di accensione' : 'Power-on hours', v: '22.168', c: 'var(--color-text)' },
    { k: it ? 'Spegnimenti anomali' : 'Unsafe shutdowns', v: '410', c: 'var(--warn)' },
  ]
}

export function getGauges(it: boolean) {
  return [
    { label: it ? 'Quorum etcd' : 'etcd quorum', sub: '3/3', value: it ? 'sano' : 'healthy', pct: '100%' },
    { label: 'CPU', sub: '12 core', value: '18%', pct: '18%' },
    { label: it ? 'Memoria' : 'Memory', sub: '48 GiB', value: '41%', pct: '41%' },
    { label: it ? 'Storage Longhorn' : 'Longhorn storage', sub: '768 GB', value: '31%', pct: '31%' },
  ]
}

export const monitors = [
  { name: 'Sito vetrina', host: 'mbcreative.cc', bars: bars(0.2, []), up: '100%', ms: '14 ms', upColor: 'var(--color-accent-300)' },
  { name: 'Home Assistant', host: 'homeassistant.mbcreative.cc', bars: bars(1.1, [38]), up: '99,94%', ms: '62 ms', upColor: 'var(--color-accent-300)' },
  { name: 'Frigate', host: 'frigate.mbcreative.cc', bars: bars(2.3, [38, 39]), up: '99,71%', ms: '108 ms', upColor: 'var(--color-accent-300)' },
  { name: 'Traefik interno', host: '10.0.30.240', bars: bars(3.4, []), up: '100%', ms: '3 ms', upColor: 'var(--color-accent-300)' },
  { name: 'Traefik pubblicato', host: '10.0.30.243', bars: bars(4.6, []), up: '100%', ms: '4 ms', upColor: 'var(--color-accent-300)' },
  { name: 'Longhorn UI', host: 'longhorn.mbcreative.cc', bars: bars(5.2, [37, 38, 39]), up: '99,42%', ms: '27 ms', upColor: 'var(--warn)' },
  { name: 'Mosquitto', host: '10.0.30.241:1883', bars: bars(6.8, []), up: '100%', ms: '2 ms', upColor: 'var(--color-accent-300)' },
  { name: 'TrueNAS', host: 'truenas.mbcreative.cc', bars: bars(7.5, [12]), up: '99,88%', ms: '19 ms', upColor: 'var(--color-accent-300)' },
]

export const volumes = [
  { name: 'pvc-home-assistant-config', size: '10 GiB' },
  { name: 'pvc-frigate-media', size: '200 GiB' },
  { name: 'pvc-frigate-config', size: '2 GiB' },
  { name: 'pvc-uptime-kuma-data', size: '4 GiB' },
  { name: 'pvc-mosquitto-data', size: '1 GiB' },
]

export function getIncidents(it: boolean) {
  return it
    ? [
        { date: '2026-09-06', dur: '4 h 12 m', c: 'var(--warn)', title: 'NVMe del quarto nodo: input/output error', body: 'Terzo guasto in 48 ore, questa volta non corruzione ma errori su ogni lettura. Upgrade del cluster bloccato a 1/4. La macchina è stata rimossa dal template Omni.' },
        { date: '2026-09-07', dur: '38 m', c: 'var(--warn)', title: 'Boot bloccato su ext-lldpd', body: 'L’estensione lldpd attende un ExtensionServiceConfig che non esisteva. Rimossa dallo stesso sync.' },
        { date: '2026-08-22', dur: '11 m', c: 'var(--color-accent-500)', title: 'Replica Longhorn a 1 Gbps', body: 'Il node IP era finito sulla NIC da 1G. Risolto fissando la porta 2.5GbE per indirizzo hardware.' },
      ]
    : [
        { date: '2026-09-06', dur: '4 h 12 m', c: 'var(--warn)', title: 'Fourth node NVMe: input/output error', body: 'Third failure in 48 hours, this time not corruption but errors on every read. Cluster upgrade stuck at 1/4. The machine was removed from the Omni template.' },
        { date: '2026-09-07', dur: '38 m', c: 'var(--warn)', title: 'Boot hung on ext-lldpd', body: 'The lldpd extension waits on an ExtensionServiceConfig that did not exist. Removed in the same sync.' },
        { date: '2026-08-22', dur: '11 m', c: 'var(--color-accent-500)', title: 'Longhorn replicating at 1 Gbps', body: 'The node IP had landed on the 1G NIC. Fixed by pinning the 2.5GbE port by hardware address.' },
      ]
}
