import { useMouseMove } from '../hooks/useMouseMove'

export function Mousefloow () {
  const { positionMinipoint, positionCirlepoint } = useMouseMove()
  return (
    <>
      <div style={{
        zIndex: 9999,
        display: 'block',
        position: 'fixed',
        borderRadius: '50%',
        pointerEvents: 'none',
        width: 8,
        height: 8,
        backgroundColor: 'rgb(0, 210, 215)',
        transition: 'transform 0.15s',
        willChange: 'transform',
        transform: `translate(${positionMinipoint.x}px, ${positionMinipoint.y}px) scale(${positionMinipoint.scale})`,
        top: -2,
        left: -2
      }}
      />
      <div
        className='aroundCircle' style={{
          zIndex: '9999',
          display: 'block',
          position: 'fixed',
          borderRadius: '50%',
          width: 44,
          height: 44,
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          pointerEvents: 'none',
          transition: 'transform 0.25s',
          transform: `translate(${positionCirlepoint.x}px, ${positionCirlepoint.y}px) scale(${positionCirlepoint.scale})`,
          top: -20.5,
          left: -20.5
        }}
      />
    </>
  )
}
