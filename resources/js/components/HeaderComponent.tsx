import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SocialBarComponent from './header/SocialBarComponent'
import LogoComponent from './header/LogoComponent'
import NavBarComponent from './header/NavBarComponent'
import BurgerMenuButtonComponent from './header/BurgerMenuButtonComponent'
import SidebarComponent from './header/SidebarComponent'

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling Down
        setShowHeader(false)
      } else {
        // Scrolling Up
        setShowHeader(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* Social Bar */}
      <SocialBarComponent />
      <hr className="border-t border-white/30 mx-auto max-w-7xl" />

      <AnimatePresence>
        {showHeader && (
          <motion.header
            key="main-header"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="sticky top-0 left-0 w-full z-[9999] bg-white bg-opacity-95 backdrop-blur-sm shadow-md border-b border-white/10"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
              <LogoComponent />
              <NavBarComponent />
              <BurgerMenuButtonComponent menuOpen={menuOpen} toggleMenu={toggleMenu} />
            </div>

            <AnimatePresence>
              {menuOpen && (
                <SidebarComponent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              )}
            </AnimatePresence>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  )
}

export default HeaderComponent
