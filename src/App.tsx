import { useState } from 'react'
import { Nav, type Page } from './components/Nav'
import { HomePage } from './pages/HomePage'
import { ArchPage } from './pages/ArchPage'
import { StatusPage } from './pages/StatusPage'
import type { Lang, StatusMode } from './data'

function App() {
  const [page, setPage] = useState<Page>('home')
  const [lang, setLang] = useState<Lang>('it')

  // Static for now — no live telemetry wired in yet.
  const statusMode: StatusMode = 'operativo'
  const showPostmortem = true

  const goHome = () => setPage('home')
  const goArch = () => setPage('arch')
  const goStatus = () => setPage('status')

  return (
    <>
      <Nav page={page} setPage={setPage} lang={lang} setLang={setLang} statusMode={statusMode} />
      {page === 'home' && <HomePage lang={lang} goArch={goArch} goStatus={goStatus} />}
      {page === 'arch' && <ArchPage lang={lang} showPostmortem={showPostmortem} goHome={goHome} goStatus={goStatus} />}
      {page === 'status' && <StatusPage lang={lang} goHome={goHome} goArch={goArch} />}
    </>
  )
}

export default App
