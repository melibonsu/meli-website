export default function Spaceship() {
  return (
    <svg className="ship-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="38" rx="18" ry="28" fill="url(#sg1)" />
      <ellipse cx="40" cy="50" rx="28" ry="10" fill="url(#sg2)" opacity=".85" />
      <ellipse cx="40" cy="38" rx="10" ry="14" fill="url(#sg3)" opacity=".65" />
      <circle cx="40" cy="32" r="7" fill="#ffd6ec" opacity=".45" />
      <ellipse cx="40" cy="68" rx="6" ry="10" fill="url(#sg4)" opacity=".8" />
      <defs>
        <radialGradient id="sg1" cx="40%" cy="30%" r="60%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff7ec4" />
          <stop offset="100%" stopColor="#8b0054" />
        </radialGradient>
        <radialGradient id="sg2" cx="50%" cy="50%" r="60%" gradientUnits="userSpaceOnUse" fx="40" fy="50">
          <stop offset="0%" stopColor="#ff2d8f" stopOpacity=".9" />
          <stop offset="100%" stopColor="#2d0020" stopOpacity=".65" />
        </radialGradient>
        <radialGradient id="sg3" cx="50%" cy="30%" r="60%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffd6ec" stopOpacity=".55" />
          <stop offset="100%" stopColor="#ff2d8f" stopOpacity=".18" />
        </radialGradient>
        <linearGradient id="sg4" x1="40" y1="58" x2="40" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff50a8" stopOpacity=".9" />
          <stop offset="100%" stopColor="#ff2d8f" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
