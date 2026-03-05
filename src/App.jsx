import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import PastJobs from './components/PastJobs'
import Portfolio from './components/Portfolio'
import Finishes from './components/Finishes'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <Hero />
      <About />
      <PastJobs />
      <Portfolio />
      <Finishes />
      <Contact />
      <Footer />
    </div>
  )
}
