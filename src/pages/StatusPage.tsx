import type { Lang } from '../data'
import { getGauges, monitors, volumes, getIncidents } from '../data'

type StatusPageProps = {
  lang: Lang
  goHome: () => void
  goArch: () => void
}

export function StatusPage({ lang, goHome, goArch }: StatusPageProps) {
  const it = lang === 'it'
  const gauges = getGauges(it)
  const incidents = getIncidents(it)

  return (
    <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 28px' }}>
      <section style={{ padding: '64px 0 0', animation: 'noc-rise .6s ease both' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--color-accent-300)' }}>Status</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 14 }}>
          <div style={{ minWidth: 0 }}>
            {it ? (
              <div>
                <h1 style={{ fontSize: 'clamp(30px,3.2vw,42px)', margin: '0 0 10px', letterSpacing: '-.026em', lineHeight: 1.1 }}>Tutto operativo, con una eccezione recente.</h1>
                <p style={{ maxWidth: '58ch', color: 'color-mix(in srgb, var(--color-text) 72%, transparent)', margin: 0 }}>Sonde ogni 60 secondi da uptime-kuma dentro il cluster. Novanta giorni per riga.</p>
              </div>
            ) : (
              <div>
                <h1 style={{ fontSize: 'clamp(30px,3.2vw,42px)', margin: '0 0 10px', letterSpacing: '-.026em', lineHeight: 1.1 }}>All operational, with one recent exception.</h1>
                <p style={{ maxWidth: '58ch', color: 'color-mix(in srgb, var(--color-text) 72%, transparent)', margin: 0 }}>Probed every 60 seconds by uptime-kuma inside the cluster. Ninety days per row.</p>
              </div>
            )}
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--dim)', textAlign: 'right' }}>
            <div>ultimo controllo · 12 s fa</div>
            <div style={{ marginTop: 3 }}>uptime-kuma.mbcreative.cc</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '34px 0 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 14 }}>
        {gauges.map((g) => (
          <div key={g.label} style={{ borderRadius: 'var(--radius-md)', background: 'var(--color-surface)', boxShadow: 'var(--shadow-sm)', padding: 15 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--dim)' }}>{g.label}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--dim)' }}>{g.sub}</span>
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 27, letterSpacing: '-.03em', margin: '8px 0 10px' }}>{g.value}</div>
            <div style={{ height: 6, borderRadius: 3, background: 'color-mix(in srgb, var(--color-text) 8%, transparent)', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: g.pct, borderRadius: 3, background: 'linear-gradient(90deg,var(--color-accent-700),var(--color-accent-400))' }}></div>
            </div>
          </div>
        ))}
      </section>

      <section style={{ padding: '44px 0 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 16 }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--color-accent-300)' }}>Sonde</span>
          <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right,var(--color-divider),transparent)' }}></span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--dim)' }}>90 giorni</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {monitors.map((m) => (
            <div key={m.host} style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center', padding: '13px 0', borderBottom: '1px solid color-mix(in srgb, var(--color-text) 8%, transparent)' }}>
              <div style={{ flex: '0 0 210px', minWidth: 0 }}>
                <div style={{ fontSize: 14 }}>{m.name}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--dim)', marginTop: 2 }}>{m.host}</div>
              </div>
              <div style={{ flex: '1 1 260px', minWidth: 180, display: 'flex', gap: 2, alignItems: 'flex-end', height: 30 }}>
                {m.bars.map((b, i) => (
                  <span key={i} style={{ flex: 1, minWidth: 0, height: b.h, borderRadius: 1, background: b.c, transformOrigin: 'bottom', animation: 'noc-grow .5s ease both', animationDelay: b.d }}></span>
                ))}
              </div>
              <div style={{ flex: '0 0 78px', textAlign: 'right', fontFamily: 'var(--mono)', fontSize: 13, color: m.upColor }}>{m.up}</div>
              <div style={{ flex: '0 0 66px', textAlign: 'right', fontFamily: 'var(--mono)', fontSize: '11.5px', color: 'var(--dim)' }}>{m.ms}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '52px 0 0', display: 'flex', flexWrap: 'wrap', gap: 22 }}>
        <div style={{ flex: '1 1 380px', minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 16 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--color-accent-300)' }}>Volumi Longhorn</span>
            <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right,var(--color-divider),transparent)' }}></span>
          </div>
          {volumes.map((v) => (
            <div key={v.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 0', borderBottom: '1px solid color-mix(in srgb, var(--color-text) 8%, transparent)' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '12.5px', flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{v.name}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--dim)', flex: 'none' }}>{v.size}</span>
              <span style={{ display: 'flex', gap: 3, flex: 'none' }}>
                <span style={{ width: 7, height: 7, borderRadius: 2, background: 'var(--color-accent-400)', animation: 'noc-led 1.8s ease-in-out infinite' }}></span>
                <span style={{ width: 7, height: 7, borderRadius: 2, background: 'var(--color-accent-400)', animation: 'noc-led 1.8s .35s ease-in-out infinite' }}></span>
                <span style={{ width: 7, height: 7, borderRadius: 2, background: 'var(--color-accent-400)', animation: 'noc-led 1.8s .7s ease-in-out infinite' }}></span>
              </span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--color-accent-300)', flex: 'none', width: 52, textAlign: 'right' }}>3/3</span>
            </div>
          ))}
        </div>
        <div style={{ flex: '1 1 320px', minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 16 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--color-accent-300)' }}>Registro incidenti</span>
            <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right,var(--color-divider),transparent)' }}></span>
          </div>
          {incidents.map((i) => (
            <div key={i.date + i.title} style={{ display: 'flex', gap: 14, padding: '0 0 20px' }}>
              <div style={{ flex: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, paddingTop: 5 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: i.c }}></span>
                <span style={{ width: 1, flex: 1, background: 'var(--color-divider)' }}></span>
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--dim)', letterSpacing: '.05em' }}>{i.date} · {i.dur}</div>
                <div style={{ fontSize: 14, margin: '4px 0 3px' }}>{i.title}</div>
                <p style={{ margin: 0, fontSize: '12.5px', lineHeight: 1.5, color: 'color-mix(in srgb, var(--color-text) 64%, transparent)' }}>{i.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'space-between', padding: '40px 0 44px', marginTop: 34, borderTop: '1px solid var(--color-divider)', fontSize: '12.5px', color: 'var(--dim)' }}>
        <span style={{ fontFamily: 'var(--mono)' }}>mbcreative.cc · prox-lab</span>
        <div style={{ display: 'flex', gap: 18 }}>
          <button onClick={goHome} style={{ background: 'none', border: 0, padding: 0, color: 'var(--color-accent)', font: 'inherit', cursor: 'pointer' }}>Home</button>
          <button onClick={goArch} style={{ background: 'none', border: 0, padding: 0, color: 'var(--color-accent)', font: 'inherit', cursor: 'pointer' }}>Architettura</button>
          <a href="https://github.com/matte1240/prox-lab" target="_blank" rel="noopener">GitHub</a>
        </div>
      </footer>
    </div>
  )
}
