import React, { useRef, useState } from 'react'
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
  const [showMore, setShowMore] = useState(false)

  /**
   * French lorem description split for preview and full text
   */
  const shortDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.`
  const fullDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit amet at magna. Nullam scelerisque, nisl sit amet dictum ultricies, nisl erat egestas erat, a gravida libero orci nec justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer cursus erat non purus pulvinar, ac posuere elit aliquam. Sed id magna a elit pretium tincidunt. Aliquam erat volutpat.

Curabitur fringilla diam sit amet nisl suscipit, at convallis neque malesuada. Suspendisse potenti. Fusce vitae posuere nunc, sed porttitor sapien. Vivamus et velit ultricies, pretium metus id, facilisis lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nec justo cursus, blandit metus a, blandit lectus.`

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
      <div
        className="relative z-10 w-full max-w-7xl bg-white/95 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-300
                    flex flex-col gap-12"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold text-center uppercase tracking-widest"
        >
          Maison du Diamant
        </motion.h2>

        {/* Intro Section */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="space-y-6 text-center lg:text-left px-2 sm:px-0 max-w-lg"
          >
            <h3 className="text-3xl font-semibold uppercase text-black/90">
              Élégance intemporelle
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Depuis des générations, notre maison façonne des bijoux
              d'exception mêlant tradition et modernité. Chaque diamant est
              sélectionné avec la plus grande exigence.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Nous croyons que chaque bijou doit raconter une histoire – votre
              histoire – avec éclat et raffinement.
            </p>
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
              alt="Bijou de luxe"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
            />
          </motion.div>
        </div>

        {/* Big Description with toggle */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-4xl mx-auto text-center text-gray-800 text-lg leading-relaxed px-4 sm:px-0"
        >
          <p className={`transition-all duration-500 ease-in-out overflow-hidden${
            showMore ? 'max-h-[1000px]' : 'max-h-[6rem]'
          }`}>
            {showMore ? fullDescription : shortDescription}
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 text-gray-700 font-semibold hover:underline focus:outline-none"
            aria-expanded={showMore}
          >
            {showMore ? 'Afficher moins' : 'Afficher plus'}
          </button>
        </motion.div>

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
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.3 }}
              className="border border-black py-8 px-6 rounded-xl bg-white/95 backdrop-blur-md shadow-md hover:shadow-xl hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
            >
              <h4 className="text-xl sm:text-2xl font-bold mb-3 uppercase tracking-wider">
                {item.title}
              </h4>
              <p className="text-gray-700 text-sm sm:text-base hover:text-white">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-16 sm:mt-24 text-center px-2 sm:px-0"
        >
          <p className="text-lg sm:text-xl font-semibold mb-4 max-w-md mx-auto">
            Entrez dans l’univers exclusif de la haute joaillerie.
          </p>
          <button className="mt-4 px-10 py-4 uppercase border border-black font-semibold tracking-widest bg-white hover:bg-black hover:text-white transition-all duration-300 shadow-lg rounded-xl">
            Découvrir nos créations
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutComponent
