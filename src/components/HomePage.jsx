import Navigation from './Navigation'
import Hero from './Hero'
import About from './About'
import PastJobs from './PastJobs'
import Portfolio from './Portfolio'
import Finishes from './Finishes'
import Contact from './Contact'
import Footer from './Footer'

export default function HomePage() {
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
