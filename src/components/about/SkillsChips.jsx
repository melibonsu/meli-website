import { skills } from '../../data/siteData'

export default function SkillsChips() {
  return (
    <div className="skills-wrap reveal d3">
      {skills.map((skill) => (
        <span key={skill} className="skill-chip">
          {skill}
        </span>
      ))}
    </div>
  )
}
