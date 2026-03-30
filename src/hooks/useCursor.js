import { useEffect, useState } from 'react'

export default function useCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMouse = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    document.addEventListener('mousemove', updateMouse)
    return () => document.removeEventListener('mousemove', updateMouse)
  }, [])

  useEffect(() => {
    let animationFrameId

    const animateRing = () => {
      setRingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.12,
        y: prev.y + (position.y - prev.y) * 0.12,
      }))
      animationFrameId = window.requestAnimationFrame(animateRing)
    }

    animationFrameId = window.requestAnimationFrame(animateRing)
    return () => window.cancelAnimationFrame(animationFrameId)
  }, [position])

  useEffect(() => {
    const selector = 'a, button, .proj-card, .skill-chip, .btn, .icon-btn, .nav-link, .nav-logo'

    const handleEnter = () => setIsHovering(true)
    const handleLeave = () => setIsHovering(false)
    const elements = document.querySelectorAll(selector)

    elements.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  })

  return { position, ringPosition, isHovering }
}
