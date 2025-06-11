import React from 'react'
import { motion } from 'framer-motion'
import { Link } from '@inertiajs/react'
import {
  InformationCircleIcon,
  Cog6ToothIcon,
  ShoppingBagIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

const navItems = [
  { name: 'À propos', href: '/about', icon: <InformationCircleIcon className="h-5 w-5 inline-block mr-2" /> },
  { name: 'Services', href: '/services', icon: <Cog6ToothIcon className="h-5 w-5 inline-block mr-2" /> },
  { name: 'Produits', href: '/products', icon: <ShoppingBagIcon className="h-5 w-5 inline-block mr-2" /> },
  { name: 'Contact', href: '/contact', icon: <PhoneIcon className="h-5 w-5 inline-block mr-2" /> },
]

const Sidebar = ({ menuOpen, setMenuOpen }) => {
  const isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 768 : false

  return (
    <motion.aside
      initial={{ x: isDesktop ? '100%' : '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: isDesktop ? '100%' : '-100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className={`fixed top-[4.5rem] ${
        isDesktop ? 'right-0' : 'left-0'
      } z-40 h-screen w-64 bg-black shadow-xl p-8 border-white/20 border-l md:border-l md:border-white/20 border-r md:border-r-0`}
      role="dialog"
      aria-modal="true"
    >
      <nav className="flex flex-col space-y-8">
        {navItems.map(({ name, href, icon }) => (
          <Link
            key={name}
            href={href}
            className="flex items-center text-white text-md font-semibold hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white rounded transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            {icon}
            {name}
          </Link>
        ))}
      </nav>
    </motion.aside>
  )
}

export default Sidebar
