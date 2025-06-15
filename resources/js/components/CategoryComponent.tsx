import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    name: "Bagues",
    description: "Découvrez notre sélection de bagues en diamant intemporelles.",
    image:
      "https://t3.ftcdn.net/jpg/08/17/34/54/360_F_817345491_l7YcXOrtBR6C8pSsUeNyOQ3ImRaGq42P.jpg",
  },
  {
    id: 2,
    name: "Colliers",
    description: "Des colliers raffinés pour sublimer votre élégance.",
    image:
      "https://t4.ftcdn.net/jpg/11/54/47/75/360_F_1154477568_0AQ6ccQGFevGn6op7H03nXyjrZjpoCJZ.jpg",
  },
  {
    id: 3,
    name: "Bracelets",
    description: "Bracelets en or et diamants, parfaits pour toutes les occasions.",
    image:
      "https://t3.ftcdn.net/jpg/08/17/34/54/360_F_817345491_l7YcXOrtBR6C8pSsUeNyOQ3ImRaGq42P.jpg",
  },
];

const CategoryComponent = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  const handleFlip = (id: number) => {
    setFlipped(flipped === id ? null : id);
  };

  return (
    <section className="bg-white text-black pb-10 px-4 mt-10 sm:px-8">
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div className="flex items-center space-x-4">
            <div className="w-1 h-12 bg-blue-600 rounded-full"></div>
            <h2 className="text-4xl font-extrabold uppercase tracking-widest text-gray-800">
              Catégories
            </h2>
          </div>
          <div className="mt-4 sm:mt-0">
            <p className="text-gray-500 text-sm sm:text-base italic">
              Découvrez les collections les plus populaires.
            </p>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative w-full h-96 perspective cursor-pointer"
              onClick={() => handleFlip(cat.id)}
            >
              <motion.div
                className="w-full h-full relative"
                animate={{ rotateY: flipped === cat.id ? 180 : 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute w-full h-full backface-hidden"
                  style={{
                    WebkitBackfaceVisibility: "hidden",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500 rounded-xl shadow-md"
                  />
                </div>

                {/* Back Side */}
                <div
                  className="absolute w-full h-full bg-black text-white p-6 flex flex-col justify-center items-center text-center rounded-xl shadow-lg"
                  style={{
                    transform: "rotateY(180deg)",
                    WebkitBackfaceVisibility: "hidden",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <h3 className="text-xl font-bold uppercase mb-4 tracking-widest">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-gray-300">{cat.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryComponent;
