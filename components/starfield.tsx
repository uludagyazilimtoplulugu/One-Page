"use client"

import { useEffect, useRef } from "react"

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    const stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = []

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function createStars() {
      if (!canvas) return
      stars.length = 0
      const count = Math.floor((canvas.width * canvas.height) / 6000)
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.3 + 0.05,
          opacity: Math.random() * 0.8 + 0.2,
        })
      }
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const star of stars) {
        star.y -= star.speed
        if (star.y < 0) {
          star.y = canvas.height
          star.x = Math.random() * canvas.width
        }

        star.opacity += (Math.random() - 0.5) * 0.02
        star.opacity = Math.max(0.1, Math.min(0.9, star.opacity))

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    createStars()
    animate()

    window.addEventListener("resize", () => {
      resize()
      createStars()
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}
