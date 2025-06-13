import React from "react";
import { motion } from "framer-motion";

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
  {
    id: 4,
    name: "Julien Lefèvre",
    text: "Des pièces élégantes et intemporelles, parfaites pour offrir ou se faire plaisir. Bravo !",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
];

const TestimonialComponent = () => {
  const repeatedTestimonials = [...testimonials, ...testimonials]; // duplicate for infinite scroll

  return (
    <section className="bg-white text-black py-20 px-4 sm:px-10">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="text-4xl font-black uppercase mb-16 tracking-widest">
          Témoignages Clients
        </h2>

        <div
          className="relative overflow-x-hidden"
          onMouseEnter={(e) => {
            e.currentTarget.querySelector(".scroll-container").style.animationPlayState =
              "paused";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.querySelector(".scroll-container").style.animationPlayState =
              "running";
          }}
        >
          <div
            className="scroll-container flex gap-6 w-max no-scrollbar"
            style={{
              animation: "scroll 40s linear infinite",
            }}
          >
            {repeatedTestimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="min-w-[300px] max-w-sm bg-white text-black rounded-3xl p-6 flex-shrink-0 shadow-xl border border-gray-200 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                <h3 className="font-semibold uppercase tracking-wide">
                  {testimonial.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
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
  );
};

export default TestimonialComponent;
