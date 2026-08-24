import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Impact } from './components/Impact'
import { Metrics } from './components/Metrics'
import { Nav } from './components/Nav'
import { LanguageProvider } from './context/LanguageContext'

function AppShell() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  )
}
