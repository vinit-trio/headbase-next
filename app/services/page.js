'use client'
import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import HeroBg from '../components/HeroBg'
import Button from '../components/Button'
import { ArrowRight } from 'lucide-react'
import Facts from '../components/Facts'
import Services from '../components/Services'
import Process from '../components/Process'
import Skills from '../components/Skills'
import Industries from '../components/Industries'
import Projects from '../components/Projects'
import Organizations from '../components/Organizations'
import WhyChoose from '../components/WhyChoose'
import Mission from '../components/Mission'
import CtaSec from '../components/CtaSec'
import gsap from 'gsap'

const page = () => {

  useEffect(() => {
    gsap.to('section', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, [])

  return (
    <>
      <HeroBg />

      {/* Hero section */}
      <Hero title={`Digital Services That Power <i>Scalable Business Growth</i>`}
        description="We help startups, growing businesses, and enterprise teams design, build, and scale reliable digital products from strategy to long-term execution.">
        <Button text="Start a Project" variant="primary" link="/services"><ArrowRight className='size-20' /></Button>
        <div className="left-[calc(100%-20px)] top-full absolute text-left text-gray-500 min-w-max mt-10 hidden md:block"
          style={{ fontFamily: 'Segoe Print', 'Comic Sans MS': 'cursive' }}>
          <img src="/images/curved-arrow.svg" alt="" />
          <p className="rotate-3 absolute top-full left-full min-w-max -mt-10 ml-10">
            Good ideas deserve <br />good execution.
          </p>
        </div>
      </Hero>

      {/* Our Impact section */}
      <Facts />

      {/* What We Do section */}
      <Services />

      {/* How We Do section */}
      <Process />

      {/* Technologies & Expertise section */}
      <Skills />

      {/* Industries section */}
      <Industries />

      {/* Work That Delivers Results section */}
      <Projects />

      {/* Who We Work With section */}
      <Organizations />

      {/* Our mission section */}
      <Mission />

      {/* Why Choose Us section */}
      <WhyChoose />

      {/* CTA section */}
      <CtaSec />
    </>
  )
}

export default page