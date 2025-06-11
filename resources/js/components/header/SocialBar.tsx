import React from 'react'
import { Link } from '@inertiajs/react'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'

const socialMediaLinks = [
  { icon: <FaFacebookF />, url: 'https://facebook.com' },
  { icon: <FaTwitter />, url: 'https://twitter.com' },
  { icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
  { icon: <FaInstagram />, url: 'https://instagram.com' },
]

const SocialBar = () => (
  <div className="bg-black text-white text-sm py-1 border-b border-white/20">
    <div className="max-w-7xl mx-auto flex justify-end space-x-6 px-6">
      {socialMediaLinks.map(({ icon, url }, idx) => (
        <Link
          key={idx}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-300"
          aria-label={`Lien vers ${url.replace('https://', '')}`}
        >
          <span className="sr-only">{url.replace('https://', '')}</span>
          <div className="text-lg">{icon}</div>
        </Link>
      ))}
    </div>
  </div>
)

export default SocialBar
