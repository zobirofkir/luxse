import React, { useContext } from 'react'
import { LanguageContext } from './contexts/LanguageContext'

const LanguageWrapper = ({ App, props }: any) => {
  const { language } = useContext(LanguageContext)

  return <App key={language} {...props} />
}

export default LanguageWrapper
