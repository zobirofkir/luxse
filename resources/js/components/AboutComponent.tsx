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
            className="space-y-6 text-center lg:text-left px-2 sm:px-0"
          >
            <h3 className="text-3xl font-semibold uppercase text-black/90 text-center">
              Élégance intemporelle
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 text-center">
              Depuis des générations, notre maison façonne des bijoux
              d'exception mêlant tradition et modernité. Chaque diamant est
              sélectionné avec la plus grande exigence.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 text-center">
              Nous croyons que chaque bijou doit raconter une histoire – votre
              histoire – avec éclat et raffinement.
            </p>

            <h3 className="text-3xl font-semibold uppercase text-black/90 text-center">
              Second description
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur minima distinctio illum corrupti praesentium voluptate labore incidunt beatae nulla quibusdam, mollitia, deserunt fugit magnam suscipit neque sit ratione doloribus.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestias adipisci labore, incidunt consequuntur debitis. Ad suscipit sapiente magni quia?
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

      </div>
    </section>
  )
}

export default AboutComponent
