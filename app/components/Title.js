"use client";
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Title = ({ text, description, classes }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".title-anim", {
                y: 80,
                opacity: 0,
                duration: .5,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className={`title ${classes || ''}`} >
            <div className="overflow-hidden">
                <h2 className="title-anim" dangerouslySetInnerHTML={{ __html: text }} />
            </div>
            <div className="overflow-hidden">
                {
                    description && <p className="title-anim">{description}</p>
                }
            </div>
        </div>
    )
}

export default Title