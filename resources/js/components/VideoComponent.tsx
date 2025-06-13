import React from "react";
import { motion } from "framer-motion";

const VideoComponent = () => {
  return (
    <section className="bg-white text-black py-24 px-4 sm:px-10">
      <div className="container mx-auto">
        {/* Titre et sous-titre avec flesh */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <div className="w-1 h-12 bg-rose-500 rounded-full"></div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-extrabold uppercase tracking-widest text-gray-800"
            >
              Découvrez Notre Artisanat
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base italic text-center sm:text-right"
          >
            Un regard immersif dans la création de nos bijoux
          </motion.p>
        </div>

        {/* Vidéo responsive */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl shadow-2xl border border-black mx-auto max-w-full aspect-video"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/kYOP52BUZTI"
            title="Vidéo artisanat"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoComponent;
