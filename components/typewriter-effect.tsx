"use client"

import React, { useState, useEffect } from 'react'

interface TypewriterEffectProps {
  text: string;
  speed?: number; // milliseconds per character
  delay?: number; // delay before starting typing
  onTypingComplete?: () => void;
  className?: string;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  speed = 50,
  delay = 500,
  onTypingComplete,
  className,
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length && !typingComplete) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    } else if (currentIndex === text.length && !typingComplete) {
      setTypingComplete(true)
      if (onTypingComplete) {
        onTypingComplete()
      }
    }
  }, [currentIndex, text, speed, typingComplete, onTypingComplete])

  useEffect(() => {
    const startTypingTimeout = setTimeout(() => {
      setTypingComplete(false)
      setDisplayedText('')
      setCurrentIndex(0)
    }, delay)
    return () => clearTimeout(startTypingTimeout)
  }, [text, delay])

  return (
    <p className={`font-sans ${className}`}>
      {displayedText}
      <span className="animate-blink">|</span>
    </p>
  )
}
