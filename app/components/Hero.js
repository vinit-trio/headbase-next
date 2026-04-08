import React from 'react'
import MulticursorSimulator from './MulticursorSimulator'

const Hero = ({ title, description, children }) => {
  return (
    <section className="hero text-center py-spc md:min-h-[calc(100vh-104px)] flex items-center relative overflow-hidden">
      <MulticursorSimulator />
      <div className="container relative flex flex-col gap-20 xl:gap-40 z-10 w-full pointer-events-none">
        <div className="pointer-events-auto">
          <h1 className="hero_title" dangerouslySetInnerHTML={{ __html: title }}></h1>
          <p className="max-w-816 mx-auto text-black mt-20 xl:mt-40">
            {description}
          </p>
        </div>
        <div className="relative w-fit mx-auto flex flex-wrap justify-center gap-8 xl:gap-16 pointer-events-auto">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Hero