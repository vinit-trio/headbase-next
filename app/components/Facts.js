"use client";
import React, { useEffect, useRef } from 'react'
import Title from './Title'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const facts = [
    {
        number: 250,
        text: 'Projects Delivered',
        color: 'text-black'
    },
    {
        number: 7,
        text: 'Years of Excellence',
        color: 'text-black'
    },
    {
        number: 98,
        text: 'Client satisfaction',
        color: 'text-blue'
    },
    {
        number: 120,
        text: 'Happy Clients',
        color: 'text-black'
    }
]

const Facts = () => {
    const sectionRef = useRef(null);
    const numRefs = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            numRefs.current.forEach((el, index) => {
                if (el) {
                    const targetValue = parseInt(facts[index].number, 10);

                    gsap.fromTo(el,
                        { textContent: 0 },
                        {
                            textContent: targetValue,
                            duration: 2,
                            ease: "power2.out",
                            snap: { textContent: 1 },
                            scrollTrigger: {
                                trigger: el,
                                start: "top 85%",
                            }
                        }
                    );
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-spc text-center">
            <div className="container">
                <Title text={`Our <i>Impact</i>`} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-30">
                    {
                        facts.map((fact, index) => (
                            <div key={index}>
                                <span className={`text-96 font-bold ${fact.color} pb-8 xl:pb-16 block transition-all`}>
                                    <span ref={el => numRefs.current[index] = el}>0</span>+
                                </span>
                                <p>{fact.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Facts