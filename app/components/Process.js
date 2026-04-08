import React from 'react'
import Title from './Title'

const Process = () => {

    const data = [
        {
            icon: '/images/brain.svg', title: 'Understand the Problem', description: 'We study the business, users, and constraints to identify the real problem.',
        }, {
            icon: '/images/light.svg', title: 'Define the Direction', description: 'We align goals, priorities, and scope to set a clear product direction.',
        }, {
            icon: '/images/ui-ux.svg', title: 'Design the Experience', description: 'We design usable, scalable experiences aligned with strategy.',
        }, {
            icon: '/images/qa.svg', title: 'Test and Iterate', description: 'We test solutions with users and iterate to improve performance.',
        }, {
            icon: '/images/chart.svg', title: 'Ship and Grow', description: 'Launch, learn, and continuously improve.',
        }
    ]

    return (
        <section className="py-spc overflow-hidden">
            <div className="container relative">
                <Title classes="text-center" text={`How We Create <i>Value</i>`} description="A structured approach that turns complex problems into clear, scalable solutions." />
                <div
                    className="our_process grid lg:grid-cols-2 xl:grid-cols-1 gap-32 xl:gap-88 xl:place-items-center pt-50">
                    {
                        data.map((item, i) => (
                            <div key={i} className="process_card flex gap-14 xl:gap-28 items-start max-w-650">
                                <div className="shrink-0 border border-border p-10 sm:p-12 rounded-lg sm:rounded-2xl w-fit shadow-1 bg-white">
                                    <img className="w-32 sm:w-40" src={item.icon} alt="" />
                                </div>
                                <div className="flex flex-col sm:gap-8 xl:gap-16">
                                    <h3 className="text-xl lg:text-2xl font-medium text-black">
                                        {item.title}
                                    </h3>
                                    <p>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="absolute clip-1 bg-brand/5 size-[30vw] inset-0 m-auto -z-2"></div>
                <div className="absolute inset-0 blur-3xl -z-1"></div>
            </div>
        </section>
    )
}

export default Process