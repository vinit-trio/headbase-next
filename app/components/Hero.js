'use client'
import React, { useEffect, useRef } from 'react'
import MulticursorSimulator from './MulticursorSimulator'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = ({ title, description, children }) => {

  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero_ele", {
        y: 200, opacity: 0, duration: .5, stagger: 0.2, ease: "power2.out", scrollTrigger: { trigger: containerRef.current, start: "top 85%", }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="hero text-center py-spc md:min-h-[calc(100vh-104px)] flex items-center relative overflow-hidden">
      <MulticursorSimulator />
      <div className="container relative flex flex-col gap-20 xl:gap-40 z-10 w-full pointer-events-none">
        <div className="pointer-events-auto">
          <div className="overflow-hidden pb-20 xl:pb-40">
            <h1 className="hero_ele hero_title" dangerouslySetInnerHTML={{ __html: title }}></h1>
          </div>
          <div className="overflow-hidden">
            <p className="hero_ele max-w-816 mx-auto text-black">{description}</p>
          </div>
        </div>
        <div className="hero_ele relative w-fit mx-auto flex flex-wrap justify-center gap-8 xl:gap-16 pointer-events-auto">{children}</div>
      </div>
    </section>
  )
}

export default Hero