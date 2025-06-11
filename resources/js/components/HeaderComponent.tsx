import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'

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
      <div className="bg-black text-white text-sm py-1 border-b border-white">
        <div className="max-w-7xl mx-auto flex justify-end space-x-6 px-6">
          {socialMediaLinks.map(({ icon, url }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label={`Lien vers ${url.replace('https://', '')}`}
            >
              <span className="sr-only">{url.replace('https://', '')}</span>
              <div className="text-lg">{icon}</div>
            </a>
          ))}
        </div>
      </div>

      {/* Main header */}
      <header className="fixed top-[2.5rem] left-0 w-full z-50 bg-black shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="md:text-2xl text-xl font-extrabold text-white select-none">
            OUDghiri
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-10">
            {elementsNav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                className="text-white text-lg font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-white transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Bouton menu mobile */}
          <button
            aria-label={menuOuvert ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={basculerMenu}
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            {menuOuvert ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Menu latéral mobile */}
        <AnimatePresence>
          {menuOuvert && (
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-[2.5rem] left-0 z-40 h-full w-64 bg-black shadow-lg p-8 md:hidden"
              role="dialog"
              aria-modal="true"
            >
              <nav className="flex flex-col space-y-8">
                {elementsNav.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="text-white text-xl font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-white transition"
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
