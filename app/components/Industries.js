'use client'
import { useLayoutEffect, useRef } from 'react';
import Title from './Title';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Industries = () => {
    const sectionRef = useRef(null);
    const sliderRef = useRef(null);

    const industries = [
        {
            name: 'FinTech', description: 'Building secure, compliant, and high-conversion financial products. From dashboards to customer-facing platforms, we design experiences that build trust and perform at scale.', image: '/images/fintech.svg',
        },
        {
            name: 'EdTech', description: 'Designing learning platforms that prioritize clarity, engagement, and accessibility. Across web, mobile, and LMS products, we create UX that supports learning—not distraction.', image: '/images/edtech.svg',
        },
        {
            name: 'Healthcare', description: 'Building patient-friendly, compliant digital experiences. From healthtech SaaS to wellness apps, we balance usability, accessibility, and regulatory requirements.', image: '/images/healthcare.svg',
        },
        {
            name: 'E-commerce', description: 'Creating seamless shopping experiences for DTC brands and enterprise platforms. Our work supports discovery, conversion, retention, and end-to-end user journeys.', image: '/images/e-commerce.svg',
        },
        {
            name: 'Real Estate', description: 'Designing digital platforms that connect people and properties. From listing platforms to internal tools, we build intuitive, scalable real estate experiences.', image: '/images/real-estate.svg',
        },
        {
            name: 'Manufacturing & Industrial Tech', description: 'Building digital tools for operations, analytics, and internal systems. We focus on clarity, efficiency, and usability in complex industrial environments.', image: '/images/mi-tech.svg',
        }
    ]

    useLayoutEffect(() => {
        if (!sectionRef.current || !sliderRef.current) return;

        const ctx = gsap.context(() => {

            const getScrollAmount = () => {
                const sliderWidth = sliderRef.current.scrollWidth;
                return -(sliderWidth - window.innerWidth);
            };

            const tween = gsap.to(sliderRef.current, {
                x: getScrollAmount,
                ease: "none",
            });

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: () => `+=${sliderRef.current.scrollWidth}`,
                pin: true,
                animation: tween,
                scrub: 1,
                invalidateOnRefresh: true,
            });

        }, sectionRef);

        return () => { ctx.revert();};

    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-130 min-h-screen flex flex-col justify-center bg-black text-white overflow-hidden"
        >
            <div className="container">
                <Title classes="white" text={`<i>Industries</i>`} description="We work across high-impact industries, combining deep domain knowledge with cutting-edge design." />
            </div>

            <div className="container">
                <div className="flex mt-12 lg:mt-20">
                    <div
                        ref={sliderRef}
                        className="slider flex gap-16 xl:gap-32 pr-[calc((100vw-1600px)/2)]"
                    >
                        {industries.map((item, index) => (
                            <div
                                key={index}
                                className="w-[80vw] md:w-[45vw] lg:w-[40vw] 2xl:w-[35vw] 3xl:w-[28vw] shrink-0 rounded-xl lg:rounded-3xl p-16 lg:p-28 bg-gray flex flex-col gap-16 xl:gap-32 border border-gray hover:border-border-2"
                            >
                                <div className="border border-border-2 p-10 sm:p-12 rounded-lg lg:rounded-2xl w-fit shadow-2 bg-black">
                                    <img
                                        className="w-32 sm:w-40"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                </div>

                                <div className="flex flex-col gap-8 xl:gap-16">
                                    <h3 className="text-xl lg:text-2xl font-medium">
                                        {item.name}
                                    </h3>
                                    <p className="opacity-80">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industries;