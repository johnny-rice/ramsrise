"use client"

import { type ReactNode, type MouseEvent } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface SmoothScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function SmoothScrollLink({ href, children, className }: SmoothScrollLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Only handle smooth scroll for anchor links
    if (!href.startsWith("#")) return

    e.preventDefault()
    
    const targetId = href.replace("#", "")
    const targetElement = targetId 
      ? document.getElementById(targetId)
      : document.documentElement

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <Link href={href} onClick={handleClick} className={cn(className)}>
      {children}
    </Link>
  )
}


