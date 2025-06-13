import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

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
  return (
    <section className="relative text-black py-20 px-4 sm:px-6 md:px-10 overflow-hidden container mx-auto min-h-[700px] flex items-center justify-center">
      {/* Diamond Background - hidden on small screens for clarity and perf */}
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
      <div className="relative z-10 w-full max-w-7xl bg-white/90 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-300
                      flex flex-col sm:flex-col md:flex-col lg:flex-col
                      ">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl sm:text-5xl font-extrabold text-center uppercase mb-12 sm:mb-16 tracking-widest"
        >
          Maison du Diamant
        </motion.h2>

        {/* Intro Section */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-5 text-center lg:text-left px-2 sm:px-0"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold uppercase text-black/90">
              Élégance intemporelle
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 max-w-md mx-auto lg:mx-0">
              Depuis des générations, notre maison façonne des bijoux d'exception mêlant tradition et modernité. Chaque diamant est sélectionné avec la plus grande exigence.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 max-w-md mx-auto lg:mx-0">
              Nous croyons que chaque bijou doit raconter une histoire – votre histoire – avec éclat et raffinement.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg max-w-md w-full mx-auto"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgS0GP1qnYpKH5WMfIMj4kZ5otFH7tpbFKw&s"
              alt="Bijou de luxe"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
            />
          </motion.div>
        </div>

        {/* Values Section - stacked on mobile, grid on desktop */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4 sm:px-0">
          {[
            {
              title: 'Savoir-faire',
              desc: 'Un héritage artisanal transmis avec passion.',
            },
            {
              title: 'Pureté',
              desc: 'Des diamants certifiés, d’une clarté exceptionnelle.',
            },
            {
              title: 'Engagement',
              desc: 'Une éthique respectueuse de l’humain et de la nature.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + idx * 0.2 }}
              className="border border-black py-8 px-6 rounded-xl bg-white/90 backdrop-blur-md shadow-md hover:shadow-xl hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
            >
              <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 uppercase tracking-wider">
                {item.title}
              </h4>
              <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 sm:mt-24 text-center px-2 sm:px-0"
        >
          <p className="text-lg sm:text-xl font-medium mb-4 max-w-md mx-auto">
            Entrez dans l’univers exclusif de la haute joaillerie.
          </p>
          <button className="mt-4 px-8 sm:px-10 py-3 sm:py-4 uppercase border border-black font-semibold tracking-widest bg-white hover:bg-black hover:text-white transition-all duration-300 shadow-md rounded-lg">
            Découvrir nos créations
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutComponent
