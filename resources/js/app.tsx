import '../css/app.css'

import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createRoot } from 'react-dom/client'
import React, { useContext } from 'react'
import { LanguageProvider, LanguageContext } from './contexts/LanguageContext'
import LanguageWrapper from './LanguageWrapper'

const appName = import.meta.env.VITE_APP_NAME || 'Oudghiri'

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
  setup({ el, App, props }) {
    const root = createRoot(el)

    root.render(
      <LanguageProvider>
        <LanguageWrapper App={App} props={props} />
      </LanguageProvider>
    )
  },
  progress: {
    color: '#4B5563',
  },
})
