import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'
import Logo from '@/assets/logo/logo.jpg';

const socialMediaLinks = [
  { icon: <FaFacebookF />, url: 'https://facebook.com' },
  { icon: <FaTwitter />, url: 'https://twitter.com' },
  { icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
  { icon: <FaInstagram />, url: 'https://instagram.com' },
]

const HeaderComponent = () => {
  const [menuOuvert, setMenuOuvert] = useState(false)
  const elementsNav = ['Accueil', 'À propos', 'Services', 'Contact']

  const basculerMenu = () => setMenuOuvert(!menuOuvert)

  return (
    <>
      {/* Top header with social media */}
      <div className="bg-black text-white text-sm py-1 border-b border-white/20">
        <div className="max-w-7xl mx-auto flex justify-end space-x-6 px-6">
          {socialMediaLinks.map(({ icon, url }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-300"
              aria-label={`Lien vers ${url.replace('https://', '')}`}
            >
              <span className="sr-only">{url.replace('https://', '')}</span>
              <div className="text-lg">{icon}</div>
            </a>
          ))}
        </div>
      </div>

      {/* White horizontal line between top header and main header */}
      <hr className="border-t border-white/40 mx-auto max-w-7xl" />

      {/* Main header - sticky with backdrop blur */}
      <header className="sticky top-0 left-0 w-full z-50 bg-black bg-opacity-90 backdrop-blur-sm shadow-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="md:text-2xl text-xl font-extrabold text-white select-none tracking-wide">
            <img src={Logo} alt="Oudghti Logo" className='h-30 w-30 rounded-full'/>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-12">
            {elementsNav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                className="text-white text-lg font-semibold hover:text-indigo-400 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            aria-label={menuOuvert ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={basculerMenu}
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded transition"
          >
            {menuOuvert ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Mobile side menu */}
        <AnimatePresence>
          {menuOuvert && (
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-[4.5rem] left-0 z-40 h-full w-64 bg-black shadow-xl p-8 md:hidden border-r border-gray-800"
              role="dialog"
              aria-modal="true"
            >
              <nav className="flex flex-col space-y-8">
                {elementsNav.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="text-white text-xl font-semibold hover:text-indigo-400 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded transition-colors duration-300"
                    onClick={() => setMenuOuvert(false)}
                  >
                    {item}
                  </a>
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
