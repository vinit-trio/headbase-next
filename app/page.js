import React from 'react'
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

const page = () => {

  return (
    <>
      <HeroBg />
      <Hero
        title={`We Design & Build <br /> <i>High-Performance</i><br />  Digital Products`}
        description="Transforming ideas into powerful digital experiences. We craft innovative solutions that drive business growth and redefine user engagement."
      >
        <Button text="Explore our services" variant="primary">
          <ArrowRight className='size-20' />
        </Button>
        <Button text="Book a Free Consulation" variant="secondary">
          <Phone className='size-20' />
        </Button>
      </Hero>
      <Facts />
      <Services />
      <Process />
      <Skills />
      <Industries />
      <Projects />
    </>
  )
}

export default page