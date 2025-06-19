import { useState, useEffect } from 'react';

export default function useCart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    calculateTotal(storedCart);
  }, []);

  const calculateTotal = (cartItems) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('shopping_cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    if (cart.length === 0) {
      setError('Votre panier est vide.');
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
        throw new Error(errorData.message || "Échec de la commande.");
      }

      setCart([]);
      setTotalPrice(0);
      localStorage.removeItem('shopping_cart');
      window.location.href = '/auth/orders';

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    cart,
    totalPrice,
    loading,
    error,
    handleRemove,
    handleCheckout,
  };
}
