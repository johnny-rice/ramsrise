"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const layer1Ref = useRef<SVGGElement>(null)
  const layer2Ref = useRef<SVGGElement>(null)
  const layer3Ref = useRef<SVGGElement>(null)
  const circlesRef = useRef<SVGGElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const xPercent = (clientX / innerWidth - 0.5) * 2
      const yPercent = (clientY / innerHeight - 0.5) * 2

      // Parallax effect on different layers
      gsap.to(layer1Ref.current, {
        x: xPercent * 30,
        y: yPercent * 30,
        duration: 1.2,
        ease: "power2.out",
      })

      gsap.to(layer2Ref.current, {
        x: xPercent * 20,
        y: yPercent * 20,
        duration: 1.5,
        ease: "power2.out",
      })

      gsap.to(layer3Ref.current, {
        x: xPercent * 10,
        y: yPercent * 10,
        duration: 1.8,
        ease: "power2.out",
      })

      gsap.to(circlesRef.current, {
        x: xPercent * -15,
        y: yPercent * -15,
        duration: 2,
        ease: "power2.out",
      })
    }

    const handleScroll = () => {
      if (!containerRef.current) return

      const scrollY = window.scrollY
      const scrollPercent = scrollY / window.innerHeight

      // Parallax based on scroll
      gsap.to(layer1Ref.current, {
        y: scrollPercent * 150,
        duration: 0.3,
      })

      gsap.to(layer2Ref.current, {
        y: scrollPercent * 100,
        duration: 0.3,
      })

      gsap.to(layer3Ref.current, {
        y: scrollPercent * 50,
        duration: 0.3,
      })

      gsap.to(circlesRef.current, {
        y: scrollPercent * 200,
        opacity: 1 - scrollPercent * 1.5,
        duration: 0.3,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    // Initial animation
    gsap.from(layer1Ref.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      ease: "power3.out",
    })

    gsap.from(layer2Ref.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1.5,
      delay: 0.2,
      ease: "power3.out",
    })

    gsap.from(layer3Ref.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1.5,
      delay: 0.4,
      ease: "power3.out",
    })

    gsap.from(circlesRef.current?.children || [], {
      opacity: 0,
      scale: 0,
      duration: 1,
      delay: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
    })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 1920 1080"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hornGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="hornGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="hornGradient3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="circleGradient">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Community circles - representing unity */}
        <g ref={circlesRef}>
          <circle cx="300" cy="200" r="80" fill="url(#circleGradient)" />
          <circle cx="500" cy="150" r="60" fill="url(#circleGradient)" />
          <circle cx="700" cy="180" r="70" fill="url(#circleGradient)" />
          <circle cx="1400" cy="220" r="90" fill="url(#circleGradient)" />
          <circle cx="1600" cy="160" r="65" fill="url(#circleGradient)" />
          <circle cx="400" cy="850" r="100" fill="url(#circleGradient)" />
          <circle cx="1500" cy="900" r="85" fill="url(#circleGradient)" />
        </g>

        {/* Layer 3: Background horn (right) */}
        <g ref={layer3Ref}>
          <path
            d="M 1300 1080 Q 1350 900, 1380 750 Q 1400 600, 1450 500 Q 1500 400, 1600 350 Q 1700 300, 1800 320 Q 1850 330, 1900 380"
            stroke="url(#hornGradient3)"
            strokeWidth="40"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M 1380 750 Q 1420 720, 1480 700 Q 1540 680, 1600 680 Q 1660 680, 1700 700"
            stroke="url(#hornGradient3)"
            strokeWidth="25"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
        </g>

        {/* Layer 2: Middle horn (left) */}
        <g ref={layer2Ref}>
          <path
            d="M 600 1080 Q 550 900, 520 750 Q 500 600, 450 500 Q 400 400, 300 350 Q 200 300, 100 320 Q 50 330, 0 380"
            stroke="url(#hornGradient2)"
            strokeWidth="45"
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M 520 750 Q 480 720, 420 700 Q 360 680, 300 680 Q 240 680, 200 700"
            stroke="url(#hornGradient2)"
            strokeWidth="28"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>

        {/* Layer 1: Front central element - rising arrows/horns */}
        <g ref={layer1Ref}>
          {/* Central rising horn/arrow */}
          <path
            d="M 960 1080 L 960 400 Q 960 300, 1020 250 Q 1050 225, 1100 240"
            stroke="url(#hornGradient1)"
            strokeWidth="50"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M 960 1080 L 960 400 Q 960 300, 900 250 Q 870 225, 820 240"
            stroke="url(#hornGradient1)"
            strokeWidth="50"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Arrow tip forming a V shape (like horns coming together) */}
          <path
            d="M 960 350 L 1050 200 L 1100 240"
            stroke="url(#hornGradient1)"
            strokeWidth="35"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />
          <path
            d="M 960 350 L 870 200 L 820 240"
            stroke="url(#hornGradient1)"
            strokeWidth="35"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />

          {/* Additional rising lines suggesting upward movement */}
          <path
            d="M 760 1080 L 800 600 Q 820 450, 850 400"
            stroke="url(#hornGradient1)"
            strokeWidth="25"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M 1160 1080 L 1120 600 Q 1100 450, 1070 400"
            stroke="url(#hornGradient1)"
            strokeWidth="25"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Connecting arc at the top - unity */}
          <path
            d="M 820 240 Q 960 150, 1100 240"
            stroke="url(#hornGradient1)"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />
        </g>

        {/* Decorative dots representing community members */}
        <g opacity="0.5">
          <circle cx="960" cy="500" r="8" fill="#ef4444" />
          <circle cx="900" cy="550" r="6" fill="#ef4444" />
          <circle cx="1020" cy="550" r="6" fill="#ef4444" />
          <circle cx="850" cy="650" r="7" fill="#f97316" />
          <circle cx="1070" cy="650" r="7" fill="#f97316" />
          <circle cx="800" cy="750" r="5" fill="#f59e0b" />
          <circle cx="1120" cy="750" r="5" fill="#f59e0b" />
        </g>
      </svg>
    </div>
  )
}

