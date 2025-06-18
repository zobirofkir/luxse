import { getLayout } from '@/layouts/layout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';

const CartPage = ({ auth }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const Layout = getLayout(auth);

  const safeJSONParse = (str) => {
    try {
      return JSON.parse(str);
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const storedCartRaw = localStorage.getItem('shopping_cart');
    const storedCart = safeJSONParse(storedCartRaw) ?? [];
    setCart(storedCart);

    const total = storedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('shopping_cart', JSON.stringify(updatedCart));

    const updatedTotal = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(updatedTotal);
  };

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    if (cart.length === 0) {
      setError('Your cart is empty.');
      setLoading(false);
      return;
    }

    const productsPayload = cart.map(item => ({
      id: item.id,
      quantity: item.quantity,
    }));

    try {
      const response = await fetch('/auth/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json', 
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        },
        body: JSON.stringify({ products: productsPayload }),
        credentials: 'same-origin',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to place order.');
      }

      setCart([]);
      setTotalPrice(0);
      localStorage.removeItem('shopping_cart');

      window.location.href = '/orders';

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Head title="Your Cart" />
      <section className="max-w-5xl mx-auto py-10 px-4 sm:px-6">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
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
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                      <p className="text-gray-800 font-bold">{item.price} MAD</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 border rounded-lg shadow bg-gray-50 text-lg">
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
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
                {loading ? 'Processing...' : 'Proceed to Checkout'}
              </button>
            </div>
          </>
        )}
      </section>
    </Layout>
  );
};

export default CartPage;
