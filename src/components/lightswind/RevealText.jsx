import { useEffect, useRef } from "react"
import gsap from "gsap"

export const RevealText = ({ text }) => {
  const textRef = useRef(null)

  useEffect(() => {
    const words = textRef.current.querySelectorAll(".word")

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })

    tl.fromTo(
      words,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out",
      }
    )
      .to(words, {
        opacity: 0,
        y: -20,
        stagger: 0.08,
        duration: 0.4,
        delay: 1,
        ease: "power2.in",
      })

    return () => tl.kill()
  }, [])

  return (
    <div
      ref={textRef}
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="word"
          style={{
            marginRight: "8px",
            fontSize: "16px",
            fontWeight: 600,
            opacity: 0,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  )
}
