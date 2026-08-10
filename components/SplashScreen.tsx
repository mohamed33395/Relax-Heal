'use client'

import { useState, useEffect } from 'react'

interface SplashScreenProps {
  onComplete?: () => void
  duration?: number
}

export default function SplashScreen({ onComplete, duration = 4000 }: SplashScreenProps) {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const interval = 50 // Update every 50ms
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + increment
      })
    }, interval)

    const splashTimer = setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => {
        onComplete?.()
      }, 500)
    }, duration)

    return () => {
      clearInterval(timer)
      clearTimeout(splashTimer)
    }
  }, [duration, onComplete])

  return (
    <div className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-transform duration-500 ease-in-out ${isExiting ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="relative z-10 flex flex-col items-center">
        {/* Green loading bar */}
        <div className="w-110 h-1 bg-gray-800 mb-25 overflow-hidden flex flex-row-reverse">
          <div
            className="h-full transition-all duration-50 ease-linear"
            style={{ width: `${loadingProgress}%`, backgroundColor: 'rgba(150, 215, 78, 1)' }}
          ></div>
        </div>

        {/* Dashed blue line above RELAX HEAL */}

        {/* RELAX HEAL text */}
        <h1 className="text-white text-7xl font-bold tracking-wider mb-2 text-center">
          RELAX HEAL
        </h1>

        {/* Dashed blue line below RELAX HEAL */}

        {/* RECOVERY IN MOTION text */}
        <p className="font-bold tracking-widest text-center" style={{ color: 'rgba(150, 215, 78, 1)', fontSize: '0.75rem' }}>
          RECOVERY IN MOTION
        </p>

        {/* Dashed blue line below RECOVERY IN MOTION */}
      </div>
    </div>
  )
}
