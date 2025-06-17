import React, { useState, useRef, useEffect } from 'react';
import { User, LogOut, Menu, X, ShoppingCart } from 'lucide-react';
import Logo from '@/assets/logo/logo.jpg';
import { Link, router } from '@inertiajs/react';

const HeaderAuthComponent = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'Produits', href: '/products' },
    { name: 'Faq', href: '/faqs' },
  ];

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

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo and Mobile Button */}
        <div className="flex items-center space-x-4">
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <a href="/">
            <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full md:block hidden" />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-gray-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="focus:outline-none transition-all duration-200 hover:scale-105"
          >
            <img
              src="https://i.pravatar.cc/40?img=13"
              alt="Profile"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
          </button>

          <div
            className={`absolute right-0 mt-3 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-300 origin-top transform ${
              dropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <Link href='/auth/profile'>
                  <button className="w-full flex items-center px-4 py-2 hover:bg-gray-100 transition-colors">
                    <User className="w-4 h-4 mr-2 text-gray-500" />
                    Profile
                  </button>
                </Link>
              </li>
              <li>
                <Link href='/auth/orders'>
                  <button className="w-full flex items-center px-4 py-2 hover:bg-gray-100 transition-colors">
                    <ShoppingCart className="w-4 h-4 mr-2 text-gray-500" />
                    Orders
                  </button>
                </Link>
              </li>
              <li>
                <button className="w-full flex items-center px-4 py-2 hover:bg-gray-100 transition-colors" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2 text-gray-500" />
                  Logout
                </button>
              </li>
            </ul>
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
