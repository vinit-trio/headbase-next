"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function BackToTop() {
    const btnRef = useRef(null);
    const circleRef = useRef(null);

    // SVG circle config
    const size = 50;
    const strokeWidth = 3;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const btn = btnRef.current;
        const circle = circleRef.current;

        // Set initial state – fully hidden, progress at 0
        gsap.set(btn, { autoAlpha: 0, scale: 0.6 });
        gsap.set(circle, { strokeDasharray: circumference, strokeDashoffset: circumference });

        // ScrollTrigger to drive both visibility and progress
        ScrollTrigger.create({
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                const progress = self.progress; // 0 → 1

                // Update circle progress
                gsap.to(circle, {
                    strokeDashoffset: circumference * (1 - progress),
                    duration: 0.15,
                    ease: "none",
                });

                // Show / hide button
                if (progress > 0.03) {
                    gsap.to(btn, { autoAlpha: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)", overwrite: "auto" });
                } else {
                    gsap.to(btn, { autoAlpha: 0, scale: 0.6, duration: 0.3, ease: "power2.in", overwrite: "auto" });
                }
            },
        });

        return () => ScrollTrigger.killAll();
    }, [circumference]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button ref={btnRef} onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
            {/* SVG progress ring */}
            <svg className="back-to-top__ring" width={size} height={size} viewBox={`0 0 ${size} ${size}`}
            >
                {/* Track */}
                <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(112,112,255,0.15)" strokeWidth={strokeWidth} />
                {/* Progress */}
                <circle ref={circleRef} cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="var(--color-brand)" strokeWidth={strokeWidth} strokeLinecap="round" transform={`rotate(-90 ${size / 2} ${size / 2})`} />
            </svg>

            {/* Arrow icon */}
            <span className="back-to-top__icon">
                <ArrowUp size={20} strokeWidth={2.5} />
            </span>
        </button>
    );
}