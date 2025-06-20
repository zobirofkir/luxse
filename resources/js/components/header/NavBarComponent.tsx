import React from 'react'
import { Link } from '@inertiajs/react'
import { headerTranslation } from '@/translation/headerTranslation'

const NavBarComponent = ({ language }) => {
  const t = headerTranslation[language]

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/abouts' },
    { key: 'categories', href: '/categories' },
    { key: 'products', href: '/products' },
    { key: 'faq', href: '/faqs' },
    { key: 'contact', href: '/contacts' },
  ]

  return (
    <nav className="hidden md:flex items-center justify-between w-full font-semibold text-black text-md select-none max-w-7xl mx-auto px-6">
      {/* Left side nav items */}
      <div className="flex space-x-10">
        {navItems.map(({ key, href }) => (
          <Link
            key={key}
            href={href}
            className="hover:text-gray-400 transition-colors duration-300"
          >
            {t[key]}
          </Link>
        ))}
      </div>

      {/* Right side auth links */}
      <div className="flex space-x-6">
        <Link
          href="/login"
          className="text-black px-4 py-2 hover:text-gray-900 transition-colors duration-300"
        >
          {t.login}
        </Link>
        <Link
          href="/register"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-black transition-colors duration-300"
        >
          {t.register}
        </Link>
      </div>
    </nav>
  )
}

export default NavBarComponent
