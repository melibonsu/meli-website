import { aboutContent } from '../../data/siteData'
import useRevealObserver from '../../hooks/useRevealObserver'
import Footer from '../layout/Footer'
import SkillsChips from './SkillsChips'
import Timeline from './Timeline'
import PlanetVisual from './PlanetVisual'

export default function AboutPage({ className }) {
  useRevealObserver('about')

  return (
    <section className={className} id="page-about">
      <div className="about-inner">
        <div className="about-top">
          <p className="sec-label reveal">{aboutContent.label}</p>

          <h2 className="sec-title reveal d1">
            About <span className="pk">Me</span>
          </h2>

          {aboutContent.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`about-text reveal ${index < 2 ? 'd2' : ''}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="about-planet">
          <PlanetVisual />
        </div>

        <div className="about-skills">
          <SkillsChips />
        </div>

        <div className="about-timeline">
          <Timeline />
        </div>
      </div>

      <Footer />
    </section>
  )
}
