import { useEffect } from "react";
import { gsap } from "gsap";
import "../index.css";

const Cursor = () => {
  useEffect(() => {
    const bigBall = document.querySelector(".cursor__ball--big");
    const smallBall = document.querySelector(".cursor__ball--small");
    const hoverables = document.querySelectorAll(".hoverable");
    let mouseX = 0, mouseY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    
      // Adjust the position based on the size of the cursor
      gsap.to(bigBall, 0.4, {
        x: mouseX - 15, // 15 is half the size of the big cursor (radius of the circle)
        y: mouseY - 15, // Same for the vertical position
      });
    
      gsap.to(smallBall, 0.1, {
        x: mouseX - 5, // Small cursor will have a smaller offset (adjust as needed)
        y: mouseY - 1, // Same as above
      });
    };

    // Hover effects
    const onMouseHover = () =>
      gsap.to(bigBall, {
        scale: 4,
        duration: 0.3,
      });

    const onMouseHoverOut = () =>
      gsap.to(bigBall, {
        scale: 1,
        duration: 0.3,
      });

    // Add event listeners
    document.addEventListener("mousemove", onMouseMove);
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onMouseHover);
      el.addEventListener("mouseleave", onMouseHoverOut);
    });

    // Clean up
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseHover);
        el.removeEventListener("mouseleave", onMouseHoverOut);
      });
    };
  }, []);

  return (
    <div className="cursor">
      <div className="cursor__ball cursor__ball--big">
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>
      <div className="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
