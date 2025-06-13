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
  <nav className="hidden md:flex space-x-10 font-semibold text-black text-md select-none">
    {navItems.map(({ name, href }) => (
      <Link
        key={name}
        href={href}
        className="hover:text-gray-400 transition-colors duration-300"
      >
        {name}
      </Link>
    ))}
  </nav>
)

export default NavBarComponent
