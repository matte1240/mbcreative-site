import type { Lang } from '../data'
import { getAddresses, getChoices, getSmart } from '../data'
import { ImageSlot } from '../components/ImageSlot'

type ArchPageProps = {
  lang: Lang
  showPostmortem: boolean
  goHome: () => void
  goStatus: () => void
}

export function ArchPage({ lang, showPostmortem, goHome, goStatus }: ArchPageProps) {
  const it = lang === 'it'
  const addresses = getAddresses(it)
  const choices = getChoices(it)
  const smart = getSmart(it)

  return (
    <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 28px' }}>
      <section style={{ padding: '64px 0 0', animation: 'noc-rise .6s ease both' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--color-accent-300)' }}>Architettura</span>
        {it ? (
          <div>
            <h1 style={{ fontSize: 'clamp(32px,3.4vw,44px)', margin: '14px 0 14px', letterSpacing: '-.026em', lineHeight: 1.08 }}>Due loop di controllo,<br />perché possiedono strati diversi.</h1>
            <p style={{ maxWidth: '66ch', fontSize: 16, lineHeight: 1.6, color: 'color-mix(in srgb, var(--color-text) 74%, transparent)', margin: 0 }}>Flux non può formattare un disco e Omni non ha opinioni su un HelmRelease. Omni decide cosa <em>è</em> una macchina — le sue estensioni, i suoi dischi, i suoi indirizzi — e Flux decide cosa gira sul cluster che quelle macchine formano.</p>
          </div>
        ) : (
          <div>
            <h1 style={{ fontSize: 'clamp(32px,3.4vw,44px)', margin: '14px 0 14px', letterSpacing: '-.026em', lineHeight: 1.08 }}>Two control loops,<br />because they own different layers.</h1>
            <p style={{ maxWidth: '66ch', fontSize: 16, lineHeight: 1.6, color: 'color-mix(in srgb, var(--color-text) 74%, transparent)', margin: 0 }}>Flux cannot format a disk and Omni has no opinion about a HelmRelease. Omni decides what a machine <em>is</em> — its extensions, its disks, its addresses — and Flux decides what runs on the cluster those machines form.</p>
          </div>
        )}
      </section>

      <section style={{ padding: '38px 0 0' }}>
        <div style={{ borderRadius: 'var(--radius-lg)', background: 'linear-gradient(180deg,#1c1e2e,#181a28)', boxShadow: 'var(--shadow-sm)', padding: '12px 8px 6px', overflow: 'hidden' }}>
          <svg viewBox="0 0 1080 420" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <defs>
              <pattern id="mbgrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M30 0H0V30" fill="none" stroke="#e9e9ed" strokeOpacity=".04" strokeWidth="1"></path>
              </pattern>
            </defs>
            <rect x="0" y="0" width="1080" height="420" fill="url(#mbgrid)"></rect>

            <g stroke="#9184d9" strokeWidth="1.5" fill="none" strokeDasharray="7 9" opacity=".7" style={{ animation: 'noc-flow 2.4s linear infinite' }}>
              <path d="M124 76 H 232"></path>
              <path d="M334 76 H 430"></path>
              <path d="M530 76 H 620"></path>
              <path d="M720 76 H 810"></path>
              <path d="M124 268 H 232"></path>
              <path d="M334 268 H 430"></path>
              <path d="M530 268 H 620"></path>
              <path d="M720 268 H 810"></path>
              <path d="M905 110 V 234"></path>
            </g>

            <g fontFamily="ui-monospace,Menlo,monospace">
              <text x="24" y="34" fontSize="9.5" fill="#75798c" letterSpacing="1.4">LIVELLO MACCHINA — omnictl cluster template sync</text>
              <g>
                <rect x="24" y="56" width="100" height="40" rx="6" fill="#232532" stroke="#3f424d"></rect>
                <text x="74" y="80" fontSize="10" fill="#e9e9ed" textAnchor="middle">omni/</text>
              </g>
              <g>
                <rect x="232" y="56" width="102" height="40" rx="6" fill="#232532" stroke="#5d5294"></rect>
                <text x="283" y="74" fontSize="10" fill="#d2cefd" textAnchor="middle">Omni</text>
                <text x="283" y="87" fontSize="7.5" fill="#75798c" textAnchor="middle">SideroLink</text>
              </g>
              <g>
                <rect x="430" y="56" width="100" height="40" rx="6" fill="#232532" stroke="#3f424d"></rect>
                <text x="480" y="74" fontSize="10" fill="#e9e9ed" textAnchor="middle">Talos config</text>
                <text x="480" y="87" fontSize="7.5" fill="#75798c" textAnchor="middle">v1.13.10</text>
              </g>
              <g>
                <rect x="620" y="56" width="100" height="40" rx="6" fill="#232532" stroke="#3f424d"></rect>
                <text x="670" y="74" fontSize="10" fill="#e9e9ed" textAnchor="middle">estensioni</text>
                <text x="670" y="87" fontSize="7.5" fill="#75798c" textAnchor="middle">iscsi · i915 · ucode</text>
              </g>
              <g>
                <rect x="810" y="56" width="190" height="54" rx="6" fill="#232532" stroke="#5d5294"></rect>
                <text x="905" y="76" fontSize="10" fill="#d2cefd" textAnchor="middle">3 × OptiPlex 3060</text>
                <text x="905" y="90" fontSize="7.5" fill="#75798c" textAnchor="middle">i5-9500T · 16 GiB · NVMe 256 GB</text>
                <circle cx="986" cy="66" r="2.6" fill="#b5abfc" style={{ animation: 'noc-led 1.4s ease-in-out infinite' }}></circle>
              </g>

              <text x="24" y="226" fontSize="9.5" fill="#75798c" letterSpacing="1.4">LIVELLO CLUSTER — git push</text>
              <g>
                <rect x="24" y="248" width="100" height="40" rx="6" fill="#232532" stroke="#3f424d"></rect>
                <text x="74" y="272" fontSize="10" fill="#e9e9ed" textAnchor="middle">git push</text>
              </g>
              <g>
                <rect x="232" y="248" width="102" height="40" rx="6" fill="#232532" stroke="#5d5294"></rect>
                <text x="283" y="266" fontSize="10" fill="#d2cefd" textAnchor="middle">Flux v2</text>
                <text x="283" y="279" fontSize="7.5" fill="#75798c" textAnchor="middle">riconcilia · prune</text>
              </g>
              <g>
                <rect x="430" y="240" width="100" height="56" rx="6" fill="#232532" stroke="#3f424d"></rect>
                <text x="480" y="258" fontSize="9.5" fill="#e9e9ed" textAnchor="middle">infra-</text>
                <text x="480" y="270" fontSize="9.5" fill="#e9e9ed" textAnchor="middle">controllers</text>
                <text x="480" y="285" fontSize="7.5" fill="#75798c" textAnchor="middle">MetalLB · Longhorn</text>
              </g>
              <g>
                <rect x="620" y="240" width="100" height="56" rx="6" fill="#232532" stroke="#3f424d"></rect>
                <text x="670" y="264" fontSize="9.5" fill="#e9e9ed" textAnchor="middle">infra-configs</text>
                <text x="670" y="281" fontSize="7.5" fill="#75798c" textAnchor="middle">pool · issuer · cert</text>
              </g>
              <g>
                <rect x="810" y="234" width="190" height="62" rx="6" fill="#232532" stroke="#5d5294"></rect>
                <text x="905" y="258" fontSize="10" fill="#d2cefd" textAnchor="middle">apps/prod</text>
                <text x="905" y="273" fontSize="7.5" fill="#75798c" textAnchor="middle">web · home-assistant · frigate</text>
                <text x="905" y="285" fontSize="7.5" fill="#75798c" textAnchor="middle">dozzle · mqtt · matter · truenas</text>
              </g>
              <text x="915" y="176" fontSize="8" fill="#75798c">le macchine formano</text>
              <text x="915" y="188" fontSize="8" fill="#75798c">il cluster</text>
            </g>
            <text x="24" y="404" fontFamily="ui-monospace,Menlo,monospace" fontSize="8" fill="#5f6376">dependsOn ordina le tre Kustomization: un IPAddressPool non può esistere prima delle CRD di MetalLB</text>
          </svg>
        </div>
      </section>

      <section style={{ padding: '60px 0 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 14 }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--color-accent-300)' }}>Storage</span>
          <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right,var(--color-divider),transparent)' }}></span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 26, alignItems: 'center' }}>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            {it ? (
              <div>
                <h2 style={{ fontSize: 29, margin: '0 0 10px', letterSpacing: '-.022em' }}>Una mesh 10GbE senza switch</h2>
                <p style={{ color: 'color-mix(in srgb, var(--color-text) 72%, transparent)', margin: '0 0 14px' }}>Ogni nodo ha una X540-AT2 a due porte, bondata in <code style={{ color: 'var(--color-accent-300)', fontSize: 13 }}>mode: broadcast</code> con MTU 9000: tre nodi collegati direttamente fra loro, nessuno switch 10G da comprare. Longhorn replica su <code style={{ color: 'var(--color-accent-300)', fontSize: 13 }}>10.0.40.0/24</code> tramite un attachment ipvlan su bond0.</p>
                <p style={{ color: 'color-mix(in srgb, var(--color-text) 72%, transparent)', margin: 0 }}>Solo i nodi con un disco libero tengono repliche. Un <code style={{ color: 'var(--color-accent-300)', fontSize: 13 }}>UserVolumeConfig</code> formatta l'NVMe di scorta e Talos lo monta su <code style={{ color: 'var(--color-accent-300)', fontSize: 13 }}>/var/mnt/longhorn</code>, così un volume impazzito non riempie il filesystem su cui vive etcd.</p>
              </div>
            ) : (
              <div>
                <h2 style={{ fontSize: 29, margin: '0 0 10px', letterSpacing: '-.022em' }}>A switchless 10GbE mesh</h2>
                <p style={{ color: 'color-mix(in srgb, var(--color-text) 72%, transparent)', margin: '0 0 14px' }}>Each node has a dual-port X540-AT2 bonded in <code style={{ color: 'var(--color-accent-300)', fontSize: 13 }}>mode: broadcast</code> at MTU 9000: three nodes wired directly to each other, no 10G switch to buy. Longhorn replicates over <code style={{ color: 'var(--color-accent-300)', fontSize: 13 }}>10.0.40.0/24</code> through an ipvlan attachment on bond0.</p>
                <p style={{ color: 'color-mix(in srgb, var(--color-text) 72%, transparent)', margin: 0 }}>Only nodes with a spare disk hold replicas. A <code style={{ color: 'var(--color-accent-300)', fontSize: 13 }}>UserVolumeConfig</code> formats the spare NVMe and Talos mounts it at <code style={{ color: 'var(--color-accent-300)', fontSize: 13 }}>/var/mnt/longhorn</code>, so a runaway volume cannot fill the filesystem etcd lives on.</p>
              </div>
            )}
          </div>
          <div style={{ flex: '1 1 320px', minWidth: 0, borderRadius: 'var(--radius-md)', background: 'linear-gradient(180deg,#1c1e2e,#181a28)', boxShadow: 'var(--shadow-sm)', padding: 12 }}>
            <svg viewBox="0 0 400 300" style={{ width: '100%', height: 'auto', display: 'block' }}>
              <g stroke="#9184d9" strokeWidth="2" fill="none" strokeDasharray="8 10" opacity=".75" style={{ animation: 'noc-flow 2s linear infinite' }}>
                <path d="M200 74 L 96 226"></path>
                <path d="M200 74 L 304 226"></path>
                <path d="M104 234 L 296 234"></path>
              </g>
              <g fontFamily="ui-monospace,Menlo,monospace" fontSize="9">
                <g>
                  <rect x="152" y="34" width="96" height="42" rx="6" fill="#232532" stroke="#5d5294"></rect>
                  <text x="200" y="52" fill="#d2cefd" textAnchor="middle" fontSize="10">talos-1</text>
                  <text x="200" y="66" fill="#75798c" textAnchor="middle" fontSize="8">10.0.40.101</text>
                </g>
                <g>
                  <rect x="16" y="224" width="96" height="42" rx="6" fill="#232532" stroke="#5d5294"></rect>
                  <text x="64" y="242" fill="#d2cefd" textAnchor="middle" fontSize="10">talos-2</text>
                  <text x="64" y="256" fill="#75798c" textAnchor="middle" fontSize="8">10.0.40.102</text>
                </g>
                <g>
                  <rect x="288" y="224" width="96" height="42" rx="6" fill="#232532" stroke="#5d5294"></rect>
                  <text x="336" y="242" fill="#d2cefd" textAnchor="middle" fontSize="10">talos-3</text>
                  <text x="336" y="256" fill="#75798c" textAnchor="middle" fontSize="8">10.0.40.103</text>
                </g>
                <text x="200" y="152" fill="#9184d9" textAnchor="middle" fontSize="11">bond0 · broadcast</text>
                <text x="200" y="168" fill="#75798c" textAnchor="middle" fontSize="8.5">MTU 9000 · 2 × 10GbE per nodo</text>
                <text x="200" y="292" fill="#5f6376" textAnchor="middle" fontSize="8">storage-net · ipvlan l2 · whereabouts .201–.250</text>
              </g>
            </svg>
          </div>
        </div>
        <figure style={{ margin: '26px 0 0' }}>
          <div style={{ position: 'relative', height: 'clamp(220px,26vw,320px)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <ImageSlot src="/images/homelab-mesh.webp" alt={it ? 'Illustrazione del retro di tre nodi homelab e dei collegamenti di rete' : 'Illustration of three homelab nodes viewed from the back with network cabling'} />
          </div>
          <figcaption style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', marginTop: 7 }}>{it ? 'Connessioni dietro le quinte. Illustrazione AI ispirata alla mesh, non uno schema di cablaggio.' : 'Connections behind the scenes. AI illustration inspired by the mesh, not a wiring diagram.'}</figcaption>
        </figure>
      </section>

      <section style={{ padding: '60px 0 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 20 }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--color-accent-300)' }}>Indirizzi</span>
          <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right,var(--color-divider),transparent)' }}></span>
        </div>
        <table className="table">
          <thead><tr><th>Che cosa</th><th>Indirizzo</th><th style={{ textAlign: 'right' }}>Come è assegnato</th></tr></thead>
          <tbody>
            {addresses.map((a) => (
              <tr key={a.what}>
                <td>{a.what}</td>
                <td style={{ fontFamily: 'var(--mono)', fontSize: '12.5px', color: 'var(--color-accent-300)' }}>{a.addr}</td>
                <td style={{ textAlign: 'right', fontSize: '12.5px', color: 'var(--dim)' }}>{a.how}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={{ padding: '60px 0 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 6 }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--color-accent-300)' }}>Scelte</span>
          <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right,var(--color-divider),transparent)' }}></span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 0 }}>
          {choices.map((c) => (
            <div key={c.title} style={{ padding: '22px 26px 24px 0', borderBottom: '1px solid var(--color-divider)' }}>
              <h4 style={{ fontSize: '16.5px', margin: '0 0 8px' }}>{c.title}</h4>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.58, color: 'color-mix(in srgb, var(--color-text) 68%, transparent)' }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {showPostmortem && (
        <section style={{ padding: '56px 0 0' }}>
          <div style={{ borderRadius: 'var(--radius-lg)', background: 'var(--color-surface)', boxShadow: 'var(--shadow-md)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', padding: '14px 20px', borderBottom: '1px solid var(--color-divider)' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--warn)' }}>Post-mortem</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--dim)', marginLeft: 'auto' }}>2026-09-06 · SPCC M.2 · AA000000000000001614</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 30, padding: '24px 20px 26px' }}>
              <div style={{ flex: '1 1 340px', minWidth: 0 }}>
                <h3 style={{ margin: '0 0 12px', fontSize: 22, letterSpacing: '-.015em' }}>C'era una quarta macchina, e il suo disco l'ha uccisa.</h3>
                <p style={{ fontSize: 14, lineHeight: 1.62, color: 'color-mix(in srgb, var(--color-text) 74%, transparent)', margin: '0 0 12px' }}>Un mini PC Ryzen con una sola porta 1GbE e un unico NVMe su cui Talos si era installato: non poteva contribuire né storage né banda a Longhorn, e si era unito come worker. La partizione <code style={{ color: 'var(--color-accent-300)', fontSize: 13 }}>EPHEMERAL</code> si è corrotta due volte in 24 ore su due filesystem formattati da zero in modo indipendente. Poi il disco ha smesso di fingere: <code style={{ color: 'var(--warn)', fontSize: 13 }}>input/output error</code> su ogni lettura e scrittura, nessun kubelet, e un upgrade del cluster bloccato a <code style={{ color: 'var(--dim)', fontSize: 13 }}>updating machines 1/4</code>.</p>
                <p style={{ fontSize: 14, lineHeight: 1.62, color: 'color-mix(in srgb, var(--color-text) 74%, transparent)', margin: 0 }}>È stata rimossa da <code style={{ color: 'var(--color-accent-300)', fontSize: 13 }}>omni/cluster.yaml</code>, che restituisce la macchina al pool di Omni con il suo SideroLink intatto: rimetterla dentro è un documento, se il disco viene sostituito. Perderla non è costato niente di cui il cluster dipenda.</p>
              </div>
              <div style={{ flex: '0 1 280px', minWidth: 240 }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.1em', color: 'var(--dim)', marginBottom: 12 }}>SMART: PASSED — I CONTATORI DEL DISCO, NO</div>
                {smart.map((s) => (
                  <div key={s.k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, padding: '9px 0', borderBottom: '1px solid color-mix(in srgb, var(--color-text) 8%, transparent)' }}>
                    <span style={{ fontSize: '12.5px', color: 'var(--dim)' }}>{s.k}</span>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 16, color: s.c }}>{s.v}</span>
                  </div>
                ))}
                <p style={{ margin: '12px 0 0', fontSize: '11.5px', lineHeight: 1.5, color: 'var(--dim)' }}>Una storia che indica una mapping table FTL danneggiata, non celle consumate.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'space-between', padding: '40px 0 44px', marginTop: 44, borderTop: '1px solid var(--color-divider)', fontSize: '12.5px', color: 'var(--dim)' }}>
        <span style={{ fontFamily: 'var(--mono)' }}>mbcreative.cc · prox-lab</span>
        <div style={{ display: 'flex', gap: 18 }}>
          <button onClick={goHome} style={{ background: 'none', border: 0, padding: 0, color: 'var(--color-accent)', font: 'inherit', cursor: 'pointer' }}>Home</button>
          <button onClick={goStatus} style={{ background: 'none', border: 0, padding: 0, color: 'var(--color-accent)', font: 'inherit', cursor: 'pointer' }}>Status</button>
          <a href="https://github.com/matte1240/prox-lab" target="_blank" rel="noopener">GitHub</a>
        </div>
      </footer>
    </div>
  )
}
