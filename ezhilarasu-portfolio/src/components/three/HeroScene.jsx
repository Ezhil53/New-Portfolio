import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ACCENT = '#c6f432'

function Shape({ interactive }) {
  const tilt = useRef(null)
  const spin = useRef(null)
  const pointer = useRef({ x: 0, y: 0 })

  const { edges, points } = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.6, 1)
    const edges = new THREE.EdgesGeometry(geo)
    const pos = geo.getAttribute('position')
    const seen = new Map()
    for (let i = 0; i < pos.count; i++) {
      const v = new THREE.Vector3().fromBufferAttribute(pos, i)
      seen.set(`${v.x.toFixed(3)},${v.y.toFixed(3)},${v.z.toFixed(3)}`, v)
    }
    // Highlight a handful of vertices with the accent colour.
    const points = [...seen.values()].filter((_, i) => i % 5 === 0)
    geo.dispose()
    return { edges, points }
  }, [])

  useEffect(() => {
    if (!interactive) return
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [interactive])

  useFrame((_, delta) => {
    spin.current.rotation.y += delta * 0.15
    spin.current.rotation.x += delta * 0.04
    const t = tilt.current
    t.rotation.x = THREE.MathUtils.lerp(t.rotation.x, pointer.current.y * 0.3, 0.05)
    t.rotation.y = THREE.MathUtils.lerp(t.rotation.y, pointer.current.x * 0.4, 0.05)
  })

  return (
    <group ref={tilt}>
      <group ref={spin}>
        <lineSegments geometry={edges}>
          <lineBasicMaterial color="#fafafa" transparent opacity={0.5} />
        </lineSegments>
        {points.map((p, i) => (
          <mesh key={i} position={p}>
            <sphereGeometry args={[0.045, 10, 10]} />
            <meshBasicMaterial color={ACCENT} />
          </mesh>
        ))}
      </group>
    </group>
  )
}

export default function HeroScene({ active }) {
  const interactive = useMemo(() => window.matchMedia('(pointer: fine)').matches, [])
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      frameloop={active ? 'always' : 'never'}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
    >
      <Shape interactive={interactive} />
    </Canvas>
  )
}
