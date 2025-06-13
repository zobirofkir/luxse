import React from "react";
import { motion } from "framer-motion";

// Fake data — à remplacer par tes vraies données
const products = [
  {
    id: 1,
    name: "Bague Diamant Éternelle",
    price: "2 500€",
    image: "https://images.unsplash.com/photo-1610394219226-6c2094430b41",
  },
  {
    id: 2,
    name: "Collier Élégance Blanche",
    price: "3 200€",
    image: "https://images.unsplash.com/photo-1611601189657-9b7f9cefd4a4",
  },
  {
    id: 3,
    name: "Boucles Clarté Suprême",
    price: "1 800€",
    image: "https://images.unsplash.com/photo-1589987600549-0f15b1d3b122",
  },
  {
    id: 4,
    name: "Bracelet Brillance Noire",
    price: "4 150€",
    image: "https://images.unsplash.com/photo-1603038083501-9e4ce4900f2e",
  },
];

const ProductComponent = () => {
  return (
    <section className="bg-white py-20 px-6 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold uppercase text-center mb-16 tracking-wide">
          Nos Produits
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group border border-black rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 grayscale"
                />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-lg font-semibold uppercase tracking-wide">
                  {product.name}
                </h3>
                <p className="text-md font-medium">{product.price}</p>
                <button className="mt-2 px-4 py-2 border border-black text-sm uppercase hover:bg-black hover:text-white transition-all duration-300">
                  Ajouter au panier
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductComponent;
