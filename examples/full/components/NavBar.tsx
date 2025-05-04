// components/NavBar.tsx
import { useState, useEffect } from 'react'

export const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      backgroundColor: `rgba(8, 15, 40, ${0.7 + (scrollPosition > 100 ? 0.1 : 0)})`,
      backdropFilter: 'blur(10px)'
    }}>
      {/* Navigation items */}
    </nav>
  )
}
