import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import marmorino1 from '../assets/projects/marmorino1.png'
import grassello1 from '../assets/projects/grassello1.png'
import metallic1 from '../assets/projects/metallic1.jpg'
import tadelakt1 from '../assets/projects/tadelakt1.jpg'
import custom1 from '../assets/projects/custom1.jpg'

const slides = [
  {
    title: 'Greenwich Residence',
    finish: 'Marmorino Classico',
    color: 'from-[#c4b99a]/30 to-[#d4c9a8]/20',
    accent: '#b8a88a',
    image: marmorino1,
  },
  {
    title: 'Scarsdale Bathroom',
    finish: 'Grassello di Calce',
    color: 'from-[#d1ccc4]/30 to-[#e0dbd3]/20',
    accent: '#a09890',
    image: grassello1,
  },
  {
    title: 'Upper East Side Townhouse',
    finish: 'Metallic Venetian',
    color: 'from-[#c4aa6a]/20 to-[#d4c49a]/15',
    accent: '#af944d',
    image: metallic1,
  },
  {
    title: 'Hamptons Estate',
    finish: 'Tadelakt',
    color: 'from-[#b8b0a0]/25 to-[#cec6b6]/20',
    accent: '#8a8070',
    image: tadelakt1,
    zoom: 'object-[left_70%]',
  },
  {
    title: 'SoHo Commercial',
    finish: 'Custom Texture',
    color: 'from-[#a09890]/20 to-[#c4beb6]/15',
    accent: '#7a7068',
    image: custom1,
  },
]

export default function PastJobs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  return (
    <section className="bg-bone py-16 sm:py-28 md:py-40">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center sm:mb-16"
        >
          <p className="mb-3 text-[10px] font-medium tracking-[0.35em] uppercase text-gold sm:mb-4 sm:text-xs">
            Selected Works
          </p>
          <h2 className="font-serif text-3xl font-light tracking-wide text-charcoal sm:text-4xl md:text-5xl">
            Past Projects
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold/50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div ref={emblaRef} className="overflow-hidden rounded-sm">
            <div className="-ml-3 flex sm:-ml-4 md:-ml-6">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="min-w-0 flex-[0_0_92%] pl-3 sm:flex-[0_0_85%] sm:pl-4 md:flex-[0_0_80%] md:pl-6"
                >
                  <div
                    className={`relative flex aspect-[4/3] items-end overflow-hidden rounded-sm p-5 sm:aspect-[16/9] sm:p-8 md:p-12 ${
                      slide.image ? 'bg-charcoal' : `bg-gradient-to-br ${slide.color}`
                    }`}
                  >
                    {slide.image ? (
                      <>
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className={`absolute inset-0 h-full w-full object-cover opacity-80 ${slide.zoom || ''}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                      </>
                    ) : (
                      <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                          backgroundImage:
                            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                        }}
                      />
                    )}
                    <div className="relative z-10">
                      <p
                        className={`mb-1 text-[10px] font-medium tracking-[0.2em] uppercase sm:mb-2 sm:text-xs sm:tracking-[0.25em] ${
                          slide.image ? 'text-gold-light' : ''
                        }`}
                        style={slide.image ? undefined : { color: slide.accent }}
                      >
                        {slide.finish}
                      </p>
                      <h3 className={`font-serif text-xl font-light tracking-wide sm:text-2xl md:text-3xl ${
                        slide.image ? 'text-ivory' : 'text-charcoal'
                      }`}>
                        {slide.title}
                      </h3>
                    </div>
                    <div className={`absolute right-4 top-4 text-[80px] font-serif font-light leading-none sm:right-8 sm:top-8 sm:text-[120px] md:right-12 md:top-10 md:text-[180px] ${
                      slide.image ? 'text-ivory/[0.08]' : 'text-charcoal/[0.04]'
                    }`}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 sm:mt-8 sm:gap-6">
            <button
              onClick={scrollPrev}
              className="flex h-10 w-10 cursor-pointer items-center justify-center border border-charcoal/20 bg-transparent text-charcoal/50 transition-all hover:border-gold hover:text-gold sm:h-auto sm:w-auto sm:p-3"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-1.5 cursor-pointer border-none transition-all duration-300 ${
                    i === selectedIndex
                      ? 'w-6 bg-gold sm:w-8'
                      : 'w-1.5 bg-charcoal/15 hover:bg-charcoal/30'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="flex h-10 w-10 cursor-pointer items-center justify-center border border-charcoal/20 bg-transparent text-charcoal/50 transition-all hover:border-gold hover:text-gold sm:h-auto sm:w-auto sm:p-3"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
