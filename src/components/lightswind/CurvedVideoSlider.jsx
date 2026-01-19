import React, { useRef, useState, useLayoutEffect } from "react";
import { useIsMobile } from "../../hooks/use-mobile";
import VideoModal from "./VideoModal";
import "./slider.css";

export default function CurvedVideoSlider({ items }) {
  
  const isMobile = useIsMobile();
  const trackRef = useRef(null);

  const [activeVideo, setActiveVideo] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [trackWidth, setTrackWidth] = useState(0);

  const cardWidth = isMobile ? 160 : 240;
  const cardHeight = isMobile ? 230 : 320;
  const gap = 24;

  const speedPerPixel = isMobile ? 0.018 : 0.012;
  const isPaused = activeVideo || (!isMobile && isHovering);

  useLayoutEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2);
    }
  }, [items, cardWidth, gap]);

  return (
    <>
      <div
        className={`slider-wrapper ${isPaused ? "paused" : ""}`}
        style={{ height: 400 }}
        onMouseEnter={() => !isMobile && setIsHovering(true)}
        onMouseLeave={() => !isMobile && setIsHovering(false)}
      >
        <div
          ref={trackRef}
          className="slider-track"
          style={{
            "--gap": `${gap}px`,
            "--distance": `${trackWidth}px`,
            "--duration": `${trackWidth * speedPerPixel}s`,
            "--start-offset": `calc(${trackWidth / 2}px - 50vw)`
          }}
        >
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className={`slider-card ${activeIndex === i ? "active" : ""}`}
              style={{
                width: cardWidth,
                height: cardHeight,
                backgroundImage: `url(${item.thumbnail})`,
              }}
              onMouseEnter={() => !isMobile && setActiveIndex(i)}
              onMouseLeave={() => !isMobile && setActiveIndex(null)}
              onClick={() => isMobile && setActiveIndex(i)}
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
          ))}
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
