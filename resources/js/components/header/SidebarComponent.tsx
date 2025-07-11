import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@inertiajs/react'
import {
  InformationCircleIcon,
  Cog6ToothIcon,
  ShoppingBagIcon,
  PhoneIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'
import { TagIcon, UserCircleIcon } from 'lucide-react'
import { FaQuestion } from 'react-icons/fa'
import { LockClosedIcon, UserPlusIcon } from '@heroicons/react/24/outline' // for login/register icons

const navItems = [
  {
    name: 'Accueil',
    href: '/',
    icon: <HomeIcon className="h-5 w-5 inline-block mr-2" />,
  },
  {
    name: 'À propos',
    href: '/abouts',
    icon: <UserCircleIcon className="h-5 w-5 inline-block mr-2" />,
  },
  {
    name: 'Catégories',
    href: '/categories',
    icon: <TagIcon className="h-5 w-5 inline-block mr-2" />,
  },
  {
    name: 'Produits',
    href: '/products',
    icon: <ShoppingBagIcon className="h-5 w-5 inline-block mr-2" />,
  },
  {
    name: 'Faq',
    href: '/faqs',
    icon: <FaQuestion className="h-5 w-5 inline-block mr-2" />,
  },
  {
    name: 'Contact',
    href: '/contacts',
    icon: <PhoneIcon className="h-5 w-5 inline-block mr-2" />,
  },
]

// New auth items
const authItems = [
  {
    name: 'Connexion',
    href: '/login',
    icon: <LockClosedIcon className="h-5 w-5 inline-block mr-2" />,
  },
  {
    name: 'Inscription',
    href: '/register',
    icon: <UserPlusIcon className="h-5 w-5 inline-block mr-2" />,
  },
]

const SidebarComponent = ({ menuOpen, setMenuOpen }) => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768)
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  return (
    <motion.aside
      initial={{ x: isDesktop ? '100%' : '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: isDesktop ? '100%' : '-100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className={`fixed top-[4.5rem] ${
        isDesktop ? 'right-0' : 'left-0'
      } z-40 h-screen md:w-64 w-full bg-white shadow-xl p-8 border-white/20 border-l md:border-l md:border-white/20 border-r md:border-r-0`}
      role="dialog"
      aria-modal="true"
      style={{ display: menuOpen ? 'block' : 'none' }}
    >
      <nav className="flex flex-col space-y-8">
        {navItems.map(({ name, href, icon }) => (
          <Link
            key={name}
            href={href}
            className="flex items-center text-black text-md font-semibold hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white rounded transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            {icon}
            {name}
          </Link>
        ))}

        <hr className="border-t border-gray-200 my-6" />

        {/* Auth Links */}
        {authItems.map(({ name, href, icon }) => (
          <Link
            key={name}
            href={href}
            className="flex items-center text-black text-md font-semibold hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white rounded transition-colors duration-300"
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

export default SidebarComponent
