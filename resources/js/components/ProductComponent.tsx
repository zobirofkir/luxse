import React from "react";
import { motion } from "framer-motion";

const produits = [
  {
    id: 1,
    name: "Bague Éclat Suprême",
    price: "2 950 DH",
    image: 'https://t4.ftcdn.net/jpg/11/54/47/75/360_F_1154477568_0AQ6ccQGFevGn6op7H03nXyjrZjpoCJZ.jpg',
  },
  {
    id: 2,
    name: "Collier Prestige Blanc",
    price: "3 800 DH",
    image: 'https://t3.ftcdn.net/jpg/11/98/78/90/360_F_1198789027_qUDh3zSjFjMG4EUNrDruwy5AxhwpNWyJ.jpg',
  },
  {
    id: 3,
    name: "Boucles Élégance Noire",
    price: "2 150 DH",
    image: 'https://t3.ftcdn.net/jpg/08/17/34/54/360_F_817345491_l7YcXOrtBR6C8pSsUeNyOQ3ImRaGq42P.jpg',
  },
  {
    id: 4,
    name: "Bracelet Élixir",
    price: "4 400 DH",
    image: 'https://t4.ftcdn.net/jpg/11/54/47/75/360_F_1154477568_0AQ6ccQGFevGn6op7H03nXyjrZjpoCJZ.jpg',
  },
  {
    id: 5,
    name: "Serti Royal",
    price: "5 600 DH",
    image: 'https://t3.ftcdn.net/jpg/11/98/78/90/360_F_1198789027_qUDh3zSjFjMG4EUNrDruwy5AxhwpNWyJ.jpg',
  },
  {
    id: 6,
    name: "Émeraude Noire",
    price: "7 200 DH",
    image: 'https://t3.ftcdn.net/jpg/08/17/34/54/360_F_817345491_l7YcXOrtBR6C8pSsUeNyOQ3ImRaGq42P.jpg',
  },
];

const ComposantProduits = () => {
  return (
    <section className="bg-white text-black py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-black uppercase text-center mb-20 tracking-widest"
        >
          Collection Prestige
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {produits.map((produit, index) => (
            <motion.div
              key={produit.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-black rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-full h-80 overflow-hidden">
                <img
                  src={produit.image + "?sig=" + produit.id}
                  alt={produit.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <h3 className="text-lg sm:text-xl font-semibold uppercase tracking-wider">
                  {produit.name}
                </h3>
                <p className="text-base sm:text-lg font-medium">{produit.price}</p>
                <button className="mt-4 w-fit px-6 py-2 border border-black uppercase text-xs sm:text-sm font-semibold tracking-widest hover:bg-black hover:text-white transition-all duration-300">
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

export default ComposantProduits;
