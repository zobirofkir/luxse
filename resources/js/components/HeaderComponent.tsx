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
  const [language, setLanguage] = useState('fr') // default

  // Load language from localStorage on first load
  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLanguage')
    if (savedLang === 'fr' || savedLang === 'ar') {
      setLanguage(savedLang)
    }
  }, [])

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('selectedLanguage', language)
  }, [language])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === 'fr' ? 'ar' : 'fr'))

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
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
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
              <LogoComponent />
              <NavBarComponent language={language} />
              <BurgerMenuButtonComponent
                menuOpen={menuOpen}
                toggleMenu={toggleMenu}
                language={language}
                toggleLanguage={toggleLanguage}
              />
            </div>

            <AnimatePresence>
              {menuOpen && (
                <SidebarComponent
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  language={language}
                />
              )}
            </AnimatePresence>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  )
}

export default HeaderComponent
