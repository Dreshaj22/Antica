import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="bg-ivory py-16 sm:py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <FadeUp>
              <p className="mb-3 text-[10px] font-medium tracking-[0.35em] uppercase text-gold sm:mb-4 sm:text-xs">
                About Us
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-serif text-3xl font-light leading-snug tracking-wide text-charcoal sm:text-4xl md:text-5xl">
                The Art of <br />
                <span className="italic">Venetian Plaster</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="mt-3 h-px w-16 bg-gold/50" />
            </FadeUp>
          </div>

          <div className="flex flex-col justify-center gap-5 sm:gap-6">
            <FadeUp delay={0.2}>
              <p className="text-sm font-light leading-[1.9] tracking-wide text-charcoal/70 sm:text-base">
                Antica Venetian Plaster is a boutique finishing studio led by a master artisan
                trained in the tradition of Italian <em>intonaco</em>. Every surface we create is
                hand-applied using authentic lime-based materials sourced from Italy, delivering a
                depth, texture, and luminosity that cannot be replicated with modern substitutes.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="text-sm font-light leading-[1.9] tracking-wide text-charcoal/70 sm:text-base">
                Our work is not decorative painting — it is architectural finishing in the truest
                sense. Drawing from the Venetian traditions of <em>Marmorino</em>,{' '}
                <em>Grassello</em>, and <em>Tadelakt</em>, we approach each project as a
                collaboration between material, light, and space.
              </p>
            </FadeUp>
            <FadeUp delay={0.4}>
              <p className="text-sm font-light leading-[1.9] tracking-wide text-charcoal/70 sm:text-base">
                Whether restoring a heritage property or finishing a contemporary residence, Antica
                brings an uncompromising commitment to craft — treating every wall as a canvas, and
                every finish as an heirloom.
              </p>
            </FadeUp>
          </div>
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-warm-gray bg-warm-gray sm:mt-24 md:grid-cols-3">
            {[
              { number: '15+', label: 'Years of Craft' },
              { number: 'Italy', label: 'Trained & Sourced' },
              { number: '200+', label: 'Projects Completed' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center bg-ivory px-6 py-7 text-center sm:px-8 sm:py-10"
              >
                <span className="font-serif text-2xl font-light tracking-wide text-gold sm:text-3xl md:text-4xl">
                  {stat.number}
                </span>
                <span className="mt-2 text-[10px] font-medium tracking-[0.25em] uppercase text-charcoal/50 sm:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
