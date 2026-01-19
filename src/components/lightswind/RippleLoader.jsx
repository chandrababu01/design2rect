import React from "react"
import { motion } from "framer-motion"

const RippleLoader = ({ size = 280, duration = 2 }) => {
  const layers = Array.from({ length: 6 }, (_, i) => ({
    inset: `${45 - i * 7}%`,
    delay: i * 0.15,
    opacity: 1 - i * 0.12,
  }))

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {layers.map((layer, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            inset: layer.inset,
            background: "rgba(200,200,200,0.4)",
            boxShadow:
              "inset 6px 6px 12px rgba(0,0,0,0.15), inset -6px -6px 12px rgba(255,255,255,0.9)",
            opacity: layer.opacity,
          }}
          animate={{ scale: [1, 1.25, 1] }}
          transition={{
            duration,
            repeat: Infinity,
            delay: layer.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* center triangle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "14px solid transparent",
            borderRight: "14px solid transparent",
            borderBottom: "22px solid black",
          }}
        />
      </div>
    </div>
  )
}

export default RippleLoader
