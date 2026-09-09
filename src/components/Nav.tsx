import type { CSSProperties } from 'react'
import type { Lang, StatusMode } from '../data'
import { statusColor, statusLabel } from '../data'

export type Page = 'home' | 'arch' | 'status'

type NavProps = {
  page: Page
  setPage: (p: Page) => void
  lang: Lang
  setLang: (l: Lang) => void
  statusMode: StatusMode
}

function tabStyle(on: boolean): CSSProperties {
  return {
    background: on ? 'color-mix(in srgb, var(--color-accent) 14%, transparent)' : 'transparent',
    border: '1px solid ' + (on ? 'color-mix(in srgb, var(--color-accent) 45%, transparent)' : 'transparent'),
    color: on ? 'var(--color-accent-200)' : 'color-mix(in srgb, #e9e9ed 68%, transparent)',
    font: 'inherit', fontSize: '13.5px', padding: '6px 12px', borderRadius: '8px',
    cursor: 'pointer', whiteSpace: 'nowrap',
  }
}

function langBtnStyle(on: boolean): CSSProperties {
  return {
    background: on ? 'color-mix(in srgb, var(--color-accent) 18%, transparent)' : 'transparent',
    border: 0,
    color: on ? 'var(--color-accent-200)' : 'color-mix(in srgb, #e9e9ed 55%, transparent)',
    font: 'inherit', padding: '5px 9px', cursor: 'pointer', letterSpacing: '.06em',
  }
}

export function Nav({ page, setPage, lang, setLang, statusMode }: NavProps) {
  const sColor = statusColor(statusMode)
  const sLabel = statusLabel(statusMode)

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 40, background: 'color-mix(in srgb, var(--color-bg) 86%, transparent)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--color-divider)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 28px', display: 'flex', alignItems: 'center', gap: 20, height: 60 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginRight: 'auto', minWidth: 0 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
            <rect x="2.5" y="3.5" width="19" height="5.5" rx="1.5"></rect>
            <rect x="2.5" y="9.5" width="19" height="5.5" rx="1.5"></rect>
            <rect x="2.5" y="15.5" width="19" height="5.5" rx="1.5"></rect>
            <circle cx="6" cy="6.25" r=".9" fill="var(--color-accent)" stroke="none"></circle>
            <circle cx="6" cy="12.25" r=".9" fill="var(--color-accent)" stroke="none"></circle>
            <circle cx="6" cy="18.25" r=".9" fill="var(--color-accent)" stroke="none"></circle>
          </svg>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: '16.5px', letterSpacing: '-.015em' }}>
            mbcreative<span style={{ color: 'color-mix(in srgb, var(--color-text) 38%, transparent)' }}>.cc</span>
          </span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.06em', padding: '2px 6px', borderRadius: 4, border: '1px solid var(--color-divider)', color: 'var(--dim)' }}>prox-lab</span>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          <button onClick={() => setPage('home')} style={tabStyle(page === 'home')}>Home</button>
          <button onClick={() => setPage('arch')} style={tabStyle(page === 'arch')}>Architettura</button>
          <button onClick={() => setPage('status')} style={tabStyle(page === 'status')}>Status</button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', border: '1px solid var(--color-divider)', borderRadius: 'var(--radius-md)', overflow: 'hidden', fontFamily: 'var(--mono)', fontSize: '10.5px' }}>
            <button onClick={() => setLang('it')} style={langBtnStyle(lang === 'it')}>IT</button>
            <button onClick={() => setLang('en')} style={langBtnStyle(lang === 'en')}>EN</button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '5px 10px', border: '1px solid var(--color-divider)', borderRadius: 'var(--radius-md)', fontFamily: 'var(--mono)', fontSize: '10.5px' }}>
            <span style={{ position: 'relative', width: 6, height: 6, flex: 'none' }}>
              <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: sColor }}></span>
              <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: sColor, animation: 'noc-halo 2.6s ease-in-out infinite' }}></span>
            </span>
            <span style={{ color: sColor, letterSpacing: '.05em' }}>{sLabel}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
