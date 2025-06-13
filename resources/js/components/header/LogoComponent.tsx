import React from 'react'
import { Link } from '@inertiajs/react'
import Logo from '@/assets/logo/logo.jpg'

const LogoComponentComponent = () => (
  <Link href="/" className="flex items-center select-none">
    <img
      src={Logo}
      alt="Logo Oudghti"
      className="md:h-15 h-12 md:w-15 w-12 rounded-full object-cover"
      draggable={false}
    />
  </Link>
)

export default LogoComponentComponent
