import React, { createContext, useState, useEffect } from 'react'

export const LanguageContext = createContext<{
  language: string
  toggleLanguage: () => void
}>({
  language: 'fr',
  toggleLanguage: () => {},
})

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('fr')

  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLanguage')
    if (savedLang) setLanguage(savedLang)
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'ar' : 'fr'
    setLanguage(newLang)
    localStorage.setItem('selectedLanguage', newLang)
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
