import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const categories = [
  {
    id: 'marmorino',
    name: 'Marmorino',
    subtitle: 'Polished Stone',
    description:
      'Our signature finish. Marmorino is a lime-and-marble-dust plaster that produces a surface resembling polished natural stone. Applied in multiple compressed layers, it develops a rich depth and a subtle, reflective luminosity. Ideal for feature walls, fireplace surrounds, and formal living spaces.',
    colors: ['#d4c9a8', '#c4b99a', '#b8a88a', '#a89878'],
  },
  {
    id: 'grassello',
    name: 'Grassello',
    subtitle: 'Aged Lime',
    description:
      'Grassello di Calce is the purest form of Venetian plaster — made from aged slaked lime and applied with fluid, sweeping strokes. The result is a soft, cloud-like surface with gentle movement and warmth. It works beautifully in bedrooms, spa bathrooms, and meditative spaces.',
    colors: ['#e0dbd3', '#d1ccc4', '#c4bfb7', '#b8b3ab'],
  },
  {
    id: 'metallic',
    name: 'Metallic Finish',
    subtitle: 'Luminous Metal',
    description:
      'A contemporary evolution of traditional Venetian plaster. This finish incorporates natural metallic oxides — gold, bronze, copper, or silver — into a lime-based plaster, creating a surface that shifts and glows with changing light. Suited for accent walls, columns, and hospitality environments.',
    colors: ['#c4aa6a', '#af944d', '#d4c49a', '#bfaa7a'],
  },
  {
    id: 'tadelakt',
    name: 'Tadelakt',
    subtitle: 'Waterproof Lime',
    description:
      'Tadelakt is a traditional Moroccan lime plaster, burnished with river stones and sealed with olive oil soap. Naturally waterproof, it is the ideal choice for showers, steam rooms, and wet areas. Its surface is organic, tactile, and deeply rich — a living material that ages with grace.',
    colors: ['#b8b0a0', '#a8a090', '#cec6b6', '#beb6a6'],
  },
  {
    id: 'custom',
    name: 'Custom Texture',
    subtitle: 'Bespoke Design',
    description:
      'For projects that demand a unique surface language, we offer fully bespoke plaster textures — from rough travertine effects to layered, abstract compositions. These are developed in collaboration with the client and architect, tailored to complement specific materials, palettes, and spatial intentions.',
    colors: ['#a09890', '#908880', '#c4beb6', '#b4aea6'],
  },
]

function MobileCategoryPill({ category, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 cursor-pointer whitespace-nowrap border px-4 py-2.5 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
        isActive
          ? 'border-gold bg-charcoal text-ivory'
          : 'border-warm-gray bg-ivory text-charcoal/60 active:bg-warm-gray'
      }`}
    >
      {category.name}
    </button>
  )
}

function DesktopCategoryCard({ category, isActive, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      layout
      className={`group cursor-pointer border text-left transition-all duration-500 ${
        isActive
          ? 'border-gold bg-charcoal'
          : 'border-warm-gray bg-ivory hover:border-gold/30'
      } w-full p-5 sm:p-6`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3
            className={`font-serif text-lg font-light tracking-wide transition-colors sm:text-xl ${
              isActive ? 'text-ivory' : 'text-charcoal'
            }`}
          >
            {category.name}
          </h3>
          <p
            className={`mt-1 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors sm:text-xs ${
              isActive ? 'text-gold' : 'text-charcoal/40'
            }`}
          >
            {category.subtitle}
          </p>
        </div>
        <div className="hidden gap-1.5 sm:flex">
          {category.colors.slice(0, 3).map((color, i) => (
            <div
              key={i}
              className="h-4 w-4 rounded-full border border-white/20"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </motion.button>
  )
}

export default function Portfolio() {
  const [active, setActive] = useState('marmorino')
  const ref = useRef(null)
  const detailRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const activeCategory = categories.find((c) => c.id === active)

  const handleSelect = (id) => {
    setActive(id)
    if (window.innerWidth < 1024 && detailRef.current) {
      setTimeout(() => {
        detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 100)
    }
  }

  return (
    <section id="portfolio" className="bg-ivory py-16 sm:py-28 md:py-40">
      <div ref={ref} className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center sm:mb-16"
        >
          <p className="mb-3 text-[10px] font-medium tracking-[0.35em] uppercase text-gold sm:mb-4 sm:text-xs">
            Portfolio
          </p>
          <h2 className="font-serif text-3xl font-light tracking-wide text-charcoal sm:text-4xl md:text-5xl">
            Our Finishes
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold/50" />
          <p className="mx-auto mt-5 max-w-xl text-xs font-light leading-relaxed tracking-wide text-charcoal/50 sm:mt-6 sm:text-sm">
            Each finish is a study in material, light, and patience. Explore our five signature
            categories below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Mobile: horizontal scrollable pills */}
          <div className="-mx-5 mb-4 flex gap-2 overflow-x-auto px-5 pb-2 sm:-mx-6 sm:px-6 lg:hidden"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {categories.map((cat) => (
              <MobileCategoryPill
                key={cat.id}
                category={cat}
                isActive={active === cat.id}
                onClick={() => handleSelect(cat.id)}
              />
            ))}
          </div>

          {/* Desktop: sidebar + detail grid */}
          <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-8">
            <div className="hidden flex-col gap-3 lg:flex">
              {categories.map((cat) => (
                <DesktopCategoryCard
                  key={cat.id}
                  category={cat}
                  isActive={active === cat.id}
                  onClick={() => handleSelect(cat.id)}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                ref={detailRef}
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-between border border-warm-gray bg-bone p-6 sm:p-8 md:p-12"
              >
                <div>
                  <div className="mb-6 flex gap-2 sm:mb-8 sm:gap-3">
                    {activeCategory.colors.map((color, i) => (
                      <div
                        key={i}
                        className="h-10 flex-1 rounded-sm border border-white/30 sm:h-16"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  <p className="mb-1.5 text-[10px] font-medium tracking-[0.25em] uppercase text-gold sm:mb-2 sm:text-xs">
                    {activeCategory.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl font-light tracking-wide text-charcoal sm:text-3xl md:text-4xl">
                    {activeCategory.name}
                  </h3>
                  <div className="mt-3 h-px w-12 bg-gold/40 sm:mt-4" />
                  <p className="mt-4 text-xs font-light leading-[1.9] tracking-wide text-charcoal/65 sm:mt-6 sm:text-sm">
                    {activeCategory.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="mt-8 block w-full border border-gold bg-transparent py-3 text-center text-xs font-medium tracking-[0.2em] uppercase text-gold transition-all hover:bg-gold hover:text-ivory no-underline sm:mt-10 sm:inline-block sm:w-auto sm:self-start sm:px-8"
                >
                  Inquire About This Finish
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
