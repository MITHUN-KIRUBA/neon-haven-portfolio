import { useEffect, useRef, useState } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

export function EnhancedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<CursorPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const pos = { x: clientX, y: clientY };
      setMousePos(pos);

      // Update cursor position with smooth trailing
      if (cursorRef.current) {
        cursorRef.current.style.left = clientX + "px";
        cursorRef.current.style.top = clientY + "px";
      }

      // Update glow with slight delay for trailing effect
      if (glowRef.current) {
        glowRef.current.style.left = clientX + "px";
        glowRef.current.style.top = clientY + "px";
      }

      // Apply cursor-reactive effects to cards
      const cards = document.querySelectorAll(".cursor-reactive");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        // Calculate distance from cursor to card center
        const distX = clientX - cardCenterX;
        const distY = clientY - cardCenterY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        // Apply tilt effect if close enough
        const maxDistance = 300;
        if (distance < maxDistance) {
          const rotX = (distY / maxDistance) * 5;
          const rotY = (distX / maxDistance) * -5;
          const scale = 1 + (1 - distance / maxDistance) * 0.05;

          (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`;

          // Add glow intensity based on proximity
          const glowIntensity = Math.max(0, 1 - distance / maxDistance);
          (card as HTMLElement).style.boxShadow = `
            0 0 ${20 + glowIntensity * 30}px rgba(0, 200, 255, ${0.3 + glowIntensity * 0.4}),
            0 0 ${10 + glowIntensity * 20}px rgba(255, 0, 0, ${0.1 + glowIntensity * 0.2})
          `;
        } else {
          (card as HTMLElement).style.transform = "";
          (card as HTMLElement).style.boxShadow = "";
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Outer glow aura with cyan-red gradient */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-50 w-72 h-72 rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, 
            rgba(0, 200, 255, 0.2) 0%, 
            rgba(255, 0, 0, 0.1) 50%, 
            transparent 100%)`,
          filter: "blur(40px)",
          transition: "opacity 0.3s ease-out",
        }}
      />

      {/* Secondary glow (red accent) */}
      <div
        className="fixed pointer-events-none z-49 w-48 h-48 rounded-full"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, 
            rgba(255, 0, 0, 0.15) 0%, 
            transparent 100%)`,
          filter: "blur(30px)",
        }}
      />

      {/* Core cursor dot with glow */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 w-3 h-3 rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          background: "rgba(0, 200, 255, 0.9)",
          boxShadow: `
            0 0 8px rgba(0, 200, 255, 0.8),
            0 0 20px rgba(0, 200, 255, 0.5),
            0 0 30px rgba(255, 0, 0, 0.3)
          `,
        }}
      />

      {/* Cursor ring (subtle) */}
      <div
        className="fixed pointer-events-none z-50 rounded-full border border-primary"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: "30px",
          height: "30px",
          transform: "translate(-50%, -50%)",
          opacity: 0.5,
          animation: "pulse 2s ease-in-out infinite",
        }}
      />
    </>
  );
}
