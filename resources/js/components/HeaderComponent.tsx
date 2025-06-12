import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SocialBar from './header/SocialBar'
import LogoComponent from './header/Logo'
import NavBar from './header/NavBar'
import BurgerMenuButton from './header/BurgerMenuButton'
import Sidebar from './header/Sidebar'

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
    {
      /**
       * Social Bar Component
       */
    }
    <SocialBar />

      <hr className="border-t border-white/30 mx-auto max-w-7xl" />

      <header className="sticky top-0 left-0 w-full z-[9999] bg-black bg-opacity-95 backdrop-blur-sm shadow-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {
            /**
             * Logo Component
             */
          }
          <LogoComponent />

          {
            /**
             * Navigation Bar Component
             */
          }
          <NavBar />

          {
            /**
             * Burger Menu Button Component
             */
          }
          <BurgerMenuButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>
        
        {
          /**
           * Sidebar Component
           */
        }
        <AnimatePresence>
          {menuOpen && <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
        </AnimatePresence>
      </header>
    </>
  )
}

export default HeaderComponent
