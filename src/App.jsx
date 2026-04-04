import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Cases from './components/Cases'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Cases />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
