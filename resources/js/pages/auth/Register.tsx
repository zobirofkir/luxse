import AppLayout from '@/layouts/app-layout'
import React, { useState } from 'react'
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

const Register = () => {
  const [photo, setPhoto] = useState(null)

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhoto(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <AppLayout>
      <Head title='Inscription'/>
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
            Create Account
          </motion.h2>

          {/* Profile Photo */}
          <motion.div custom={0} variants={inputVariants} className="mb-6 flex flex-col items-center">
            <label className="mb-3 text-white font-semibold cursor-pointer">
              {photo ? (
                <img
                  src={photo}
                  alt="Profile Preview"
                  className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-lg"
                />
              ) : (
                <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-semibold bg-black bg-opacity-20 hover:bg-opacity-40 transition cursor-pointer">
                  Upload Photo
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
            </label>
          </motion.div>

          {/* Full Name */}
          <motion.div custom={1} variants={inputVariants} className="mb-6">
            <label htmlFor="name" className="block mb-2 text-white font-semibold">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </motion.div>

          {/* Email */}
          <motion.div custom={2} variants={inputVariants} className="mb-6">
            <label htmlFor="email" className="block mb-2 text-white font-semibold">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="email@example.com"
              required
              className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </motion.div>

          {/* Password */}
          <motion.div custom={3} variants={inputVariants} className="mb-6">
            <label htmlFor="password" className="block mb-2 text-white font-semibold">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              required
              className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </motion.div>

          {/* Retype Password */}
          <motion.div custom={4} variants={inputVariants} className="mb-8">
            <label htmlFor="repassword" className="block mb-2 text-white font-semibold">
              Retype Password
            </label>
            <input
              id="repassword"
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
            Register
          </motion.button>
        </motion.form>
      </section>
    </AppLayout>
  )
}

export default Register
