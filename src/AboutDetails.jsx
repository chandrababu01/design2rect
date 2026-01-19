import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/dist/Draggable";
import { InertiaPlugin } from "gsap/dist/InertiaPlugin";

gsap.registerPlugin(Draggable, InertiaPlugin);



// gsap.registerPlugin(Draggable, InertiaPlugin);

export default function AboutDetails() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const items = itemsRef.current;

    // PAGE LOAD → TOP TO BOTTOM ANIMATION
    gsap.from(items, {
      y: -250,
      opacity: 0,
      rotate: -20,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.15,
      onComplete: enableDrag,
    });

    function enableDrag() {
      items.forEach((item) => {
        Draggable.create(item, {
          type: "x,y",
          bounds: ".about-image-wrapper",
          inertia: true,
          cursor: "grab",
          activeCursor: "grabbing",

          onPress() {
            // CLICK / PRESS EFFECT
            gsap.to(item, {
              scale: 1.08,
              zIndex: 10,
              duration: 0.2,
              ease: "power2.out",
            });
          },

          onRelease() {
            // MAGNETIC SNAP BACK
            gsap.to(item, {
              scale: 1,
              zIndex: 1,
              duration: 0.5,
              ease: "elastic.out(1, 0.4)",
            });
          },
        });
      });
    }
  }, []);

  const labels = [
    "Designers",
    "Creators",
    "Innovators",
    "Visionaries",
    "Developers",
    "Thinkers",
  ];

  return (
    <div className="about-details-section">
      <div className="about-image">
        <div className="about-image-wrapper">
          <div className="star"></div>

          <div className="about-image-front">
            {labels.map((text, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className={`about-image-front-inner item-${index}`}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
