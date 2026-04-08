"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const cursorsData = [
  { id: 1, color: '#FF6900', name: 'Designer' },
  { id: 2, color: '#2B7FFF', name: 'Developer' },
];

const Cursor = ({ color, name, reference }) => (
  <div
    ref={reference}
    className="absolute top-0 left-0 pointer-events-none flex flex-col items-start opacity-0"
    style={{ zIndex: 10, willChange: 'transform, opacity' }}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.1868 12.8532L16.8428 14.3189C15.6435 14.7187 14.6841 15.6515 14.2844 16.8774L12.8186 21.2214C11.566 24.9791 6.28925 24.8991 5.11664 21.1414L0.186332 5.28449C-0.77308 2.13975 2.1318 -0.791784 5.24989 0.194278L21.1335 5.12459C24.8645 6.2972 24.9178 11.6006 21.1868 12.8532Z" fill={color} />
    </svg>
    <div className="py-9 px-18 text-sm text-white rounded-md ml-20 font-medium shadow-sm" style={{ backgroundColor: color }}>
      {name}
    </div>
  </div>
);

const MulticursorSimulator = () => {
  const containerRef = useRef(null);
  const cursorRefs = useRef([]);
  const myCursorRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      cursorRefs.current.forEach((cursor, index) => {
        if (!cursor) return;

        const startX = gsap.utils.random(50, window.innerWidth * 0.8);
        const startY = gsap.utils.random(50, 200);

        gsap.set(cursor, { x: startX, y: startY });

        gsap.to(cursor, {
          opacity: 1,
          duration: 0.5,
          delay: index * 1.5 + 0.5,
          onComplete: () => animateCursor(cursor)
        });
      });

      function animateCursor(cursor) {
        const targetX = gsap.utils.random(50, window.innerWidth - 150);
        const targetY = gsap.utils.random(50, window.innerHeight * 0.7);

        const duration = gsap.utils.random(0.8, 2.5);
        const pause = gsap.utils.random(0.5, 3);

        gsap.to(cursor, {
          x: targetX,
          y: targetY,
          duration: duration,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.delayedCall(pause, () => animateCursor(cursor));
          }
        });
      }

      // Handle user's custom cursor
      const parent = containerRef.current?.parentNode;
      if (parent) {

        const onMouseEnter = () => {
          gsap.to(myCursorRef.current, { opacity: 1, duration: 0.2 });
        };

        const onMouseLeave = () => {
          gsap.to(myCursorRef.current, { opacity: 0, duration: 0.2 });
        };

        const onMouseMove = (e) => {
          const rect = parent.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          gsap.to(myCursorRef.current, {
            x,
            y,
            opacity: 1, // Ensure visible on move
            duration: 0.15,
            ease: "power2.out",
            overwrite: "auto"
          });
        };

        parent.addEventListener('mouseenter', onMouseEnter);
        parent.addEventListener('mouseleave', onMouseLeave);
        parent.addEventListener('mousemove', onMouseMove);

        return () => {
          parent.removeEventListener('mouseenter', onMouseEnter);
          parent.removeEventListener('mouseleave', onMouseLeave);
          parent.removeEventListener('mousemove', onMouseMove);
        };
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none z-99" ref={containerRef}>
      {cursorsData.map((data, index) => (
        <Cursor key={data.id} color={data.color} name={data.name} reference={el => cursorRefs.current[index] = el} />
      ))}
      <Cursor color="#00C951" name="You" reference={myCursorRef} />
    </div>
  );
};

export default MulticursorSimulator;