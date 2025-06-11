import React from 'react'
import { Link } from '@inertiajs/react'
import Logo from '@/assets/logo/logo.jpg'

const LogoComponent = () => (
  <Link href="/" className="flex items-center select-none">
    <img
      src={Logo}
      alt="Logo Oudghti"
      className="h-15 w-15 rounded-full object-cover"
      draggable={false}
    />
  </Link>
)

export default LogoComponent
