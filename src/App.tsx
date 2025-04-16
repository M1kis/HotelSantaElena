import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Rooms from './components/Rooms'
import Services from './components/Services'
import Timeline from './components/Timeline'
import Whatsapp from './components/Whatsapp'
import './index.css'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Services />
      <Timeline />
      <Contact />
      <Footer />
      <Whatsapp />
    </>
  )
}

export default App
