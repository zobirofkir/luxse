import React from 'react'
import { Link } from '@inertiajs/react'

const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/abouts' },
  { name: 'Categories', href: '/categories' },
  { name: 'Produits', href: '/products' },
  { name: 'FAQ', href: '/faqs' },
  { name: 'Contact', href: '/contacts' },
]

const NavBarComponent = () => (
  <nav className="hidden md:flex items-center justify-between w-full font-semibold text-black text-md select-none max-w-7xl mx-auto px-6">
    {/* Left side nav items */}
    <div className="flex space-x-10">
      {navItems.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className="hover:text-gray-400 transition-colors duration-300"
        >
          {name}
        </Link>
      ))}
    </div>

    {/* Right side auth links */}
    <div className="flex space-x-6">
      <Link
        href="/login"
        className="text-black px-4 py-2 hover:text-gray-900 transition-colors duration-300"
      >
        Connexion
      </Link>
      <Link
        href="/register"
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-black transition-colors duration-300"
      >
        Inscription
      </Link>
    </div>
  </nav>
)

export default NavBarComponent
