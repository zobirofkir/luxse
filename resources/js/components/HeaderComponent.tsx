import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  Cog6ToothIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  InformationCircleIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'
import Logo from '@/assets/logo/logo.jpg'
import { Link } from '@inertiajs/react'

const socialMediaLinks = [
  { icon: <FaFacebookF />, url: 'https://facebook.com' },
  { icon: <FaTwitter />, url: 'https://twitter.com' },
  { icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
  { icon: <FaInstagram />, url: 'https://instagram.com' },
]

const navItems = [
  { name: 'À propos', href: '/about', icon: <InformationCircleIcon className="h-5 w-5 inline-block mr-2" /> },
  { name: 'Services', href: '/services', icon: <Cog6ToothIcon className="h-5 w-5 inline-block mr-2" /> },
  { name: 'Produits', href: '/products', icon: <ShoppingBagIcon className="h-5 w-5 inline-block mr-2" /> },
  { name: 'Contact', href: '/contact', icon: <PhoneIcon className="h-5 w-5 inline-block mr-2" /> },
]

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  // Helper to detect if screen is md+ for sidebar animation direction
  const isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 768 : false

  return (
    <>
      {/* Barre sociale en haut */}
      <div className="bg-black text-white text-sm py-1 border-b border-white/20">
        <div className="max-w-7xl mx-auto flex justify-end space-x-6 px-6">
          {socialMediaLinks.map(({ icon, url }, idx) => (
            <Link
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-300"
              aria-label={`Lien vers ${url.replace('https://', '')}`}
            >
              <span className="sr-only">{url.replace('https://', '')}</span>
              <div className="text-lg">{icon}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Séparateur */}
      <hr className="border-t border-white/30 mx-auto max-w-7xl" />

      {/* En-tête principal */}
      <header className="sticky top-0 left-0 w-full z-[9999] bg-black bg-opacity-95 backdrop-blur-sm shadow-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo à gauche */}
          <Link href="/" className="flex items-center select-none">
            <img
              src={Logo}
              alt="Logo Oudghti"
              className="h-15 w-15 rounded-full object-cover"
              draggable={false}
            />
          </Link>

          {/* Menu principal centré (visible md+) */}
          <nav className="hidden md:flex space-x-10 font-semibold text-white text-lg select-none">
            {navItems.slice(0, 4).map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="hover:text-gray-400 transition-colors duration-300"
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* Bouton burger à droite (visible md+) */}
          <button
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded transition md:block"
            style={{ zIndex: 10000 }}
          >
            {menuOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Sidebar */}
        <AnimatePresence>
          {menuOpen && (
            <motion.aside
              initial={{ x: isDesktop ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: isDesktop ? '100%' : '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className={`fixed top-[4.5rem] ${
                isDesktop ? 'right-0' : 'left-0'
              } z-40 h-screen w-64 bg-black shadow-xl p-8 border-white/20 border-l md:border-l md:border-white/20 border-r md:border-r-0`}
              role="dialog"
              aria-modal="true"
            >
              <nav className="flex flex-col space-y-8">
                {navItems.map(({ name, href, icon }) => (
                  <Link
                    key={name}
                    href={href}
                    className="flex items-center text-white text-xl font-semibold hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white rounded transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {icon}
                    {name}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default HeaderComponent
