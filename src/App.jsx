import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import DinamoTable from './components/DinamoTable'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import EmergencyBanner from './components/EmergencyBanner'
import FeaturedProjects from './components/FeaturedProjects'
import Testimonials from './components/Testimonials'
import ServiceAreas from './components/ServiceAreas'
import About from './components/About'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <Hero onOpenModal={() => setModalOpen(true)} />
      <Stats />
      <Services />
      <DinamoTable />
      <WhyChooseUs />
      <HowItWorks />
      <EmergencyBanner />
      <FeaturedProjects />
      <Testimonials />
      <ServiceAreas />
      <About />
      <Contact isModal={modalOpen} onClose={() => setModalOpen(false)} />
      <FAQ />
      <CTABanner onOpenModal={() => setModalOpen(true)} />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
