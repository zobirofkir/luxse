import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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

const LanguageSwitcher = ({ language, toggleLanguage }) => {
  return (
    <button
      onClick={toggleLanguage}
      aria-label="Change Language"
      className="w-10 h-10 flex items-center justify-center rounded-full shadow-md border hover:shadow-lg transition bg-white"
    >
      <AnimatePresence mode="wait">
        <FlagIcon key={language} lang={language} />
      </AnimatePresence>
    </button>
  )
}

export default LanguageSwitcher
