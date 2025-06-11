import React from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const BurgerMenuButton = ({ menuOpen, toggleMenu }) => (
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
)

export default BurgerMenuButton
