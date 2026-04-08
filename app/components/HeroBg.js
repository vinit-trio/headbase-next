'use client'
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const HeroBg = ({ classes }) => {

    const heroBgRef = useRef(null);

    useEffect(() => {
        gsap.to(heroBgRef.current,{
            duration: 1,
            ease: 'power3.out',
            marginTop: '0',
            opacity: 1
        });
    }, [])

    return (
        <>
            <div ref={heroBgRef} className="absolute inset-0 -z-2 opacity-0 -mt-1000">
                <svg className={`max-w-full absolute inset-0 -translate-y-1/2 mx-auto -mt-[20vh] ${classes ? classes : ''}`} xmlns="http://www.w3.org/2000/svg"
                    width="1719" height="1719" viewBox="0 0 1719 1719" fill="none">
                    <circle cx="859.5" cy="859.5" r="799.5" stroke="#7070FF" strokeOpacity="0.2" strokeWidth="120" />
                </svg>
            </div>
            <div className="fixed inset-0 backdrop-blur-3xl -z-1"></div>
        </>
    )
}

export default HeroBg