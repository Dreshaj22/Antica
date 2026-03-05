import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-bone via-ivory to-warm-gray" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 50%, rgba(175,148,77,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(175,148,77,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(26,26,26,0.03) 0%, transparent 50%)
          `,
        }}
      />

      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-24 hidden h-20 w-px origin-top bg-gradient-to-b from-transparent via-gold/40 to-transparent sm:block"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 pt-20 text-center sm:px-6 sm:pt-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-4 text-[10px] font-medium tracking-[0.35em] uppercase text-gold sm:mb-6 sm:text-xs sm:tracking-[0.4em]"
        >
          Antica Venetian Plaster
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-[2.5rem] font-light leading-[1.15] tracking-wide text-charcoal sm:text-5xl md:text-7xl lg:text-8xl"
        >
          Timeless. <br className="hidden sm:block" />
          <span className="italic text-gold">Understated.</span> <br className="hidden sm:block" />
          Enduring.
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mx-auto my-6 h-px w-16 bg-gold/50 sm:my-8 sm:w-24"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mx-auto max-w-2xl text-sm font-light leading-relaxed tracking-wide text-charcoal/60 sm:text-base md:text-lg"
        >
          Refined mineral finishes inspired by antique European interiors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-8 flex flex-col items-center gap-3 sm:mt-12 sm:flex-row sm:justify-center sm:gap-4"
        >
          <a
            href="#portfolio"
            className="w-full border border-charcoal bg-charcoal px-8 py-3.5 text-center text-xs font-medium tracking-[0.2em] uppercase text-ivory transition-all hover:bg-transparent hover:text-charcoal no-underline sm:w-auto sm:px-10"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="w-full border border-gold/40 bg-transparent px-8 py-3.5 text-center text-xs font-medium tracking-[0.2em] uppercase text-gold transition-all hover:border-gold hover:bg-gold hover:text-ivory no-underline sm:w-auto sm:px-10"
          >
            Request Consultation
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-10"
      >
        <a href="#about" className="group flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-charcoal/30 transition-colors group-hover:text-gold">
            Discover
          </span>
          <ChevronDown
            size={18}
            className="animate-bounce text-charcoal/30 transition-colors group-hover:text-gold"
          />
        </a>
      </motion.div>
    </section>
  )
}
