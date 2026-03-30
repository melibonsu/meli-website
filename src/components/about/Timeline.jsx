import { timelineItems } from '../../data/siteData'

export default function Timeline() {
  return (
    <div className="timeline reveal d4">
      {timelineItems.map((item) => (
        <div key={`${item.date}-${item.role}`} className="tl-item">
          <p className="tl-date">{item.date}</p>
          <p className="tl-role">{item.role}</p>
          <p className="tl-place">{item.place}</p>
          <p className="tl-desc">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}
