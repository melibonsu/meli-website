export default function PlanetVisual() {
  return (
    <div className="about-visual reveal d2">
      <div className="p-ring" />
      <div className="planet" />
      <div className="float-star" style={{ width: '6px', height: '6px', top: '8%', left: '18%', animationDelay: '.3s' }} />
      <div className="float-star" style={{ width: '4px', height: '4px', top: '18%', right: '12%', animationDelay: '.8s' }} />
      <div className="float-star" style={{ width: '5px', height: '5px', bottom: '18%', left: '12%', animationDelay: '.5s' }} />
      <div className="float-star" style={{ width: '3px', height: '3px', bottom: '10%', right: '22%', animationDelay: '1.1s' }} />
      <div className="float-star" style={{ width: '4px', height: '4px', top: '52%', left: '4%', animationDelay: '.2s' }} />
    </div>
  )
}
