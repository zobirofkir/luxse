import React from "react";
import { motion } from "framer-motion";

const AboutComponent = () => {
  return (
    <section className="bg-white text-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center tracking-wide uppercase mb-16"
        >
          Maison du Diamant
        </motion.h2>

        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold uppercase">Élégance intemporelle</h3>
            <p className="text-lg leading-relaxed text-gray-800">
              Depuis des générations, notre maison façonne des bijoux d'exception mêlant tradition et modernité. Chaque diamant est sélectionné avec la plus grande exigence.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Nous croyons que chaque bijou doit raconter une histoire – votre histoire – avec éclat et raffinement.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <img
                src="https://t3.ftcdn.net/jpg/11/98/78/90/360_F_1198789027_qUDh3zSjFjMG4EUNrDruwy5AxhwpNWyJ.jpg"
                alt="Bijou de luxe"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-12 text-center">
          {[
            {
              title: "Savoir-faire",
              desc: "Un héritage artisanal transmis avec passion.",
            },
            {
              title: "Pureté",
              desc: "Des diamants certifiés, d’une clarté exceptionnelle.",
            },
            {
              title: "Engagement",
              desc: "Une éthique respectueuse de l’humain et de la nature.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + idx * 0.2 }}
              className="border border-black py-10 px-6 rounded-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              <h4 className="text-2xl font-bold mb-3 uppercase tracking-wider">{item.title}</h4>
              <p className="text-gray-800 dark:text-gray-300 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <p className="text-xl font-medium mb-4">
            Entrez dans l’univers exclusif de la haute joaillerie.
          </p>
          <button className="mt-4 px-8 py-3 uppercase border border-black font-semibold tracking-wider hover:bg-black hover:text-white transition-all duration-300">
            Découvrir nos créations
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutComponent;
