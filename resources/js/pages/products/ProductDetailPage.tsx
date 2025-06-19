import useProductDetail from '@/hooks/useProductDetail';
import { getLayout } from '@/layouts/layout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';

const DELIVERY_CACHE_KEY = `delivery_cache_product_`;

const ProductDetailPage = ({ product, auth }) => {
  const Layout = getLayout(auth);
  const {
    views,
    selectedImage,
    setSelectedImage,
    quantity,
    setQuantity,
    deliveryInfo,
    handleAddToCart,
  } = useProductDetail(product);

  return (
    <Layout>
      <section className="max-w-7xl mx-auto p-6 sm:p-10 bg-white text-gray-900 min-h-screen flex flex-col">
        <Head title={product.title} />

        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Image Gallery */}
          <div className="flex-1 flex flex-col">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-300">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt={product.title}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-400">
                  No image available
                </div>
              )}
            </div>

            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              {Array.isArray(product.image) &&
                product.image.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-transform duration-300 ${
                      selectedImage === img
                        ? 'border-black scale-110'
                        : 'border-gray-300 hover:border-black hover:scale-105'
                    }`}
                    aria-label={`Image ${i + 1}`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} miniature ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
            </div>

            <p className="mt-6 text-sm text-gray-600 italic">
              Product views: <span className="font-semibold">{views}</span>
            </p>
          </div>

          {/* Product Details */}
          <div className="flex-1 flex flex-col">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase mb-4 font-serif">
              {product.title}
            </h1>

            <p className="text-sm text-gray-500 uppercase mb-2">
              Category: <span className="font-medium">{product.category?.name}</span>
            </p>

            <p className="text-3xl font-semibold text-gray-800 mb-4">{product.price} MAD</p>

            <p className="text-lg leading-relaxed mb-6 text-gray-700">{product.description}</p>

            <div className="grid grid-cols-2 gap-6 text-sm text-gray-700 mb-8">
              <div>
                <p className="font-semibold">Material:</p>
                <p>{product.material ?? 'N/A'}</p>
              </div>
              <div>
                <p className="font-semibold">Size:</p>
                <p>{product.size ?? 'N/A'}</p>
              </div>
              <div>
                <p className="font-semibold">Status:</p>
                <p>{product.status}</p>
              </div>
              <div>
                <p className="font-semibold">Stock:</p>
                <p>{product.stock > 0 ? `${product.stock} items` : 'Out of stock'}</p>
              </div>
            </div>

            <div className="mb-10 p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold uppercase tracking-wide mb-4 border-l-4 border-black pl-3">
                Delivery
              </h2>
              {deliveryInfo ? (
                <ul className="text-lg text-gray-700 font-medium space-y-1">
                  <li>
                    <span className="font-bold">Carrier:</span> {deliveryInfo.carrier}
                  </li>
                  <li>
                    <span className="font-bold">Estimated Delay:</span> {deliveryInfo.delay}
                  </li>
                  <li>
                    <span className="font-bold">Cost:</span> {deliveryInfo.price}
                  </li>
                </ul>
              ) : (
                <p>Loading delivery information...</p>
              )}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-auto max-w-sm">
              <label
                htmlFor="quantity"
                className="block text-sm font-semibold uppercase tracking-wide mb-3"
              >
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.min(Math.max(1, +e.target.value), product.stock))
                }
                className="w-24 p-3 border border-gray-400 rounded-md text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-black"
              />

              <button
                type="button"
                className="mt-6 w-full bg-black text-white uppercase font-semibold py-4 rounded-lg tracking-wider hover:bg-white hover:text-black border-2 border-black transition-colors duration-300 shadow-lg"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetailPage;
