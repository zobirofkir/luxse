import AppLayout from '@/layouts/app-layout';
import React from 'react';

const ProductDetailPage = ({ id }) => {
  // Sample product data — you can replace with real data fetched via props or API
  const product = {
    id,
    name: "Bague Éclat Suprême",
    price: "2 950 DH",
    description:
      "Une bague d’exception avec un design élégant et intemporel. Fabriquée avec des matériaux de qualité supérieure.",
    images: [
      "https://t4.ftcdn.net/jpg/11/54/47/75/360_F_1154477568_0AQ6ccQGFevGn6op7H03nXyjrZjpoCJZ.jpg",
      // add more images if needed
    ],
    measurements: {
      diameter: "2 cm",
      height: "1.5 cm",
      weight: "0.05 kg",
    },
    material: "Or blanc 18 carats",
    stock: 12,
  };

  return (
    <AppLayout>
      <section className="max-w-7xl mx-auto p-6 sm:p-10 text-black bg-white min-h-screen">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Product Images */}
          <div className="flex-1">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-auto rounded-2xl border border-black object-cover"
            />
            {/* You can add thumbnails or image carousel here */}
          </div>

          {/* Product Details */}
          <div className="flex-1 flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">
              {product.name}
            </h1>

            <p className="text-2xl font-semibold mb-6">{product.price}</p>

            <p className="text-base md:text-lg leading-relaxed mb-6 border-b border-black pb-6">
              {product.description}
            </p>

            {/* Measurements */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 uppercase tracking-wide">
                Détails du produit
              </h2>
              <ul className="list-disc list-inside space-y-1 text-base md:text-lg">
                <li>
                  <strong>Diamètre:</strong> {product.measurements.diameter}
                </li>
                <li>
                  <strong>Hauteur:</strong> {product.measurements.height}
                </li>
                <li>
                  <strong>Poids:</strong> {product.measurements.weight}
                </li>
                <li>
                  <strong>Matériau:</strong> {product.material}
                </li>
                <li>
                  <strong>Stock disponible:</strong> {product.stock} unités
                </li>
              </ul>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-auto">
              <label
                htmlFor="quantity"
                className="block text-sm font-semibold mb-1 uppercase tracking-wide"
              >
                Quantité
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max={product.stock}
                defaultValue="1"
                className="w-20 border border-black rounded-md p-2 text-center mb-6"
              />

              <button
                type="button"
                className="w-full md:w-auto bg-black text-white uppercase font-semibold py-3 px-8 rounded-md hover:bg-white hover:text-black border border-black transition-colors duration-300"
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default ProductDetailPage;
