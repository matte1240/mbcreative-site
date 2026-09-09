import type { Lang } from '../data'
import { getMetrics, nodes, getServices, getPrinciples } from '../data'
import { ImageSlot } from '../components/ImageSlot'

type HomePageProps = {
  lang: Lang
  goArch: () => void
  goStatus: () => void
}

export function HomePage({ lang, goArch, goStatus }: HomePageProps) {
  const it = lang === 'it'
  const metrics = getMetrics(it)
  const services = getServices(it)
  const principles = getPrinciples(it)

  return (
    <div>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 28px' }}>
        <section style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center', padding: '74px 0 58px' }}>
          <div style={{ flex: '1 1 400px', minWidth: 0, animation: 'noc-rise .7s ease both' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
              <span style={{ width: 24, height: 1, background: 'var(--color-accent)', flex: 'none' }}></span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--color-accent-300)' }}>
                Bare-metal Kubernetes · GitOps · self-hosted
              </span>
            </div>
            {it ? (
              <div>
                <h1 style={{ fontSize: 'clamp(34px,4vw,52px)', lineHeight: 1.06, letterSpacing: '-.028em', margin: '0 0 20px', textWrap: 'pretty' }}>
                  Tre Dell in uno sgabuzzino,<br />gestiti come un cluster<br />di produzione.
                </h1>
                <p style={{ fontSize: '16.5px', lineHeight: 1.6, maxWidth: '54ch', color: 'color-mix(in srgb, var(--color-text) 76%, transparent)', margin: '0 0 26px' }}>
                  Sono Matte. <strong style={{ fontWeight: 500, color: 'var(--color-text)' }}>prox-lab</strong> è un cluster Kubernetes su tre OptiPlex 3060: Talos Linux immutabile gestito da Omni, storage Longhorn su una mesh 10GbE senza switch, Flux che riconcilia tutto da un solo repository. Dopo il bootstrap, l'unico modo per cambiare qualcosa è un <code style={{ color: 'var(--color-accent-300)', fontSize: 13 }}>git push</code>.
                </p>
              </div>
            ) : (
              <div>
                <h1 style={{ fontSize: 'clamp(34px,4vw,52px)', lineHeight: 1.06, letterSpacing: '-.028em', margin: '0 0 20px', textWrap: 'pretty' }}>
                  Three Dells in a closet,<br />run like a production<br />cluster.
                </h1>
                <p style={{ fontSize: '16.5px', lineHeight: 1.6, maxWidth: '54ch', color: 'color-mix(in srgb, var(--color-text) 76%, transparent)', margin: '0 0 26px' }}>
                  I'm Matte. <strong style={{ fontWeight: 500, color: 'var(--color-text)' }}>prox-lab</strong> is a Kubernetes cluster on three OptiPlex 3060s: immutable Talos Linux managed by Omni, Longhorn storage over a switchless 10GbE mesh, Flux reconciling everything from one repository. After bootstrap, the only way anything changes is a <code style={{ color: 'var(--color-accent-300)', fontSize: 13 }}>git push</code>.
                </p>
              </div>
            )}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <button className="btn btn-primary" onClick={goArch}>
                Architettura
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
              </button>
              <a className="btn btn-secondary" href="https://github.com/matte1240/prox-lab" target="_blank" rel="noopener">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>
                matte1240/prox-lab
              </a>
            </div>
          </div>

          <div style={{ flex: '1 1 400px', minWidth: 0, animation: 'noc-rise .7s .1s ease both' }}>
            <div style={{ borderRadius: 'var(--radius-lg)', background: 'var(--color-surface)', boxShadow: 'var(--shadow-md)', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '9px 13px', borderBottom: '1px solid var(--color-divider)' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-neutral-700)' }}></span>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-neutral-700)' }}></span>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-neutral-700)' }}></span>
                <span style={{ marginLeft: 6, fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--dim)' }}>omnictl · talos-default</span>
              </div>
              <div style={{ padding: '16px 15px 18px', fontFamily: 'var(--mono)', fontSize: '12.5px', lineHeight: 1.9 }}>
                <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: 0, animation: 'noc-type .5s .3s steps(24) forwards' }}><span style={{ color: 'var(--color-accent)' }}>➜</span> omnictl get machines</div>
                <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: 0, animation: 'noc-type .35s .9s steps(38) forwards', color: 'var(--dim)' }}>talos-1  Running   10.0.30.101</div>
                <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: 0, animation: 'noc-type .35s 1.2s steps(38) forwards', color: 'var(--dim)' }}>talos-2  Running   10.0.30.102</div>
                <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: 0, animation: 'noc-type .35s 1.5s steps(38) forwards', color: 'var(--dim)' }}>talos-3  Running   10.0.30.103</div>
                <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: 0, animation: 'noc-type .5s 2s steps(28) forwards' }}><span style={{ color: 'var(--color-accent)' }}>➜</span> flux get kustomizations</div>
                <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: 0, animation: 'noc-type .5s 2.6s steps(44) forwards', color: 'var(--dim)' }}>apps  True  Applied main@4ac6e7b</div>
                <div style={{ display: 'flex', gap: 7, opacity: 0, animation: 'noc-fade .1s 3.2s forwards' }}>
                  <span style={{ color: 'var(--color-accent)' }}>➜</span>
                  <span style={{ display: 'inline-block', width: 8, height: 15, background: 'var(--color-accent)', animation: 'noc-caret 1.05s step-end infinite' }}></span>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative', height: 170, borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', marginTop: 12 }}>
              <ImageSlot src="/images/homelab-detail.webp" alt={it ? 'Illustrazione: dettaglio di una porta Ethernet con cavo e LED verdi' : 'Illustration: Ethernet port close-up with a cable and green LEDs'} />
            </div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--dim)', margin: '9px 2px 0' }}>Due loop di controllo: Omni decide cosa <em>è</em> una macchina, Flux cosa gira sopra.</p>
          </div>
        </section>
      </div>

      <section style={{ background: 'var(--color-section)', backgroundImage: 'radial-gradient(120% 150% at 10% -30%, var(--color-section-glow) 0%, transparent 60%)', borderTop: '1px solid color-mix(in srgb, var(--color-section-ghost) 55%, transparent)', borderBottom: '1px solid color-mix(in srgb, var(--color-section-ghost) 55%, transparent)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '32px 28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(178px,1fr))', gap: 26 }}>
          {metrics.map((m) => (
            <div key={m.label} style={{ minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.13em', textTransform: 'uppercase', color: 'color-mix(in srgb, #e9e9ed 58%, transparent)' }}>{m.label}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '7px 0 9px' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 31, letterSpacing: '-.03em', lineHeight: 1 }}>{m.value}</span>
                <span style={{ fontSize: 12, color: 'color-mix(in srgb, #e9e9ed 52%, transparent)' }}>{m.unit}</span>
              </div>
              <div style={{ height: 24, overflow: 'hidden' }}>
                <svg viewBox="0 0 200 24" preserveAspectRatio="none" style={{ width: '200%', height: '100%', animation: 'noc-scroll 11s linear infinite' }}>
                  <polyline points={m.spark} fill="none" stroke="#b5abfc" strokeWidth="1.3" strokeLinejoin="round" opacity=".8"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 28px' }}>
        <section style={{ padding: '70px 0 0' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 14 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--color-accent-300)' }}>01 — Le macchine</span>
            <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right,var(--color-divider),transparent)' }}></span>
          </div>
          {it ? (
            <div>
              <h2 style={{ fontSize: 32, margin: '0 0 10px', letterSpacing: '-.022em' }}>Tre nodi identici, tutti schedulabili</h2>
              <p style={{ maxWidth: '64ch', color: 'color-mix(in srgb, var(--color-text) 72%, transparent)', margin: '0 0 30px' }}>Tre membri etcd e non quattro: quattro hanno bisogno di tre voti per il quorum e tollerano comunque un solo guasto. <code style={{ color: 'var(--color-accent-300)', fontSize: 13 }}>allowSchedulingOnControlPlanes</code> è ciò che li rende utili.</p>
            </div>
          ) : (
            <div>
              <h2 style={{ fontSize: 32, margin: '0 0 10px', letterSpacing: '-.022em' }}>Three identical nodes, all schedulable</h2>
              <p style={{ maxWidth: '64ch', color: 'color-mix(in srgb, var(--color-text) 72%, transparent)', margin: '0 0 30px' }}>Three etcd members and not four: four need three votes for quorum and still tolerate only one failure. <code style={{ color: 'var(--color-accent-300)', fontSize: 13 }}>allowSchedulingOnControlPlanes</code> is what makes them useful.</p>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
            {nodes.map((n) => (
              <div key={n.name} style={{ borderRadius: 'var(--radius-md)', background: 'var(--color-surface)', boxShadow: 'var(--shadow-sm)', padding: '16px 16px 14px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--color-text)' }}>{n.name}</span>
                  <span style={{ flex: 1 }}></span>
                  <span style={{ display: 'flex', gap: 3 }}>
                    <span style={{ width: 4, height: 9, borderRadius: 1, background: 'var(--color-accent-400)', animation: 'noc-led 1.4s ease-in-out infinite', animationDelay: n.d1 }}></span>
                    <span style={{ width: 4, height: 9, borderRadius: 1, background: 'var(--color-accent-400)', animation: 'noc-led 1.4s ease-in-out infinite', animationDelay: n.d2 }}></span>
                    <span style={{ width: 4, height: 9, borderRadius: 1, background: 'var(--color-accent-400)', animation: 'noc-led 1.4s ease-in-out infinite', animationDelay: n.d3 }}></span>
                  </span>
                  <span className="tag tag-accent" style={{ fontFamily: 'var(--mono)' }}>control plane</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {n.specs.map((s) => (
                    <div key={s.k} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, padding: '5px 0', borderBottom: '1px solid color-mix(in srgb, var(--color-text) 7%, transparent)', fontSize: '12.5px' }}>
                      <span style={{ color: 'var(--dim)', flex: 'none' }}>{s.k}</span>
                      <span style={{ fontFamily: 'var(--mono)', textAlign: 'right', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <figure style={{ margin: '16px 0 0' }}>
            <div style={{ position: 'relative', height: 'clamp(240px,32vw,380px)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <ImageSlot src="/images/homelab-nodes.webp" alt={it ? 'Illustrazione di tre mini PC neri con illuminazione viola soffusa' : 'Illustration of three black mini PCs with subtle violet lighting'} />
            </div>
            <figcaption style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', marginTop: 7 }}>{it ? 'Tre nodi, un solo lab. Illustrazione generata con AI.' : 'Three nodes, one lab. AI-generated illustration.'}</figcaption>
          </figure>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--dim)', margin: '14px 0 0' }}>Le porte 2.5GbE sono fissate per indirizzo hardware: entrambe le NIC prendevano DHCP sulla stessa /24 e Longhorn replicava sull'IP sbagliato, a 1 Gbps.</p>
        </section>

        <section style={{ padding: '70px 0 0' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 14 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--color-accent-300)' }}>02 — Esposizione</span>
            <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right,var(--color-divider),transparent)' }}></span>
          </div>
          {it ? (
            <div>
              <h2 style={{ fontSize: 32, margin: '0 0 10px', letterSpacing: '-.022em' }}>Interno per applicazione, non per convenzione</h2>
              <p style={{ maxWidth: '64ch', color: 'color-mix(in srgb, var(--color-text) 72%, transparent)', margin: '0 0 30px' }}>Due VIP, due coppie di entrypoint Traefik e una etichetta per Ingress. Il VIP interno porta <code style={{ color: 'var(--color-accent-300)', fontSize: 13 }}>loadBalancerSourceRanges</code> limitato a RFC1918: un port forward puntato all'indirizzo sbagliato fallisce chiuso.</p>
            </div>
          ) : (
            <div>
              <h2 style={{ fontSize: 32, margin: '0 0 10px', letterSpacing: '-.022em' }}>Internal by enforcement, not convention</h2>
              <p style={{ maxWidth: '64ch', color: 'color-mix(in srgb, var(--color-text) 72%, transparent)', margin: '0 0 30px' }}>Two VIPs, two pairs of Traefik entrypoints, one label per Ingress. The internal VIP carries <code style={{ color: 'var(--color-accent-300)', fontSize: 13 }}>loadBalancerSourceRanges</code> covering RFC1918 only, so a port forward aimed at the wrong address fails closed.</p>
            </div>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, alignItems: 'stretch' }}>
            <div style={{ flex: '1 1 330px', minWidth: 0, borderRadius: 'var(--radius-md)', background: '#12141f', boxShadow: 'var(--shadow-sm)', padding: 16, fontFamily: 'var(--mono)', fontSize: '12.5px', lineHeight: 1.75, overflow: 'auto' }}>
              <div style={{ color: 'var(--dim)', fontSize: 10, letterSpacing: '.1em', marginBottom: 10 }}>COMPONENTS/EXPOSURE — UNA SOLA DEFINIZIONE</div>
              <div><span style={{ color: 'var(--color-neutral-500)' }}>metadata:</span></div>
              <div>&nbsp;&nbsp;<span style={{ color: 'var(--color-neutral-500)' }}>labels:</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--color-accent-300)' }}>mbcreative.cc/exposure</span>: internal <span style={{ color: 'var(--color-neutral-600)' }}># 10.0.30.240</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--color-accent-300)' }}>mbcreative.cc/exposure</span>: public &nbsp;&nbsp;<span style={{ color: 'var(--color-neutral-600)' }}># + 10.0.30.243</span></div>
              <div style={{ height: 12 }}></div>
              <div style={{ color: 'var(--color-neutral-600)' }}># cosa c'è su internet?</div>
              <div><span style={{ color: 'var(--color-accent)' }}>➜</span> kubectl get ingress -A \</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;-l mbcreative.cc/exposure=public</div>
            </div>
            <div style={{ flex: '1 1 330px', minWidth: 0, borderRadius: 'var(--radius-md)', background: 'linear-gradient(180deg,#1c1e2e,#191b29)', boxShadow: 'var(--shadow-sm)', padding: '14px 10px' }}>
              <svg viewBox="0 0 420 220" style={{ width: '100%', height: 'auto', display: 'block' }}>
                <g stroke="#9184d9" strokeWidth="1.5" fill="none" strokeDasharray="6 8" opacity=".65" style={{ animation: 'noc-flow 2.6s linear infinite' }}>
                  <path d="M52 46 H 150"></path>
                  <path d="M150 46 H 246"></path>
                  <path d="M246 46 V 120 H 300"></path>
                  <path d="M52 168 H 246 V 140"></path>
                </g>
                <g fontFamily="ui-monospace,Menlo,monospace" fontSize="9.5">
                  <rect x="8" y="30" width="44" height="32" rx="5" fill="#232532" stroke="#3f424d"></rect>
                  <text x="30" y="50" fill="#e9e9ed" textAnchor="middle" fontSize="9">WAN</text>
                  <rect x="104" y="30" width="46" height="32" rx="5" fill="#232532" stroke="#3f424d"></rect>
                  <text x="127" y="50" fill="#e9e9ed" textAnchor="middle" fontSize="9">UniFi</text>
                  <rect x="196" y="30" width="50" height="32" rx="5" fill="#232532" stroke="#5d5294"></rect>
                  <text x="221" y="45" fill="#d2cefd" textAnchor="middle" fontSize="9">.243</text>
                  <text x="221" y="56" fill="#75798c" textAnchor="middle" fontSize="7.5">public</text>
                  <rect x="8" y="152" width="60" height="32" rx="5" fill="none" stroke="#5d5294" strokeDasharray="3 3"></rect>
                  <text x="38" y="167" fill="#d2cefd" textAnchor="middle" fontSize="9">LAN</text>
                  <text x="38" y="178" fill="#75798c" textAnchor="middle" fontSize="7.5">RFC1918</text>
                  <rect x="196" y="108" width="50" height="32" rx="5" fill="#232532" stroke="#5d5294"></rect>
                  <text x="221" y="123" fill="#d2cefd" textAnchor="middle" fontSize="9">.240</text>
                  <text x="221" y="134" fill="#75798c" textAnchor="middle" fontSize="7.5">internal</text>
                  <rect x="300" y="88" width="108" height="64" rx="6" fill="#232532" stroke="#3f424d"></rect>
                  <text x="354" y="112" fill="#e9e9ed" textAnchor="middle" fontSize="10">Traefik</text>
                  <text x="354" y="126" fill="#75798c" textAnchor="middle" fontSize="7.5">4 entrypoint</text>
                  <text x="354" y="139" fill="#75798c" textAnchor="middle" fontSize="7.5">TLS *.mbcreative.cc</text>
                  <circle cx="396" cy="99" r="2.6" fill="#b5abfc" style={{ animation: 'noc-led 1.5s ease-in-out infinite' }}></circle>
                </g>
                <text x="8" y="208" fontFamily="ui-monospace,Menlo,monospace" fontSize="8" fill="#75798c">CI fallisce la build se l'annotation resa non concorda con l'etichetta</text>
              </svg>
            </div>
          </div>
        </section>

        <section style={{ padding: '70px 0 0' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 14 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--color-accent-300)' }}>03 — Workload</span>
            <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right,var(--color-divider),transparent)' }}></span>
          </div>
          {it ? (
            <div>
              <h2 style={{ fontSize: 32, margin: '0 0 10px', letterSpacing: '-.022em' }}>Cosa gira sul cluster</h2>
              <p style={{ maxWidth: '64ch', color: 'color-mix(in srgb, var(--color-text) 72%, transparent)', margin: '0 0 26px' }}>Dieci basi Kustomize riconciliate da un solo overlay. L'etichetta di esposizione decide dove ognuna è raggiungibile.</p>
            </div>
          ) : (
            <div>
              <h2 style={{ fontSize: 32, margin: '0 0 10px', letterSpacing: '-.022em' }}>What runs on the cluster</h2>
              <p style={{ maxWidth: '64ch', color: 'color-mix(in srgb, var(--color-text) 72%, transparent)', margin: '0 0 26px' }}>Ten Kustomize bases reconciled from a single overlay. The exposure label decides where each one is reachable.</p>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 12 }}>
            {services.map((s) => (
              <div key={s.host} style={{ borderRadius: 'var(--radius-md)', background: 'var(--color-surface)', boxShadow: 'var(--shadow-sm)', padding: 14, display: 'flex', flexDirection: 'column', gap: 9 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 15 }}>{s.name}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.08em', textTransform: 'uppercase', padding: '2px 6px', borderRadius: 4, border: `1px solid ${s.tagBorder}`, color: s.tagColor, flex: 'none' }}>{s.exposure}</span>
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--color-accent-300)', wordBreak: 'break-all' }}>{s.host}</div>
                <p style={{ margin: 0, fontSize: '12.5px', lineHeight: 1.5, color: 'color-mix(in srgb, var(--color-text) 66%, transparent)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '70px 0 0' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 14 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--color-accent-300)' }}>04 — Regole</span>
            <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right,var(--color-divider),transparent)' }}></span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(255px,1fr))', gap: 0, borderTop: '1px solid var(--color-divider)' }}>
            {principles.map((p) => (
              <div key={p.num} style={{ padding: '22px 22px 24px 0', borderBottom: '1px solid var(--color-divider)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.1em', color: 'var(--color-accent)', marginBottom: 10 }}>{p.num}</div>
                <h4 style={{ fontSize: 17, margin: '0 0 7px' }}>{p.title}</h4>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'color-mix(in srgb, var(--color-text) 66%, transparent)' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '64px 0 0' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center', justifyContent: 'space-between', padding: '26px 0', borderTop: '1px solid var(--color-divider)', borderBottom: '1px solid var(--color-divider)' }}>
            <div style={{ minWidth: 0 }}>
              <h3 style={{ margin: '0 0 5px', fontSize: 21 }}>Il quarto nodo, e il disco che l'ha ucciso</h3>
              <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--dim)', maxWidth: '60ch' }}>194.185 cicli di accensione, 22.168 ore, 410 spegnimenti anomali — e SMART che diceva PASSED fino all'ultimo.</p>
            </div>
            <button className="btn btn-primary" onClick={goArch}>Leggi il post-mortem</button>
          </div>
        </section>

        <footer style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'space-between', padding: '34px 0 44px', fontSize: '12.5px', color: 'var(--dim)' }}>
          <div>
            <div style={{ fontFamily: 'var(--mono)' }}>mbcreative.cc · prox-lab</div>
            <div style={{ marginTop: 4 }}>Deploy continuo con Flux v2 · 3 repliche nginx su nodi distinti</div>
          </div>
          <div style={{ display: 'flex', gap: 18 }}>
            <a href="https://github.com/matte1240/prox-lab" target="_blank" rel="noopener">GitHub</a>
            <button onClick={goArch} style={{ background: 'none', border: 0, padding: 0, color: 'var(--color-accent)', font: 'inherit', cursor: 'pointer' }}>Architettura</button>
            <button onClick={goStatus} style={{ background: 'none', border: 0, padding: 0, color: 'var(--color-accent)', font: 'inherit', cursor: 'pointer' }}>Status</button>
          </div>
        </footer>
      </div>
    </div>
  )
}
