import AppLayout from '@/layouts/app-layout'
import React from 'react'
import { motion } from 'framer-motion'
import { Head, useForm } from '@inertiajs/react'
import { getLayout } from '@/layouts/layout'

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

const LoginPage = ({ auth }) => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post('/login')
  }

  const Layout = getLayout(auth)
  

  return (
    <Layout>
      <Head title="Connexion" />

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
          className="max-w-md w-full bg-gray-100 bg-opacity-90 p-10 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl font-extrabold mb-8 text-black text-center tracking-wide"
          >
            Se connecter
          </motion.h2>

          {/* Email */}
          <motion.div custom={0} variants={inputVariants} className="mb-6">
            <label htmlFor="email" className="block mb-2 text-black font-semibold">
              Adresse e-mail
            </label>
            <input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              required
              placeholder="email@exemple.com"
              className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            />
            {errors.email && <div className="text-red-500 mt-1 text-sm">{errors.email}</div>}
          </motion.div>

          {/* Password */}
          <motion.div custom={1} variants={inputVariants} className="mb-8">
            <label htmlFor="password" className="block mb-2 text-black font-semibold">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              required
              placeholder="********"
              className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            />
            {errors.password && <div className="text-red-500 mt-1 text-sm">{errors.password}</div>}
          </motion.div>

          <motion.button
            type="submit"
            disabled={processing}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full py-3 rounded-md bg-white text-black font-bold uppercase tracking-wider shadow-md disabled:opacity-50"
          >
            {processing ? 'Connexion...' : 'Connexion'}
          </motion.button>

          <motion.div className='flex flex-col w-full justify-center items-center md:gap-2 gap-1 overflow-hidden'>

            <motion.p className='text-black md:mt-4 mt-2 whitespace-nowrap'>
              Mot de passe oublié !
            </motion.p>

            <motion.p className='text-black md:mt-4 mt-2 whitespace-nowrap'>
              Vous n'avez pas de compte ?
            </motion.p>

          </motion.div>
        </motion.form>
      </section>
    </Layout>
  )
}

export default LoginPage
