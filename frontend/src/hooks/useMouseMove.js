import { useState, useEffect } from 'react'

export function useMouseMove () {
  const [positionMinipoint, setPositionMinipoint] = useState({ x: 0, y: 0, scale: 1 })
  const [positionCirlepoint, setPositionCirlepoint] = useState({ x: 0, y: 0, scale: 1 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY, srcElement } = event
      if (srcElement.nodeName === 'BUTTON' || srcElement.nodeName === 'A') {
        setPositionMinipoint({ x: clientX, y: clientY, scale: 0.7 })
        setPositionCirlepoint({ x: clientX, y: clientY, scale: 1.4 })
        return
      }
      setPositionMinipoint({ x: clientX, y: clientY, scale: 1 })
      setPositionCirlepoint({ x: clientX, y: clientY, scale: 1 })
    }

    window.addEventListener('mousemove', handleMove)

    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])
  return { positionMinipoint, positionCirlepoint }
}
