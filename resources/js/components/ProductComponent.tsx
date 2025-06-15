import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

const produits = [
  {
    id: 1,
    name: "Bague Éclat Suprême",
    price: "2 950 DH",
    image:
      "https://t4.ftcdn.net/jpg/11/54/47/75/360_F_1154477568_0AQ6ccQGFevGn6op7H03nXyjrZjpoCJZ.jpg",
  },
  {
    id: 2,
    name: "Collier Prestige Blanc",
    price: "3 800 DH",
    image:
      "https://t3.ftcdn.net/jpg/11/98/78/90/360_F_1198789027_qUDh3zSjFjMG4EUNrDruwy5AxhwpNWyJ.jpg",
  },
  {
    id: 3,
    name: "Boucles Élégance Noire",
    price: "2 150 DH",
    image:
      "https://t3.ftcdn.net/jpg/08/17/34/54/360_F_817345491_l7YcXOrtBR6C8pSsUeNyOQ3ImRaGq42P.jpg",
  },
  {
    id: 4,
    name: "Bracelet Élixir",
    price: "4 400 DH",
    image:
      "https://t4.ftcdn.net/jpg/11/54/47/75/360_F_1154477568_0AQ6ccQGFevGn6op7H03nXyjrZjpoCJZ.jpg",
  },
  {
    id: 5,
    name: "Serti Royal",
    price: "5 600 DH",
    image:
      "https://t3.ftcdn.net/jpg/11/98/78/90/360_F_1198789027_qUDh3zSjFjMG4EUNrDruwy5AxhwpNWyJ.jpg",
  },
  {
    id: 6,
    name: "Émeraude Noire",
    price: "7 200 DH",
    image:
      "https://t3.ftcdn.net/jpg/08/17/34/54/360_F_817345491_l7YcXOrtBR6C8pSsUeNyOQ3ImRaGq42P.jpg",
  },
];

const ProductComponent = () => {
  return (
    <section className="bg-white text-black pb-10 px-4 sm:px-8 mt-10">
      <div className="container mx-auto">
        {/* Titre avec ligne à gauche et sous-titre à droite */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div className="flex items-center space-x-4">
            <div className="w-1 h-12 bg-blue-600 rounded-full"></div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-extrabold uppercase tracking-widest text-gray-800"
            >
              Products
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base italic mt-4 sm:mt-0"
          >
            Des pièces uniques à découvrir absolument.
          </motion.p>
        </div>

        {/* Grille des produits */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {produits.map((produit, index) => (
            <Link
              key={produit.id}
              href={`/products/${produit.id}`}
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
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
                  <p className="text-base sm:text-lg font-medium text-gray-800 text-xl">
                    {produit.price}
                  </p>
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="mt-4 w-fit px-6 py-2 border border-black uppercase text-xs sm:text-sm font-semibold tracking-widest hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Ajouter au panier
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductComponent;
