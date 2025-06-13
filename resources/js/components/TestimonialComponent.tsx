import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    text: "Les bijoux sont absolument magnifiques, la qualité est impeccable et le service client très professionnel.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "Antoine Dupont",
    text: "Une expérience d'achat luxueuse, je recommande vivement cette boutique pour tous les amateurs de bijoux uniques.",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    id: 3,
    name: "Claire Bernard",
    text: "Le service personnalisé et la rapidité de livraison m’ont vraiment impressionnée. Bijoux exquis !",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const TestimonialComponent = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white text-black py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-black uppercase mb-16 tracking-widest">
          Témoignages Clients
        </h2>

        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-black text-white rounded-3xl shadow-lg"
            >
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-2 border-white"
              />
              <p className="italic text-lg mb-6">"{testimonials[index].text}"</p>
              <h3 className="font-bold uppercase tracking-wide">
                {testimonials[index].name}
              </h3>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-between mt-8 max-w-xs mx-auto">
            <button
              onClick={prevTestimonial}
              className="px-4 py-2 border border-black rounded uppercase text-xs font-semibold tracking-wide hover:bg-black hover:text-white transition"
              aria-label="Précédent"
            >
              Précédent
            </button>
            <button
              onClick={nextTestimonial}
              className="px-4 py-2 border border-black rounded uppercase text-xs font-semibold tracking-wide hover:bg-black hover:text-white transition"
              aria-label="Suivant"
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponent;
