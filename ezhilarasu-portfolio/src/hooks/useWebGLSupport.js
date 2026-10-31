import { useState } from 'react'

function detectWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl2') || canvas.getContext('webgl')),
    )
  } catch {
    return false
  }
}

export function useWebGLSupport() {
  const [supported] = useState(detectWebGL)
  return supported
}
