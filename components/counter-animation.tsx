"use client"

import { useState, useEffect, useRef } from "react"

interface CounterAnimationProps {
  end: number
  duration?: number
  suffix?: string
}

export function CounterAnimation({ end, duration = 2000, suffix = "" }: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true

      let startTimestamp: number | null = null
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        const currentCount = Math.floor(progress * end)

        setCount(currentCount)

        if (progress < 1) {
          window.requestAnimationFrame(step)
        } else {
          setCount(end)
        }
      }

      window.requestAnimationFrame(step)
    }
  }, [isVisible, end, duration])

  return (
    <div ref={countRef}>
      {count}
      {suffix}
    </div>
  )
}
