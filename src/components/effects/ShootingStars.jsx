import { useEffect } from 'react'

export default function ShootingStars() {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div')
      star.className = 'shooting-star'
      star.style.cssText = `left:${Math.random() * 100}vw;top:${Math.random() * 45}vh;--ang:${Math.random() * 30 + 28}deg;`
      document.body.appendChild(star)
      window.setTimeout(() => star.remove(), 800)
    }

    const intervalId = window.setInterval(createStar, 4200)
    return () => window.clearInterval(intervalId)
  }, [])

  return null
}
