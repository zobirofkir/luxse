import AppLayout from '@/layouts/app-layout'
import React from 'react'
import { motion } from 'framer-motion'
import { Head } from '@inertiajs/react'

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
}

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0px 0px 8px rgba(0,0,0,0.6)' },
  tap: { scale: 0.95 },
}

/**
 * Generates an array of random diamonds for animation
 */
const generateDiamonds = (count) =>
  Array.from({ length: count }).map(() => ({
    size: Math.random() * 15 + 10, 
    x: Math.random() * 100, 
    y: Math.random() * 100, 
    delay: Math.random() * 10,
    duration: 5 + Math.random() * 5,
    rotate: Math.random() * 360,
    opacity: 0.1 + Math.random() * 0.3,
  }))

const diamonds = generateDiamonds(15)

const LoginPage = () => {
  return (
    <AppLayout>
      <Head title="Connexion" />

      {/* Animated diamonds background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[9999]">
        {diamonds.map(({ size, x, y, delay, duration, rotate, opacity }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, rotate }}
            animate={{
              y: ['0%', '20%', '0%'],
              rotate: rotate + 360,
              opacity: [opacity, opacity * 0.5, opacity],
            }}
            transition={{
              delay,
              duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              width: size,
              height: size,
              top: `${y}%`,
              left: `${x}%`,
              position: 'absolute',
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid black`,
              filter: 'drop-shadow(0 0 1px white)',
              opacity,
            }}
          />
        ))}
      </div>

      <section className="min-h-screen flex items-center justify-center bg-white text-black px-4 relative z-10">
        <motion.form
          initial="hidden"
          animate="visible"
          className="max-w-md w-full bg-black bg-opacity-90 p-10 rounded-lg shadow-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl font-extrabold mb-8 text-white text-center tracking-wide"
          >
            Se connecter
          </motion.h2>

          {/* Email */}
          <motion.div custom={0} variants={inputVariants} className="mb-6">
            <label htmlFor="email" className="block mb-2 text-white font-semibold">
              Adresse e-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="email@exemple.com"
              required
              className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </motion.div>

          {/* Password */}
          <motion.div custom={1} variants={inputVariants} className="mb-8">
            <label htmlFor="password" className="block mb-2 text-white font-semibold">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              required
              className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </motion.div>

          <motion.button
            type="submit"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full py-3 rounded-md bg-white text-black font-bold uppercase tracking-wider shadow-md"
          >
            Connexion
          </motion.button>
        </motion.form>
      </section>
    </AppLayout>
  )
}

export default LoginPage
