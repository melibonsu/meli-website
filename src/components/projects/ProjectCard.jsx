export default function ProjectCard({ project }) {
  return (
    <article className={`proj-card reveal ${project.delayClass}`}>
      <div className="card-icon">{project.icon}</div>
      <h3 className="card-title">{project.title}</h3>
      <p className="card-desc">{project.desc}</p>
      <div className="card-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="card-tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
