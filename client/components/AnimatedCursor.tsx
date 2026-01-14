import { useEffect, useRef } from "react";

export function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (cursorRef.current) {
        cursorRef.current.style.left = clientX + "px";
        cursorRef.current.style.top = clientY + "px";
      }

      if (glowRef.current) {
        glowRef.current.style.left = clientX + "px";
        glowRef.current.style.top = clientY + "px";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Outer glow aura */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-50 w-64 h-64 rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(0, 200, 255, 0.15) 0%, rgba(0, 200, 255, 0.05) 70%, transparent 100%)",
          filter: "blur(20px)",
          transition: "opacity 0.3s ease-out",
        }}
      />

      {/* Core cursor dot */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 w-2 h-2 rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          background: "rgba(0, 200, 255, 0.8)",
          boxShadow: "0 0 20px rgba(0, 200, 255, 0.6)",
        }}
      />
    </>
  );
}
