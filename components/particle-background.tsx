"use client"

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

interface Particle {
  x: number
  y: number
  dx: number
  dy: number
  size: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const particles: Particle[] = []
    const particleCount = 50

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = 600
    }

    const createParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 1,
          dy: (Math.random() - 0.5) * 1,
          size: Math.random() * 2 + 1,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((particle) => {
        particle.x += particle.dx
        particle.y += particle.dy

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    animate()

    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 -z-10"
      style={{ height: '600px' }}
    />
  )
}

