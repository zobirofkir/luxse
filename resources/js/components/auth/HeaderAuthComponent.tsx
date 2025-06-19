import React, { useState, useRef, useEffect } from 'react';
import { User, LogOut, Menu, X, ShoppingCart, ShoppingBag } from 'lucide-react';
import Logo from '@/assets/logo/logo.jpg';
import { Link, router, usePage } from '@inertiajs/react';

const HeaderAuthComponent = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'Produits', href: '/products' },
    { name: 'Faq', href: '/faqs' },
  ];

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('shopping_cart') || '[]');
    const totalQuantity = storedCart.reduce((sum: number, item: any) => sum + item.quantity, 0);
    setCartCount(totalQuantity);
  }, []);

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

  const { auth } = usePage().props;
  const avatarUrl = auth.user?.avatar_url;

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo and Mobile Button */}
        <div className="flex items-center space-x-4">
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <Link href="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full md:block hidden" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-gray-600 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Section: Cart Icon + Profile Dropdown */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon */}
          <Link
            href="/auth/carts"
            className="relative group"
            aria-label="Shopping cart"
            title="View cart"
          >
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="focus:outline-none transition-all duration-200 hover:scale-105"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              aria-label="User menu"
            >
              <img
                src={avatarUrl}
                alt="Profile"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
            </button>

            <div
              className={`absolute right-0 mt-3 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-300 origin-top transform ${
                dropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
              role="menu"
            >
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <Link href='/auth/profile' role="menuitem" tabIndex={dropdownOpen ? 0 : -1}>
                    <button className="w-full flex items-center px-4 py-2 hover:bg-gray-100 transition-colors">
                      <User className="w-4 h-4 mr-2 text-gray-500" />
                      Profile
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href='/auth/carts' role="menuitem" tabIndex={dropdownOpen ? 0 : -1}>
                    <button className="w-full flex items-center px-4 py-2 hover:bg-gray-100 transition-colors">
                      <ShoppingCart className="w-4 h-4 mr-2 text-gray-500" />
                      Cart
                    </button>
                  </Link>
                </li>

                <li>
                  <Link href='/auth/orders' role="menuitem" tabIndex={dropdownOpen ? 0 : -1}>
                    <button className="w-full flex items-center px-4 py-2 hover:bg-gray-100 transition-colors">
                      <ShoppingBag className="w-4 h-4 mr-2 text-gray-500" />
                      Orders
                    </button>
                  </Link>
                </li>

                <li>
                  <button 
                    className="w-full flex items-center px-4 py-2 hover:bg-gray-100 transition-colors"
                    onClick={handleLogout}
                    role="menuitem"
                    tabIndex={dropdownOpen ? 0 : -1}
                  >
                    <LogOut className="w-4 h-4 mr-2 text-gray-500" />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu with transition */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-200 shadow-inner ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="py-4 px-6 space-y-3">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="block py-2 text-gray-700 hover:text-gray-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default HeaderAuthComponent;
