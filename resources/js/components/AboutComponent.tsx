import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { aboutTranslation } from '@/translation/aboutTranslation'

function Diamond() {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.8
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} scale={2.5}>
      <octahedronGeometry args={[1, 0]} />
      <meshPhysicalMaterial
        color="#d4d4d8"
        roughness={0.1}
        metalness={1}
        clearcoat={1}
        clearcoatRoughness={0}
        reflectivity={1}
        transmission={1}
        thickness={2}
        envMapIntensity={2}
        ior={2.4}
        specularIntensity={1}
        opacity={0.8}
        transparent
      />
    </mesh>
  )
}

const AboutComponent = () => {
  const [language, setLanguage] = useState('fr')

  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLanguage')
    if (savedLang === 'fr' || savedLang === 'ar') {
      setLanguage(savedLang)
    }
  }, [])

  const t = aboutTranslation[language]

  return (
    <section className="relative text-black py-10 px-4 sm:px-6 md:px-10 overflow-hidden container mx-auto min-h-[700px] flex items-center justify-center">
      {/* Diamond Background */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden sm:block">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          style={{ height: '100%', width: '100%' }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Diamond />
          <OrbitControls enableZoom={false} enableRotate={false} />
        </Canvas>
      </div>

      {/* Content Container */}
      <div
        className="relative z-10 w-full container bg-white backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-300
                    flex flex-col gap-12"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold text-center uppercase tracking-widest"
        >
          {t.title}
        </motion.h2>

        {/* Intro Section */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className={`space-y-6 text-center lg:text-left px-2 sm:px-0 ${
              language === 'ar' ? 'font-sans text-right' : ''
            }`}
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            <h3 className="text-3xl font-semibold uppercase text-black/90 text-center">
              {t.subtitle}
            </h3>

            {t.paragraphs.map((para, idx) => (
              <p key={idx} className="text-lg leading-relaxed text-gray-700 text-center text-xl">
                {para}
              </p>
            ))}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="rounded-3xl overflow-hidden shadow-2xl max-w-md w-full mx-auto hover:scale-[1.04] transition-transform duration-500"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgS0GP1qnYpKH5WMfIMj4kZ5otFH7tpbFKw&s"
              alt={t.title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutComponent
