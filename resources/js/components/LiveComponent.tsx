import React, { useEffect, useState } from 'react'
import { GiftIcon } from '@heroicons/react/24/outline'

const LiveComponent = () => {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const targetTime = new Date()
    targetTime.setHours(23, 59, 59, 999)

    const interval = setInterval(() => {
      const now = new Date()
      const diff = targetTime - now

      if (diff <= 0) {
        setTimeLeft('00:00:00')
        clearInterval(interval)
        return
      }

      const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0')
      const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0')
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0')

      setTimeLeft(`${hours}:${minutes}:${seconds}`)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-black text-white py-3 px-6 text-sm md:text-base font-medium flex items-center justify-center gap-3 shadow-md rounded-md mx-4 my-6 border border-white/10">
      <GiftIcon className="w-5 h-5 text-white" />
      <span className="text-white text-xl text-center ">
        🎁 Offre spéciale du jour : <span className="font-bold">-30%</span> jusqu’à minuit
      </span>
      <span className="bg-white text-black px-2 py-0.5 rounded font-mono tracking-wider text-sm text-center">
        ⏱ {timeLeft}
      </span>
    </div>
  )
}

export default LiveComponent
