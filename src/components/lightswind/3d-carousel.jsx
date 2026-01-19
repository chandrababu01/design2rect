import React, { useState } from "react";
import { useIsMobile } from "../../hooks/use-mobile";
import VideoModal from "./VideoModal";
import "./slider.css";

export default function CurvedVideoSlider({ items }) {
  const isMobile = useIsMobile();
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const cardWidth = isMobile ? 160 : 240;
  const cardHeight = isMobile ? 230 : 320;
  const gap = 24;

  const speedPerCard = isMobile ? 4.5 : 3;
  const duration = items.length * speedPerCard;

  return (
    <>
      <div
        className={`slider-wrapper ${activeVideo ? "paused" : ""}`}
        style={{
          height: 400,
          perspective: "2000px",
        }}
      >
        <div
          className="slider-track"
          style={{
            "--gap": `${gap}px`,
            "--duration": `${duration}s`,
          }}
        >
          {[...items, ...items].map((item, i) => {
            const offset = i - items.length;
            const isActive = activeIndex === i;

            return (
              <div
                key={i}
                className={`slider-card ${isActive ? "active" : ""}`}
                onMouseEnter={() => !isMobile && setActiveIndex(i)}
                onMouseLeave={() => !isMobile && setActiveIndex(null)}
                onClick={() => isMobile && setActiveIndex(i)}
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  backgroundImage: `url(${item.thumbnail})`,
                  transform: `
                    translateZ(${Math.abs(offset) * -18}px)
                    rotateY(${offset * -4}deg)
                  `,
                }}
              >
                <div
                  className="play-overlay"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideo(item.videoId);
                  }}
                >
                  ▶
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <VideoModal
        open={!!activeVideo}
        videoId={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
}
