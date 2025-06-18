import AppLayout from '@/layouts/app-layout'
import { motion } from 'framer-motion'
import { Head } from '@inertiajs/react'
import { useForm } from '@inertiajs/react'
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

/**
 * 
 * @param count Génère un tableau de diamants aléatoires pour l’animation
 * @returns 
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

const RegisterPage = ({ auth }) => {

const Layout = getLayout(auth)
  

  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    post('/register') 
  }

  return (
    <Layout>
      <Head title="Inscription" />


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
            Créer un compte
          </motion.h2>

          {/* Nom complet */}
          <motion.div custom={1} variants={inputVariants} className="mb-6">
            <label htmlFor="name" className="block mb-2 text-black font-semibold">
              Nom complet
            </label>
            <input
              id="name"
              type="text"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-white text-black"
            />
            {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
          </motion.div>

          {/* Email */}
          <motion.div custom={2} variants={inputVariants} className="mb-6">
            <label htmlFor="email" className="block mb-2 text-black font-semibold">
              Adresse e-mail
            </label>
            <input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-white text-black"
            />
            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
          </motion.div>

            {/* Phone */}
          <motion.div custom={2} variants={inputVariants} className="mb-6">
            <label htmlFor="phone" className="block mb-2 text-black font-semibold">
              Phone
            </label>
            <input
              id="phone"
              type="phone"
              value={data.phone}
              onChange={(e) => setData('phone', e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-white text-black"
            />
            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
          </motion.div>


          {/* Mot de passe */}
          <motion.div custom={3} variants={inputVariants} className="mb-6">
            <label htmlFor="password" className="block mb-2 text-black font-semibold">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-white text-black"
            />
            {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
          </motion.div>

          {/* Confirmation */}
          <motion.div custom={4} variants={inputVariants} className="mb-8">
            <label htmlFor="password_confirmation" className="block mb-2 text-black font-semibold">
              Retaper le mot de passe
            </label>
            <input
              id="password_confirmation"
              type="password"
              value={data.password_confirmation}
              onChange={(e) => setData('password_confirmation', e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-white text-black"
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={processing}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full py-3 rounded-md bg-white text-black font-bold uppercase tracking-wider shadow-md"
          >
            {processing ? 'En cours...' : 'S’inscrire'}
          </motion.button>

          <motion.div className='flex flex-col w-full justify-center items-center md:gap-2 gap-1 overflow-hidden'>

            <motion.a href='/login' className='text-black md:mt-4 mt-2 whitespace-nowrap'>
              Vous avez déjà un compte !
            </motion.a>

          </motion.div>
          
        </motion.form>
      </section>
    </Layout>
  )
}

export default RegisterPage
