"use client";
import React, { useEffect, useRef } from 'react'
import Title from './Title'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Services = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".service-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const data = [
        {
            icon: '/images/wordpress.svg',
            title: 'WordPress - WooCommerce',
            description: 'Build powerful, secure, and scalable WordPress stores.',
            badges: [
                { text: 'WordPress Core', color: 'blue' },
                { text: 'WooCommerce', color: 'green' },
                { text: 'Elementor', color: 'yellow' }
            ]
        },
        {
            icon: '/images/shopify.svg',
            title: 'Shopify Store',
            description: 'Seamless and scalable eCommerce experiences on Shopify.',
            badges: [
                { text: 'Shopify Core', color: 'purple' },
                { text: 'Liquid', color: 'blue' },
                { text: 'Storefront API', color: 'green' }
            ]
        },
        {
            icon: '/images/web-design.svg',
            title: 'Web Design',
            description: 'Create stunning, user-friendly websites that drive results.',
            badges: [
                { text: 'UI/UX Design', color: 'blue' },
                { text: 'Responsive Design', color: 'green' },
                { text: 'Web Development', color: 'yellow' }
            ]
        },
        {
            icon: '/images/ui-ux.svg',
            title: 'UI/UX Design',
            description: 'We design simple, usable, user-first approach, and accessible interfaces.',
            badges: [
                { text: 'Figma', color: 'red' },
                { text: 'FigJam', color: 'yellow' },
                { text: 'Prototyping', color: 'green' },
            ]
        },
        {
            icon: '/images/web-dev.svg',
            title: 'Web Development',
            description: 'Secure, scalable, and robust websites built with modern technology.',
            badges: [
                { text: 'Next.js', color: 'green' },
                { text: 'React.js', color: 'purple' },
                { text: 'HTML5', color: 'blue' },
                { text: 'CSS3', color: 'yelllow' },
                { text: 'Payload', color: 'red' },
            ]
        },
        {
            icon: '/images/app-design.svg',
            title: 'App Design',
            description: 'Beautiful, functional mobile experiences users love to use.',
            badges: [
                { text: 'Figma', color: 'red' },
                { text: 'Prototyping', color: 'purple' },
                { text: 'ISO/Android', color: 'green' },
            ]
        },
    ]

    return (
        <section ref={sectionRef} className="py-spc">
            <div className="container">
                <Title classes="text-center" text={`What We Do <i>Best</i>`} description="End-to-end digital solutions tailored to your unique business needs." />
                <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-16 3xl:gap-32">
                    {
                        data.map((item, i) => (
                            <div key={i}
                                className="service-card rounded-xl lg:rounded-3xl p-16 lg:p-28 border border-border shadow-1 flex flex-col gap-16 xl:gap-32 hover:border-brand transition-colors">
                                <div className="border border-border p-10 sm:p-12 rounded-lg lg:rounded-2xl w-fit shadow-1">
                                    <img className="w-32 sm:w-40" src={item.icon} alt="" />
                                </div>
                                <div className="flex flex-col gap-8 xl:gap-16">
                                    <h3 className="text-xl lg:text-2xl font-medium text-black">{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <ul className="flex gap-8 3xl:gap-16 flex-wrap mt-auto">
                                    {item.badges.map((badge, i) => (
                                        <li key={i} className={`badge ${badge.color}`}>{badge.text}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services