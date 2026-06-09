import { useRef, useEffect } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + 'px'
        ref.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={ref}
      className="fixed w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_70%)] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 transition-[left,top] duration-[0.08s]"
    />
  )
}