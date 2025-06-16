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

const Login = () => {
  return (
    <AppLayout>
      <Head title="Connexion" />

      <section className="min-h-screen flex items-center justify-center bg-white text-black px-4">
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

export default Login
