import React from 'react'

const Hero = ({ title, description, children }) => {
  return (
    <section className="hero text-center py-spc min-h-[calc(100vh-104px)]">
      <div className="container relative flex flex-col gap-20 xl:gap-40">
        <h1 className="hero_title" dangerouslySetInnerHTML={{ __html: title }}></h1>
        <p className="max-w-816 mx-auto text-black">
          {description}
        </p>
        <div className="relative w-fit mx-auto flex flex-wrap justify-center gap-8 xl:gap-16">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Hero