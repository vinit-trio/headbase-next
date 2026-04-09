'use client'
import React, { useEffect } from 'react'
import Hero from './components/Hero'
import HeroBg from './components/HeroBg'
import Button from './components/Button'
import { ArrowRight, Phone } from 'lucide-react'
import Facts from './components/Facts'
import Services from './components/Services'
import Process from './components/Process'
import Skills from './components/Skills'
import Industries from './components/Industries'
import Projects from './components/Projects'
import Organizations from './components/Organizations'
import WhyChoose from './components/WhyChoose'
import Mission from './components/Mission'
import CtaSec from './components/CtaSec'
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
      <Hero title={`We Design & Build <br /> <i>High-Performance</i><br />  Digital Products`}
        description="Transforming ideas into powerful digital experiences. We craft innovative solutions that drive business growth and redefine user engagement.">
        <Button text="Explore our services" variant="primary" link="/"><ArrowRight className='size-20' /></Button>
        <Button text="Book a Free Consulation" variant="secondary" link="/"><Phone className='size-20' /></Button>
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