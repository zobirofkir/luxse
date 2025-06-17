import { getLayout } from '@/layouts/layout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';

const DELIVERY_CACHE_KEY = `delivery_cache_product_`;

const ProductDetailPage = ({ id, auth }) => {
  const product = {
    id,
    name: "Bague Éclat Suprême",
    price: "2 950 DH",
    description:
      "Une bague d’exception avec un design élégant et intemporel. Fabriquée avec des matériaux de qualité supérieure.",
    images: [
      "https://t4.ftcdn.net/jpg/11/54/47/75/360_F_1154477568_0AQ6ccQGFevGn6op7H03nXyjrZjpoCJZ.jpg",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80",
    ],
    measurements: {
      diameter: "2 cm",
      height: "1.5 cm",
      weight: "0.05 kg",
    },
    material: "Or blanc 18 carats",
    stock: 12,
  };

  /**
   * Vues produit avec localStorage (simulé)
   */
  const [views, setViews] = useState(0);
  useEffect(() => {
    const viewsKey = `product_views_${product.id}`;
    let currentViews = parseInt(localStorage.getItem(viewsKey) || "0", 10);
    currentViews++;
    localStorage.setItem(viewsKey, currentViews);
    setViews(currentViews);
  }, [product.id]);

  /**
   * Gestion cache livraison
   */
  const [deliveryInfo, setDeliveryInfo] = useState(null);
  useEffect(() => {
    const cached = localStorage.getItem(DELIVERY_CACHE_KEY + product.id);
    if (cached) {
      setDeliveryInfo(JSON.parse(cached));
    } else {
      // Simuler un appel API livraison
      const fetchDelivery = () => {
        return new Promise((res) => {
          setTimeout(() => {
            res({
              price: "40 DH",
              delay: "2 à 4 jours ouvrés",
              carrier: "Express Maroc",
            });
          }, 800);
        });
      };

      fetchDelivery().then((data) => {
        localStorage.setItem(DELIVERY_CACHE_KEY + product.id, JSON.stringify(data));
        setDeliveryInfo(data);
      });
    }
  }, [product.id]);

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const Layout = getLayout(auth)
  
  return (
    <Layout>
      <section className="max-w-7xl mx-auto p-6 sm:p-10 bg-white text-gray-900 min-h-screen flex flex-col">
        <Head title={product.name} />
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Images Gallery */}
          <div className="flex-1 flex flex-col">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-300">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-transform duration-300 
                    ${selectedImage === img ? 'border-black scale-110' : 'border-gray-300 hover:border-black hover:scale-105'}
                  `}
                  aria-label={`Image ${i + 1}`}
                >
                  <img src={img} alt={`${product.name} miniature ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Compteur de vues */}
            <p className="mt-6 text-sm text-gray-600 italic">Vues du produit : <span className="font-semibold">{views}</span></p>
          </div>

          {/* Product Details */}
          <div className="flex-1 flex flex-col">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase mb-6 font-serif">
              {product.name}
            </h1>

            <p className="text-3xl font-semibold text-gray-800 mb-8">{product.price}</p>

            <p className="text-lg leading-relaxed mb-10 border-b border-gray-300 pb-8 font-light">
              {product.description}
            </p>

            <div className="mb-10">
              <h2 className="text-2xl font-semibold uppercase tracking-wide mb-4 border-l-4 border-black pl-3">
                Détails du produit
              </h2>
              <ul className="grid grid-cols-2 gap-y-3 text-lg text-gray-700 font-medium">
                <li>
                  <span className="font-bold">Diamètre:</span> {product.measurements.diameter}
                </li>
                <li>
                  <span className="font-bold">Hauteur:</span> {product.measurements.height}
                </li>
                <li>
                  <span className="font-bold">Poids:</span> {product.measurements.weight}
                </li>
                <li>
                  <span className="font-bold">Matériau:</span> {product.material}
                </li>
                <li>
                  <span className="font-bold">Stock disponible:</span> {product.stock} unités
                </li>
              </ul>
            </div>

            {/* Livraison */}
            <div className="mb-10 p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold uppercase tracking-wide mb-4 border-l-4 border-black pl-3">
                Livraison
              </h2>
              {deliveryInfo ? (
                <ul className="text-lg text-gray-700 font-medium space-y-1">
                  <li><span className="font-bold">Transporteur:</span> {deliveryInfo.carrier}</li>
                  <li><span className="font-bold">Délai estimé:</span> {deliveryInfo.delay}</li>
                  <li><span className="font-bold">Coût:</span> {deliveryInfo.price}</li>
                </ul>
              ) : (
                <p>Chargement des informations de livraison...</p>
              )}
            </div>

            {/* Quantité & Ajouter au panier */}
            <div className="mt-auto max-w-sm">
              <label
                htmlFor="quantity"
                className="block text-sm font-semibold uppercase tracking-wide mb-3"
              >
                Quantité
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) => setQuantity(Math.min(Math.max(1, +e.target.value), product.stock))}
                className="w-24 p-3 border border-gray-400 rounded-md text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-black"
              />

              <button
                type="button"
                className="mt-6 w-full bg-black text-white uppercase font-semibold py-4 rounded-lg tracking-wider hover:bg-white hover:text-black border-2 border-black transition-colors duration-300 shadow-lg"
              >
                Ajouter au panier
              </button>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetailPage;
