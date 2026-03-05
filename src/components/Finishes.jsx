import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const finishes = [
  {
    name: 'Marmorino',
    tagline: 'Polished Stone Elegance',
    description:
      'A lime-and-marble-dust plaster producing a surface resembling polished natural stone. Applied in multiple compressed layers for rich depth and subtle, reflective luminosity.',
    ideal: 'Feature walls, fireplace surrounds, formal living spaces',
    texture: 'Smooth to semi-polished',
  },
  {
    name: 'Grassello',
    tagline: 'Pure Lime Serenity',
    description:
      'The purest form of Venetian plaster — made from aged slaked lime, applied with fluid, sweeping strokes. A soft, cloud-like surface with gentle movement and warmth.',
    ideal: 'Bedrooms, spa bathrooms, meditative spaces',
    texture: 'Soft, matte, cloud-like',
  },
  {
    name: 'Metallic Finish',
    tagline: 'Luminous Depth',
    description:
      'Incorporates natural metallic oxides — gold, bronze, copper, or silver — into a lime-based plaster. The surface shifts and glows with changing light.',
    ideal: 'Accent walls, columns, hospitality environments',
    texture: 'Reflective, shifting',
  },
  {
    name: 'Tadelakt',
    tagline: 'Ancient Waterproof Craft',
    description:
      'A traditional Moroccan lime plaster burnished with river stones and sealed with olive oil soap. Naturally waterproof, organic, tactile, and deeply rich.',
    ideal: 'Showers, steam rooms, wet areas',
    texture: 'Burnished, organic',
  },
  {
    name: 'Custom Texture',
    tagline: 'Bespoke Surface Language',
    description:
      'Fully bespoke plaster textures — from rough travertine effects to layered, abstract compositions. Developed in collaboration with client and architect.',
    ideal: 'Unique architectural projects',
    texture: 'Client-defined',
  },
]

function FinishCard({ finish, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group border border-warm-gray bg-ivory p-6 transition-all duration-500 hover:border-gold/30 sm:p-8 md:p-10"
    >
      <span className="mb-4 block font-serif text-4xl font-light text-charcoal/[0.06] sm:mb-6 sm:text-5xl">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="font-serif text-xl font-light tracking-wide text-charcoal sm:text-2xl">
        {finish.name}
      </h3>
      <p className="mt-1 text-[10px] font-medium tracking-[0.2em] uppercase text-gold sm:text-xs">
        {finish.tagline}
      </p>
      <div className="mt-3 h-px w-10 bg-gold/30 transition-all duration-500 group-hover:w-16 group-hover:bg-gold/60 sm:mt-4" />
      <p className="mt-4 text-xs font-light leading-[1.8] tracking-wide text-charcoal/60 sm:mt-5 sm:text-sm">
        {finish.description}
      </p>
      <div className="mt-5 space-y-2 sm:mt-6">
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:gap-2">
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-charcoal/30">
            Ideal for
          </span>
          <span className="text-xs font-light tracking-wide text-charcoal/50">
            {finish.ideal}
          </span>
        </div>
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:gap-2">
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-charcoal/30">
            Texture
          </span>
          <span className="text-xs font-light tracking-wide text-charcoal/50">
            {finish.texture}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Finishes() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="finishes" className="bg-bone py-16 sm:py-28 md:py-40">
      <div ref={ref} className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center sm:mb-16"
        >
          <p className="mb-3 text-[10px] font-medium tracking-[0.35em] uppercase text-gold sm:mb-4 sm:text-xs">
            Material Guide
          </p>
          <h2 className="font-serif text-3xl font-light tracking-wide text-charcoal sm:text-4xl md:text-5xl">
            Finish Details
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold/50" />
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {finishes.map((finish, i) => (
            <FinishCard key={finish.name} finish={finish} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
