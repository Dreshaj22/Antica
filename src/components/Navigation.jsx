import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/antica-logo.png'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const links = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Finishes', href: '#finishes' },
  ]

  const handleClick = (href) => {
    setMobileOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, mobileOpen ? 300 : 0)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_rgba(175,148,77,0.15)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-12">
          <a href="#" className="relative z-10 -ml-3 flex items-center gap-3 sm:-ml-4 lg:-ml-6">
            <img
              src={logo}
              alt="Antica Venetian Plaster"
              className="h-20 w-auto sm:h-24 lg:h-28"
            />
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleClick(link.href)}
                className="relative cursor-pointer bg-transparent border-none text-sm font-light tracking-[0.15em] uppercase text-charcoal/80 transition-colors hover:text-gold"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick('#contact')}
              className="cursor-pointer border border-gold bg-transparent px-6 py-2.5 text-xs font-medium tracking-[0.2em] uppercase text-gold transition-all hover:bg-gold hover:text-ivory"
            >
              Request Quote
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 flex h-11 w-11 cursor-pointer items-center justify-center border-none bg-transparent md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={24} className="text-charcoal" />
            ) : (
              <Menu size={24} className="text-charcoal" />
            )}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-ivory"
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  onClick={() => handleClick(link.href)}
                  className="cursor-pointer border-none bg-transparent font-serif text-2xl font-light tracking-wider text-charcoal sm:text-3xl"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleClick('#contact')}
                className="mt-4 cursor-pointer border border-gold bg-transparent px-8 py-3 text-sm font-medium tracking-[0.2em] uppercase text-gold"
              >
                Request Quote
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
