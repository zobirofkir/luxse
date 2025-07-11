import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { testimonialTranslation } from '@/translation/testimonialTranslation'
import { LanguageContext } from '@/contexts/LanguageContext'

const TestimonialComponent = () => {
  const { language } = useContext(LanguageContext)
  const t = testimonialTranslation[language] || testimonialTranslation['en'] // prevent "t is undefined"
  const repeatedTestimonials = [...t.testimonials, ...t.testimonials]

  return (
    <section
      className={`bg-white text-black pb-10 px-4 sm:px-10 mt-10 ${
        language === 'ar' ? 'text-right' : 'text-left'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div className="flex items-center gap-4">
            <div className="w-1 h-12 bg-rose-500 rounded-full" />
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-extrabold uppercase tracking-widest text-gray-800"
            >
              {t.sectionTitle}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-500 text-xl italic mt-4 sm:mt-0 text-center sm:text-right"
          >
            {t.sectionSubtitle}
          </motion.p>
        </div>

        <div
          className="relative overflow-x-hidden"
          onMouseEnter={(e) => {
            const container = e.currentTarget.querySelector('.scroll-container') as HTMLElement
            if (container) container.style.animationPlayState = 'paused'
          }}
          onMouseLeave={(e) => {
            const container = e.currentTarget.querySelector('.scroll-container') as HTMLElement
            if (container) container.style.animationPlayState = 'running'
          }}
        >
          <div
            className="scroll-container flex gap-6 w-max no-scrollbar"
            style={{
              animation: 'scroll 60s linear infinite',
            }}
          >
            {repeatedTestimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="min-w-[300px] max-w-sm bg-white text-black rounded-3xl p-6 flex-shrink-0 shadow-xl border border-gray-200 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 rounded-3xl shadow-[0_0_40px_0_rgba(255,255,255,0.6)] z-[-1]" />
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
                />
                <p className="italic text-base mb-4 whitespace-normal break-words">
                  "{testimonial.text}"
                </p>
                <h3 className="font-semibold uppercase tracking-wide">{testimonial.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default TestimonialComponent
