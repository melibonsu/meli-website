import Spaceship from './Spaceship'

export default function OrbitAvatar() {
  return (
    <div className="spaceship-wrap">
      <div className="orbit-ring"><div className="orbit-dot" /></div>
      <div className="orbit-ring"><div className="orbit-dot" /></div>

      <div className="avatar-frame">
        <div className="avatar-placeholder" aria-label="Avatar placeholder">
          <img src = "/images/headshot1.jpg"></img>
        </div>
      </div>

      <Spaceship />
    </div>
  )
}
