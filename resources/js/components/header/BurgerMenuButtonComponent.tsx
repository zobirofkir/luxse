import React from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LanguageSwitcher from './LanguageSwitcher'

const BurgerMenuButtonComponent = ({ menuOpen, toggleMenu, language, toggleLanguage }) => {
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

  return (
    <div className="flex items-center gap-3" style={{ zIndex: 10000 }}>
      <LanguageSwitcher language={language} toggleLanguage={toggleLanguage} />
      <button
        aria-label={menuOpen ? translations[language].closeMenu : translations[language].openMenu}
        onClick={toggleMenu}
        className="text-black lg:hidden focus:outline-none focus:ring-2 focus:ring-white rounded transition"
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
