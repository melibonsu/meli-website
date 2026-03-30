import { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import ProjectsPage from './components/projects/ProjectsPage'
import CustomCursor from './components/effects/CustomCursor'
import StarfieldCanvas from './components/effects/StarfieldCanvas'
import Nebula from './components/effects/Nebula'
import WipeTransition from './components/effects/WipeTransition'
import ShootingStars from './components/effects/ShootingStars'
import ClickParticles from './components/effects/ClickParticles'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [displayedPage, setDisplayedPage] = useState('home')
  const [isWiping, setIsWiping] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  const navigate = (page) => {
    if (page === currentPage) return
    setIsWiping(true)
    setIsExiting(true)

    window.setTimeout(() => {
      setCurrentPage(page)
      setDisplayedPage(page)
      setIsExiting(false)
      window.scrollTo({ top: 0, behavior: 'instant' })
      window.setTimeout(() => setIsWiping(false), 80)
    }, 260)
  }

  useEffect(() => {
    document.body.dataset.page = displayedPage
  }, [displayedPage])

  const pageClassName = `page active ${isExiting ? 'exit' : ''}`

  return (
    <>
      <StarfieldCanvas />
      <Nebula />
      <WipeTransition active={isWiping} />
      <CustomCursor />
      <ClickParticles />
      <ShootingStars />

      <Navbar currentPage={currentPage} onNavigate={navigate} />

      {displayedPage === 'home' && <HomePage className={pageClassName} onNavigate={navigate} />}
      {displayedPage === 'about' && <AboutPage className={pageClassName} />}
      {displayedPage === 'projects' && <ProjectsPage className={pageClassName} />}
    </>
  )
}
