import { useState, useRef, useEffect } from 'react';
import { router } from '@inertiajs/react';

export default function useHeaderAuth() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Load cart count
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('shopping_cart') || '[]');
    const totalQuantity = storedCart.reduce((sum: number, item: any) => sum + item.quantity, 0);
    setCartCount(totalQuantity);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    router.visit('/logout');
  };

  return {
    dropdownOpen,
    setDropdownOpen,
    mobileMenuOpen,
    setMobileMenuOpen,
    cartCount,
    dropdownRef,
    mobileMenuRef,
    handleLogout,
  };
}
