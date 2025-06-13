import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    name: "Bagues",
    description: "Découvrez notre sélection de bagues en diamant intemporelles.",
    image: "https://t3.ftcdn.net/jpg/08/17/34/54/360_F_817345491_l7YcXOrtBR6C8pSsUeNyOQ3ImRaGq42P.jpg",
  },
  {
    id: 2,
    name: "Colliers",
    description: "Des colliers raffinés pour sublimer votre élégance.",
    image: "https://t4.ftcdn.net/jpg/11/54/47/75/360_F_1154477568_0AQ6ccQGFevGn6op7H03nXyjrZjpoCJZ.jpg",
  },
  {
    id: 3,
    name: "Bracelets",
    description: "Bracelets en or et diamants, parfaits pour toutes les occasions.",
    image: "https://t3.ftcdn.net/jpg/08/17/34/54/360_F_817345491_l7YcXOrtBR6C8pSsUeNyOQ3ImRaGq42P.jpg",
  },
  // autres catégories...
];

const CategoryComponent = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  const handleFlip = (id: number) => {
    setFlipped(flipped === id ? null : id);
  };

  return (
    <section className="bg-white text-black py-10 px-4 sm:px-8">
      <div className="max-w-full container mx-auto">
        <h2 className="text-4xl font-black uppercase text-center mb-16 tracking-widest">
          Nos Catégories
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="w-full h-96 perspective cursor-pointer"
              onClick={() => handleFlip(cat.id)}
            >
              <motion.div
                className="card-inner"
                animate={{ rotateY: flipped === cat.id ? 180 : 0 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front */}
                <div className="card-front bg-white">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                  />
                </div>

                {/* Back */}
                <div className="card-back bg-black text-white p-6 flex flex-col justify-center items-center text-center">
                  <h3 className="text-xl font-bold uppercase mb-4 tracking-widest">
                    {cat.name}
                  </h3>
                  <p className="text-sm opacity-80">{cat.description}</p>
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
