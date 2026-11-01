import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Applications from './components/Applications'
import WhyNexly from './components/WhyNexly'
import StudioIntro from './components/StudioIntro'
import DevStatus from './components/DevStatus'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <Applications />
        <WhyNexly />
        <StudioIntro />
        <DevStatus />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
