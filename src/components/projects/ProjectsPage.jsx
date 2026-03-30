import { projects } from '../../data/siteData'
import useRevealObserver from '../../hooks/useRevealObserver'
import Footer from '../layout/Footer'
import ProjectCard from './ProjectCard'

export default function ProjectsPage({ className }) {
  useRevealObserver('projects')

  return (
    <section className={className} id="page-projects">
      <div className="proj-header">
        <p className="sec-label reveal">✦ Launchpad</p>
        <h2 className="sec-title reveal d1">
          My <span className="pk">Projects</span>
        </h2>
      </div>

      <div className="proj-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <Footer />
    </section>
  )
}
