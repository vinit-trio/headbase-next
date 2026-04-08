"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function ClickBurst() {
  useEffect(() => {
    const handleClick = (e) => {
      const burst = document.createElement("div");
      burst.style.cssText = `position:fixed; left:${e.clientX}px; top:${e.clientY}px; pointer-events:none; z-index:9999;`;
      document.body.appendChild(burst);

      for (let i = 0; i < 8; i++) {
        const line = document.createElement("div");
        // 1. Made the lines smaller (2px by 6px)
        line.style.cssText = `position:absolute; width:2px; height:6px; background:#4848FF; border-radius:2px; top:-3px; left:-1px;`;
        burst.appendChild(line);

        const angle = (i * 45 * Math.PI) / 180;
        
        // 2. Reduced travel distance (starts 8px away, ends 20px away)
        gsap.fromTo(line,
          { x: Math.sin(angle) * 8, y: -Math.cos(angle) * 8, rotation: i * 45, opacity: 1 },
          { x: Math.sin(angle) * 20, y: -Math.cos(angle) * 20, opacity: 0, duration: 0.3, ease: "power2.out" }
        );
      }
      
      // 3. Sped up cleanup to match the 0.3s duration
      setTimeout(() => burst.remove(), 300); 
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return null;
}