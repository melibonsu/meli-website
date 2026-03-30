import { useRef } from 'react'
import useStarfield from '../../hooks/useStarfield'

export default function StarfieldCanvas() {
  const canvasRef = useRef(null)
  useStarfield(canvasRef)

  return <canvas id="starfield" ref={canvasRef} />
}
