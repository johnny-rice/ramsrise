"use client"

import { type ReactNode, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface ScrollSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export const ScrollSection = forwardRef<HTMLElement, ScrollSectionProps>(
  ({ children, className, id }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(className)}
      >
        {children}
      </section>
    )
  }
)

ScrollSection.displayName = "ScrollSection"

