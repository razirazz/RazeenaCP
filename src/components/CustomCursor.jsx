import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const cursorRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  // Detect touch device
  useEffect(() => {
    const touch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(touch);
  }, []);

  // Track mouse
  useEffect(() => {
    if (isTouch) return;

    const move = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isTouch]);

  // Smooth animation loop
  useEffect(() => {
    if (isTouch) return;

    const speed = 0.15; // lower = smoother

    const animate = () => {
      current.current.x +=
        (mouse.current.x - current.current.x) * speed;
      current.current.y +=
        (mouse.current.y - current.current.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate(${current.current.x - 12}px, 
                    ${current.current.y - 12}px)
        `;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [isTouch]);

  return (
    <>
      {!isTouch && (
        <div
          ref={cursorRef}
          className="
            fixed pointer-events-none z-50
            w-6 h-6 rounded-full
            border
            mix-blend-difference
          "
          style={{
            borderColor: "var(--accent)",
            boxShadow: "0 0 20px var(--accent)"
          }}
        />
      )}
    </>
  );
}