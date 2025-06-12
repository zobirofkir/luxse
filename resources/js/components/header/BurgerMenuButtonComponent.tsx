import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'

const BurgerMenuButtonComponent = ({ menuOpen, toggleMenu }) => {
  const [language, setLanguage] = useState('fr')

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'fr' ? 'ar' : 'fr'))
  }

  const translations = {
    fr: {
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
    },
    ar: {
      openMenu: 'افتح القائمة',
      closeMenu: 'أغلق القائمة',
    },
  }

  const FlagIcon = ({ lang }) => {
    const flag = lang === 'fr' ? '🇫🇷' : '🇸🇦'
    return (
      <motion.span
        key={lang}
        className="text-xl"
        initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
        transition={{ duration: 0.4 }}
      >
        {flag}
      </motion.span>
    )
  }

  return (
    <div className="flex items-center gap-3" style={{ zIndex: 10000 }}>

      {/* Language Switcher Button */}
      <button
        onClick={toggleLanguage}
        aria-label="Change Language"
        className="w-10 h-10 flex items-center justify-center rounded-full shadow-md border hover:shadow-lg transition bg-white"
      >
        <AnimatePresence mode="wait">
          <FlagIcon key={language} lang={language} />
        </AnimatePresence>
      </button>

      {/* Burger Menu Button */}
      <button
        aria-label={menuOpen ? translations[language].closeMenu : translations[language].openMenu}
        onClick={toggleMenu}
        className="text-black focus:outline-none focus:ring-2 focus:ring-white rounded transition"
      >
        {menuOpen ? (
          <XMarkIcon className="h-7 w-7" />
        ) : (
          <Bars3Icon className="h-7 w-7" />
        )}
      </button>

    </div>
  )
}

export default BurgerMenuButtonComponent
