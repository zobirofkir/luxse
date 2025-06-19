import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import LiveComponent from "./LiveComponent";

const ProductComponent = ({ products }) => {
  return (
    <section className="bg-white text-black pb-10 px-4 sm:px-8 mt-10">
      <div className="container mx-auto">
        {/* Header */}
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

        <LiveComponent />

        {/* Product Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
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
                    src={
                      Array.isArray(product.image) && product.image.length > 0
                        ? product.image[0]
                        : ''
                    }
                    alt={product.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="text-lg sm:text-xl font-semibold uppercase tracking-wider">
                    {product.title}
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-gray-800 text-xl">
                    {product.price} DH
                  </p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-4 w-fit px-6 py-2 border border-black uppercase text-xs sm:text-sm font-semibold tracking-widest hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Afficher le produit
                  </Link>
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
