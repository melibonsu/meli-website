import { useEffect } from 'react'

export default function ClickParticles() {
  useEffect(() => {
    const colors = ['#ff2d8f', '#ff7ec4', '#ffd6ec', '#ff50a8', '#ffb3d9']

    const handleClick = (event) => {
      for (let index = 0; index < 9; index += 1) {
        const particle = document.createElement('div')
        particle.className = 'particle'

        const size = Math.random() * 6 + 3
        const angle = (index / 9) * Math.PI * 2
        const distance = Math.random() * 45 + 18
        const translateX = Math.cos(angle) * distance
        const translateY = Math.sin(angle) * distance
        const color = colors[Math.floor(Math.random() * colors.length)]

        particle.style.cssText = `
          width:${size}px;
          height:${size}px;
          left:${event.clientX}px;
          top:${event.clientY}px;
          background:${color};
          box-shadow:0 0 8px currentColor;
          transform:translate(calc(-50% + ${translateX}px),calc(-50% + ${translateY}px));
        `

        document.body.appendChild(particle)
        window.setTimeout(() => particle.remove(), 1050)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
