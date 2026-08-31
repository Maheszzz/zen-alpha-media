import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import About from './pages/About'
import Contact from './pages/Contact'

// ScrollToTop component ensures the page scrolls to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-neutral-900 font-sans flex flex-col selection:bg-primary-100 selection:text-primary-700">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/"             element={<Home />} />
            <Route path="/services"     element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/about"        element={<About />} />
            <Route path="/contact"      element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
