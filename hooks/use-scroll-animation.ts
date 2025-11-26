"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function useScrollAnimation() {
  const sectionRefs = useRef<HTMLElement[]>([])

  useEffect(() => {
    if (typeof window === "undefined" || sectionRefs.current.length === 0) return

    // Wait for next frame to ensure all sections are registered
    const timer = setTimeout(() => {
      // Kill existing triggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

      // Animate cards in the Mission section with roll-in effect
      const missionCards = document.querySelectorAll('#about .grid > div')
      missionCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            rotateX: -25,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 60%",
              scrub: 1
            }
          }
        )
      })

      // Refresh ScrollTrigger
      ScrollTrigger.refresh()
    }, 100)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [sectionRefs.current.length])

  const addSection = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el)
    }
  }

  return { addSection }
}

