import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Title from './Title'
import Button from './Button'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const Projects = () => {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Mark as mounted to safely use createPortal (prevents SSR hydration errors)
        setIsMounted(true);

        const updateMousePosition = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    const projects = [
        {
            image: '/images/project1.webp',
            title: 'Ellitee SkinCare',
            description: 'A science-led skincare website focused on trust, education, and elegant product storytelling.',
            badges: [
                { text: 'Website Design', color: 'green' },
                { text: 'E-Commerce', color: 'blue' },
                { text: 'Skincare', color: 'yellow' }
            ]
        },
        {
            image: '/images/project2.webp',
            title: 'Underpinnings Lingerie',
            description: 'An inclusive, body-positive eCommerce platform designed for confidence and perfect fit discovery.',
            badges: [
                { text: 'Shopify Store', color: 'purple' },
                { text: 'E-Commerce', color: 'green' },
                { text: 'Lingerie', color: 'blue' }
            ]
        },
        {
            image: '/images/project3.webp',
            title: 'Snowo Distillers',
            description: 'A luxury Shopify store crafted to showcase heritage, awards, and premium brand identity.',
            badges: [
                { text: 'Shopify Store', color: 'blue' },
                { text: 'E-Commerce', color: 'yellow' },
                { text: 'Spirits', color: 'red' }
            ]
        },
        {
            image: '/images/project4.webp',
            title: 'Frank Art Color',
            description: 'A bold, immersive portfolio website for showcasing street art and creative services.',
            badges: [
                { text: 'Website Design', color: 'green' },
                { text: 'Portfolio', color: 'blue' },
                { text: 'Street Art', color: 'yellow' }
            ]
        }
    ]

    return (
        <section className="py-spc relative overflow-hidden">

            {/* Teleport the cursor directly to the document body using createPortal */}
            {isMounted && createPortal(
                <div
                    ref={cursorRef}
                    className="fixed top-0 left-0 z-9999 pointer-events-none"
                    style={{ willChange: 'transform', transition: 'none' }}
                >
                    <div
                        className={`flex items-center justify-center size-60 rounded-full bg-white/80 backdrop-blur-xs text-blue text-sm font-medium transition-all duration-300 
                            uppercase border ${isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} >
                        <ArrowUpRight />
                    </div>
                </div>,
                document.body
            )}

            <div className="container">
                <Title text={`Work That <i>Delivers Results</i>`} description="Real client challenges, clear solutions, and the impact created through design and technology." />

                <div className="grid md:grid-cols-2 gap-x-24 xl:gap-x-48 gap-y-40 xl:gap-y-80 mb-40 xl:mb-80">
                    {projects.map((project, i) => (
                        <div key={i} className="project_card group relative flex flex-col gap-8 3xl:gap-16">
                            <div className="image relative rounded-xl overflow-hidden aspect-[1.63/1] mb-4 xl:mb-8 group cursor-none" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                                <img src={project.image} alt="" className="absolute size-full inset-0 object-cover" />
                                <div
                                    className="glass_effect absolute h-25 scale-200 w-full top-1/2 -translate-y-1/2 -left-full rotate-45 duration-1000 bg-white/30 group-hover:left-full!">
                                </div>
                            </div>
                            <div className="flex gap-8 mb-6 xl:mb-12 flex-wrap">
                                {project.badges.map((badge, j) => (
                                    <div key={j} className={`badge ${badge.color}`}>{badge.text}</div>
                                ))}
                            </div>
                            <Link href="/work-details"><h3 className="text-xl xl:text-2xl text-black">{project.title}</h3></Link>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
                <Button link="#" classes='mx-auto w-fit' text='View More Projects' variant='primary'><ArrowRight /></Button>
            </div>
        </section>
    )
}

export default Projects