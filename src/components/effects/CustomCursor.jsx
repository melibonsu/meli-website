import useCursor from '../../hooks/useCursor'

export default function CustomCursor() {
  const { position, ringPosition, isHovering } = useCursor()

  return (
    <>
      <div
        className={`cursor ${isHovering ? 'hov' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-ring ${isHovering ? 'hov' : ''}`}
        style={{ left: `${ringPosition.x}px`, top: `${ringPosition.y}px` }}
      />
    </>
  )
}
