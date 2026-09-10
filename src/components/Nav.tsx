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

export function Nav({ page, setPage, lang, setLang, statusMode }: NavProps) {
  const it = lang === 'it'
  const tabs: { page: Page; label: string; path: string }[] = [
    { page: 'home', label: 'Home', path: 'M3 10 12 3l9 7v11h-6v-7H9v7H3Z' },
    { page: 'arch', label: it ? 'Architettura' : 'Architecture', path: 'M8 3h8v6H8ZM3 15h6v6H3Zm12 0h6v6h-6ZM12 9v3M6 15v-3h12v3' },
    { page: 'status', label: 'Status', path: 'M2 12h5l3-8 4 16 3-8h5' },
  ]
  return (
    <header className="site-header">
      <div className="nav-inner">
        <button className="brand" onClick={() => setPage('home')} aria-label={it ? 'mbcreative, pagina iniziale' : 'mbcreative, home page'}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="3" y="3" width="18" height="8" rx="2" /><rect x="3" y="13" width="18" height="8" rx="2" />
            <path d="M7 7h1m-1 10h1m4-10h5m-5 10h5" />
          </svg>
          <span>mbcreative<span className="brand-domain">.cc</span></span>
          <span className="brand-tag">prox-lab</span>
        </button>
        <nav className="page-nav" aria-label={it ? 'Navigazione principale' : 'Main navigation'}>
          {tabs.map(tab => (
            <button key={tab.page} className="nav-tab" aria-current={page === tab.page ? 'page' : undefined} onClick={() => setPage(tab.page)}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={tab.path} /></svg>
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="nav-tools">
          <div className="language-switch" role="group" aria-label={it ? 'Lingua' : 'Language'}>
            {(['it', 'en'] as const).map(l => <button key={l} lang={l} aria-label={l === 'it' ? 'Italiano' : 'English'} aria-pressed={lang === l} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}
          </div>
          <span className="nav-status" style={{ color: statusColor(statusMode) }}><span aria-hidden="true" />{statusLabel(statusMode)}</span>
        </div>
      </div>
    </header>
  )
}
