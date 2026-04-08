import React, { useEffect, useRef } from 'react'
import Title from './Title'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const cards = [
    {
        title: "Client-First Approach",
        description: "We align closely with your goals to deliver solutions that truly support your business growth.",
        icon: "/images/users.svg"
    },
    {
        title: "On-Time Delivery",
        description: "Structured workflows and agile processes ensure every project is delivered as promised.",
        icon: "/images/clock.svg"
    },
    {
        title: "Scalable Solutions",
        description: "Every release is tested and reviewed to meet strict performance standards.",
        icon: "/images/chart.svg"
    },
    {
        title: "Transparent Communication",
        description: "You receive clear updates and full visibility throughout every project stage.",
        icon: "/images/messages.svg"
    },
    {
        title: "Quality Assurance",
        description: "Every release is tested and reviewed to meet strict performance standards.",
        icon: "/images/success-badge.svg"
    },
    {
        title: "Ongoing Support",
        description: "We provide continuous maintenance, updates, and long-term technical support.",
        icon: "/images/support.svg"
    }
]

const WhyChoose = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.utils.toArray(".wcu_card").forEach((card) => {
                gsap.from(card, {
                    opacity: 0,
                    x: 200,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });
            });
        }, containerRef);

        return () => ctx.revert(); // cleanup (important)
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const paths = gsap.utils.toArray(".abstract_svg path");

            paths.forEach((path, i) => {
                const length = path.getTotalLength();

                // Guard: skip if SVG not yet rendered
                if (!length) return;

                gsap.set(path, {
                    strokeDasharray: length,
                    strokeDashoffset: length,
                    fill: "none",
                });

                gsap.to(path, {
                    strokeDashoffset: 0,
                    duration: 2,
                    delay: i * 0.4,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-spc pl-16 sm:pl-32 bg-black text-white overflow-x-hidden">
            <div className="pr-0 pl-[calc((100%-1680px)/2)] flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/3 xl:w-2/5 pr-16">
                    <Title classes="white" text={`Why <i>Choose Us</i>`}
                        description="We leverage the latest technologies to build scalable, performant, and future-proof digital solutions." />
                    <div className="not-lg:hidden">
                        <svg className="abstract_svg" width="444" height="377" viewBox="0 0 444 377" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M154.152 6.42188C156.374 2.5694 160.562 0.31568 164.976 0.583984L164.992 0.584961H273.827C282.516 1.11706 287.608 10.6129 283.261 18.1523L283.26 18.1543L82.7881 369.189C78.4394 376.745 67.697 377.067 62.9072 369.794L2.49609 278.035C0.0609851 274.331 -0.0860441 269.552 2.12207 265.699L2.12109 265.698L154.15 6.4248L154.152 6.42188Z"
                                stroke="#D8D8D8" strokeWidth="1.125" />
                            <path
                                d="M131.505 253.781H225.487C234.426 253.781 240.016 263.416 235.733 271.184L235.521 271.552L176.682 369.905C174.553 373.437 170.753 375.597 166.647 375.597H72.6642C63.583 375.596 57.9578 365.653 62.6291 357.825L62.6301 357.826L121.469 259.471L121.47 259.472C123.584 255.942 127.384 253.781 131.505 253.781Z"
                                stroke="#D8D8D8" strokeWidth="1.125" />
                            <path
                                d="M360.235 110.034C364.596 102.476 375.37 102.154 380.174 109.43L440.748 201.207C443.188 204.909 443.338 209.684 441.13 213.535L347.791 368.24L347.785 368.249C345.558 372.102 341.358 374.357 336.931 374.089L336.913 374.087L336.895 374.088L227.185 374.538C218.47 374.005 213.367 364.521 217.726 356.968L360.235 110.034Z"
                                stroke="#D8D8D8" strokeWidth="1.125" />
                            <path
                                d="M275.551 104.164H369.789C378.898 104.164 384.534 114.11 379.851 121.938L320.852 220.313C318.732 223.844 314.922 226.005 310.789 226.005H216.552C207.443 226.005 201.806 216.059 206.489 208.231L265.488 109.855C267.608 106.325 271.432 104.164 275.551 104.164Z"
                                stroke="#D8D8D8" strokeWidth="1.125" />
                        </svg>
                    </div>
                </div>
                <div className="wcu_cards w-full lg:w-2/3 xl:w-3/5 flex flex-col gap-16 xl:gap-32">
                    {
                        cards.map((item, i) => {
                            return (
                                <div key={i} className="wcu_card flex items-center gap-24 bg-gray rounded-l-full py-16 2xl:py-32 px-32 2xl:px-64">
                                    <div className="shrink-0 border border-border p-10 sm:p-12 rounded-lg sm:rounded-2xl w-fit shadow-2 bg-black">
                                        <img className="w-32 sm:w-40" src={item.icon} alt="" />
                                    </div>
                                    <div className="flex flex-col gap-8 2xl:gap-16">
                                        <h3 className="sm:text-xl 3xl:text-2xl font-medium">{item.title}</h3>
                                        <p className="opacity-80 max-w-535 text-sm sm:text-base 2xl:text-lg 3xl:text-xl">{item.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default WhyChoose