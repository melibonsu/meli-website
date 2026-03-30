import { useEffect } from 'react'

export default function useStarfield(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const context = canvas.getContext('2d')
    let stars = []
    let animationFrameId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initStars = () => {
      stars = Array.from({ length: 220 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.7 + 0.25,
        dx: (Math.random() - 0.5) * 0.11,
        dy: (Math.random() - 0.5) * 0.07,
        tp: Math.random() * Math.PI * 2,
        ts: Math.random() * 0.018 + 0.004,
      }))
    }

    const drawStars = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        star.tp += star.ts
        const alpha = 0.3 + 0.7 * Math.abs(Math.sin(star.tp))
        const size = star.r * (0.7 + 0.3 * Math.abs(Math.sin(star.tp)))
        const pink = Math.sin(star.tp * 0.5) > 0.62

        context.shadowBlur = pink ? 9 : 4
        context.shadowColor = pink ? '#ff2d8f' : 'rgba(255,240,248,.5)'
        context.fillStyle = pink
          ? `rgba(255,126,196,${alpha})`
          : `rgba(255,240,248,${alpha})`

        context.beginPath()
        context.arc(star.x, star.y, size, 0, Math.PI * 2)
        context.fill()
        context.shadowBlur = 0

        star.x += star.dx
        star.y += star.dy

        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0
      })

      animationFrameId = window.requestAnimationFrame(drawStars)
    }

    resize()
    initStars()
    drawStars()

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [canvasRef])
}
