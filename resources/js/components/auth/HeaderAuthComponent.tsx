import React, { useState, useRef, useEffect } from 'react';
import { User, LogOut } from 'lucide-react';
import Logo from '@/assets/logo/logo.jpg';

const HeaderAuthComponent = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="/">
            <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full" />
          </a>
        </div>

        {/* Profile Section */}
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

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-3 w-44 bg-white border border-gray-200 rounded-lg shadow-lg animate-fade-in z-50">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <button className="w-full flex items-center px-4 py-2 hover:bg-gray-100 transition-colors">
                    <User className="w-4 h-4 mr-2 text-gray-500" />
                    Profile
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center px-4 py-2 hover:bg-gray-100 transition-colors">
                    <LogOut className="w-4 h-4 mr-2 text-gray-500" />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderAuthComponent;
