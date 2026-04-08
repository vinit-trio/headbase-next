import React, { useEffect, useRef } from 'react'
import Title from './Title'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const cards = [
    {
        title: "Our Mission",
        description: "To empower businesses with cutting-edge web solutions that enhance their digital presence and drive growth."
    },
    {
        title: "Our Approach",
        description: "That’s why we take a collaborative approach, working closely with our clients to deliver tailored solutions that align with their goals."
    }
]

const counts = [
    {
        title: "Successful Projects Delivered",
        count: 164,
        suffix: "+",
        color: "black"
    },
    {
        title: "Client Satisfaction Rate",
        count: 98,
        suffix: "%",
        color: "blue"
    }
]

const Mission = () => {

    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    const sectionRef = useRef(null);
    const numRefs = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            numRefs.current.forEach((el, index) => {
                if (el) {
                    const targetValue = parseInt(counts[index].count, 10);

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
        <section ref={sectionRef} className="py-spc">
            <div className="container">
                <Title text={`Whether you’re a startup, an <i>Established business</i>, or <i>an Enterprise</i>, we’re here to help you reach new heights online.`} />
                <div className="grid xl:grid-cols-2 gap-32 2xl:gap-64 items-center">
                    <div className="relative rounded-xl overflow-hidden aspect-video xl:aspect-[1.3/1] group">
                        <Image src="/images/team.webp" width={800} height={600} alt="Our Team" className="size-full object-cover" />
                        <div
                            className="glass_effect absolute h-25 scale-200 w-full top-1/2 -translate-y-1/2 -left-full rotate-45 duration-500 bg-white/30 group-hover:left-full!">
                        </div>
                    </div>
                    <div className="flex flex-col gap-32 2xl:gap-64">
                        <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-32">
                            {cards.map((item, i) => {
                                return (
                                    <div key={i} className="flex flex-col gap-8 xl:gap-16">
                                        <div><h3 className="text-40 font-semibold text-black">{item.title}</h3></div>
                                        <p>{item.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="grid grid-cols-2 gap-32">
                            {counts.map((item, index) => {
                                return (
                                    <div key={index} className="flex flex-col gap-8 xl:gap-16">
                                        <span className={`text-96 font-bold text-${item.color}`}><span ref={el => numRefs.current[index] = el}>0</span>{item.suffix}</span>
                                        <p>{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission