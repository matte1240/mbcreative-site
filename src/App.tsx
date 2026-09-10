import { useEffect, useRef, useState } from 'react'
import { Nav, type Page } from './components/Nav'
import { HomePage } from './pages/HomePage'
import { ArchPage } from './pages/ArchPage'
import { StatusPage } from './pages/StatusPage'
import { usePageMotion } from './usePageMotion'
import type { Lang, StatusMode } from './data'

function App() {
  const [page, setPage] = useState<Page>('home')
  const [lang, setLang] = useState<Lang>('it')
  const mainRef = useRef<HTMLElement>(null)
  const previousPage = useRef(page)
  usePageMotion(mainRef, page)
  useEffect(() => { document.documentElement.lang = lang }, [lang])
  useEffect(() => {
    if (previousPage.current === page) return
    previousPage.current = page
    window.scrollTo({ top: 0, behavior: 'instant' })
    mainRef.current?.focus({ preventScroll: true })
  }, [page])

  // Static for now — no live telemetry wired in yet.
  const statusMode: StatusMode = 'operativo'
  const showPostmortem = true

  const goHome = () => setPage('home')
  const goArch = () => setPage('arch')
  const goStatus = () => setPage('status')

  return (
    <>
      <a className="skip-link" href="#main-content">{lang === 'it' ? 'Vai al contenuto' : 'Skip to content'}</a>
      <div className="scroll-progress" aria-hidden="true" />
      <Nav page={page} setPage={setPage} lang={lang} setLang={setLang} statusMode={statusMode} />
      <main id="main-content" ref={mainRef} tabIndex={-1}>
        {page === 'home' && <HomePage lang={lang} goArch={goArch} goStatus={goStatus} />}
        {page === 'arch' && <ArchPage lang={lang} showPostmortem={showPostmortem} goHome={goHome} goStatus={goStatus} />}
        {page === 'status' && <StatusPage lang={lang} goHome={goHome} goArch={goArch} />}
      </main>
    </>
  )
}

export default App
