import { useState, useEffect } from 'react';

const DELIVERY_CACHE_KEY = `delivery_cache_product_`;

export default function useProductDetail(product) {
  const [views, setViews] = useState(0);
  const [selectedImage, setSelectedImage] = useState(
    Array.isArray(product.image) && product.image.length > 0 ? product.image[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  const [deliveryInfo, setDeliveryInfo] = useState(null);

  // Count product views
  useEffect(() => {
    const viewsKey = `product_views_${product.id}`;
    let currentViews = parseInt(localStorage.getItem(viewsKey) || '0', 10);
    currentViews++;
    localStorage.setItem(viewsKey, currentViews);
    setViews(currentViews);
  }, [product.id]);

  // Load or fetch delivery info
  useEffect(() => {
    const cached = localStorage.getItem(DELIVERY_CACHE_KEY + product.id);
    if (cached) {
      setDeliveryInfo(JSON.parse(cached));
    } else {
      const fetchDelivery = () => {
        return new Promise((res) => {
          setTimeout(() => {
            res({
              price: '40 DH',
              delay: '2 à 4 jours ouvrés',
              carrier: 'Express Maroc',
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

  const handleAddToCart = () => {
    const cartKey = 'shopping_cart';

    const existingCartRaw = localStorage.getItem(cartKey);

    let existingCart = [];
    try {
      existingCart = existingCartRaw ? JSON.parse(existingCartRaw) : [];
      if (!Array.isArray(existingCart)) {
        existingCart = [];
      }
    } catch (error) {
      existingCart = [];
    }

    const productInCartIndex = existingCart.findIndex(
      (item) => item.id === product.id
    );

    if (productInCartIndex !== -1) {
      existingCart[productInCartIndex].quantity += quantity;
    } else {
      existingCart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: quantity,
        image: selectedImage,
      });
    }

    localStorage.setItem(cartKey, JSON.stringify(existingCart));
    alert('Product added to cart!');
    window.location.reload();
  };

  return {
    views,
    selectedImage,
    setSelectedImage,
    quantity,
    setQuantity,
    deliveryInfo,
    handleAddToCart,
  };
}
