import useCart from '@/hooks/useCart';
import { getLayout } from '@/layouts/layout';
import { Head } from '@inertiajs/react';

const CartPage = ({ auth }) => {
  const Layout = getLayout(auth);

  const { cart, totalPrice, loading, error, handleRemove, handleCheckout } = useCart();
  
  return (
    <Layout>
      <Head title="Panier" />
      <section className="max-w-5xl mx-auto py-10 px-4 sm:px-6">
        <h1 className="text-4xl font-bold mb-8">Panier</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-lg">Votre panier est vide.</p>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-lg border"
                    />
                    <div>
                      <h2 className="text-xl font-semibold">{item.title}</h2>
                      <p className="text-gray-600">Quantité : {item.quantity}</p>
                      <p className="text-gray-800 font-bold">{item.price} MAD</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    Supprimer
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 border rounded-lg shadow bg-gray-50 text-lg">
              <div className="flex justify-between font-semibold">
                <span>Total :</span>
                <span>{totalPrice} MAD</span>
              </div>

              {error && (
                <p className="mt-2 text-red-600 font-semibold">{error}</p>
              )}

              <button
                className={`mt-6 w-full bg-black text-white py-3 rounded-lg text-center hover:bg-gray-900 transition
                  ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? 'Traitement en cours...' : 'Passer à la caisse'}
              </button>
            </div>
          </>
        )}
      </section>
    </Layout>
  );
};

export default CartPage;
