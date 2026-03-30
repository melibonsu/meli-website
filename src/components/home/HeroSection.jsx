import { useEffect, useRef } from 'react'
import { hero } from '../../data/siteData'
import OrbitAvatar from './OrbitAvatar'

export default function HeroSection({ onNavigate }) {
  const wrapRef = useRef(null)
  const shipRef = useRef(null)

  useEffect(() => {
    const handleMove = (event) => {
      const dx = (event.clientX / window.innerWidth - 0.5) * 30
      const dy = (event.clientY / window.innerHeight - 0.5) * 20

      if (wrapRef.current) {
        wrapRef.current.style.transform = `translate(${dx * 0.28}px, ${dy * 0.28}px)`
      }

      if (shipRef.current) {
        shipRef.current.style.transform = `translate(${dx * 0.6}px, ${dy * 0.6}px) rotate(-10deg)`
      }
    }

    document.addEventListener('mousemove', handleMove)
    return () => document.removeEventListener('mousemove', handleMove)
  }, [])

  useEffect(() => {
    const ship = document.querySelector('.ship-svg')
    shipRef.current = ship
  }, [])

  return (
    <div style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div className="hero-wrap" ref={wrapRef}>
        <OrbitAvatar />

        <h1 className="hero-name">
          {hero.firstName}
          <br />
          <span className="pk">{hero.lastName}</span>
        </h1>

        <p className="hero-sub">
          Senior at <em>UIUC</em> · Exploring the cosmos of code
        </p>

        <div className="hero-btns">
          <button type="button" className="btn btn-primary" onClick={() => onNavigate('about')}>
            About Me
          </button>
          <button type="button" className="btn btn-outline" onClick={() => onNavigate('projects')}>
            View Projects
          </button>
        </div>

        <div className="explore-hint" style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
          <div className="explore-line" />
          <span className="explore-txt">explore</span>
        </div>
      </div>
    </div>
  )
}
