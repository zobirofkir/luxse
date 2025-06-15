import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'Timeless Elegance',
    subtitle: 'Crafted with precision and care.',
    image: 'https://t3.ftcdn.net/jpg/14/69/20/52/360_F_1469205285_a6PLxvTKqrOUZ2do8kYrkiALKrzvMdOA.jpg',
  },
  {
    title: 'Luxury Redefined',
    subtitle: 'Bespoke diamond creations.',
    image: 'https://www.goldsmithjewelersohio.com/wp-content/uploads/2022/12/Loose-Diamond-16-1080x675.png',
  },
  {
    title: 'Modern Sophistication',
    subtitle: 'Diamonds that speak volumes.',
    image: 'https://www.casadoro.com/wp-content/uploads/2021/09/AdobeStock_272687719-1080x675.jpeg',
  },
];

const SliderComponent = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover object-center brightness-[.4]"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black via-black/40 to-transparent">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-6xl font-extrabold uppercase tracking-wider drop-shadow-xl"
            >
              {slides[current].title}
            </motion.h2>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-2xl text-white/80 mt-4"
            >
              {slides[current].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prevSlide}
          className="bg-white/10 hover:bg-white/20 transition backdrop-blur-sm p-3 rounded-full"
        >
          <ChevronLeft className="text-white" size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/10 hover:bg-white/20 transition backdrop-blur-sm p-3 rounded-full"
        >
          <ChevronRight className="text-white" size={28} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === current ? 'bg-white shadow-lg scale-125' : 'bg-white/40'
            }`}
            animate={{ scale: i === current ? 1.2 : 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
