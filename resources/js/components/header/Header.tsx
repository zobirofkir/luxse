import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SocialBar from './SocialBar'
import LogoComponent from './Logo'
import NavBar from './NavBar'
import BurgerMenuButton from './BurgerMenuButton'
import Sidebar from './Sidebar'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
      <SocialBar />

      <hr className="border-t border-white/30 mx-auto max-w-7xl" />

      <header className="sticky top-0 left-0 w-full z-[9999] bg-black bg-opacity-95 backdrop-blur-sm shadow-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <LogoComponent />

          <NavBar />

          <BurgerMenuButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>

        <AnimatePresence>
          {menuOpen && <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Header
