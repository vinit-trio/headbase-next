import React from 'react'
import SubTitle from './SubTitle'

const Facts = () => {
    return (
        <section className="py-spc text-center">
            <div className="container">
                <SubTitle text={`Our <i>Impact</i>`} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-30">
                    <div>
                        <span className="text-96 font-bold text-black pb-8 xl:pb-16 block transition-all">
                            <span>250</span>+
                        </span>
                        <p>Projects Delivered</p>
                    </div>
                    <div>
                        <span className="text-96 font-bold text-black pb-8 xl:pb-16 block transition-all">
                            <span>7</span>+
                        </span>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <span className="text-96 font-bold text-blue pb-8 xl:pb-16 block transition-all">
                            <span>98</span>%
                        </span>
                        <p>Client satisfaction</p>
                    </div>
                    <div>
                        <span className="text-96 font-bold text-black pb-8 xl:pb-16 block transition-all">
                            <span>120</span>+
                        </span>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Facts