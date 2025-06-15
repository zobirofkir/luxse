import React from 'react'

const BandComponent = () => {
  const messages = [
    '🔥 Livraison gratuite à partir de 499 MAD',
    '⚡ Offres exclusives chaque semaine',
    '🎁 Cadeaux pour chaque commande de plus de 999 MAD',
    '🕒 Service client 7j/7',
    '🚚 Livraison rapide partout au Maroc',
  ]

  return (
    <div className="relative w-full overflow-hidden bg-black text-white py-2 z-50 border-b border-gray-800">
      <div className="whitespace-nowrap animate-scroll flex gap-16 px-4">
        {messages.concat(messages).map((msg, idx) => (
          <span
            key={idx}
            className="text-sm md:text-base font-medium tracking-wide opacity-90 hover:opacity-100 transition-opacity"
          >
            {msg}
          </span>
        ))}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default BandComponent
