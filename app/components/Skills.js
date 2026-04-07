import React from 'react'
import SubTitle from './SubTitle'

const Skills = () => {

    const skills = [
        { name: 'Next.js', img: '/images/next.svg' }, { name: 'React.js', img: '/images/react.svg' }, { name: 'Shopify', img: '/images/shopify.svg' }, { name: 'Kirby', img: '/images/kirby.svg' }, { name: 'UI/UX Design', img: '/images/ui-ux.svg' }, { name: 'WordPress', img: '/images/wordpress.svg' }, { name: 'Tailwind CSS', img: '/images/tailwind.svg' }, { name: 'Web/App Design', img: '/images/web-app.svg' }, { name: 'Payload', img: '/images/payload.svg' }, { name: 'PHP', img: '/images/php.svg' }, { name: 'HTML5', img: '/images/html.svg' }, { name: 'TypeScript', img: '/images/typescript.svg' }, { name: 'JavaScript', img: '/images/js.svg' }, { name: 'Node.js', img: '/images/node.svg' }, { name: 'MongoDB', img: '/images/mongodb.svg' },
    ]

    return (
        <section className="py-spc text-center">
            <div className="container">
                <SubTitle classes="text-center" text={`Technologies & <i>Expertise</i>`} description="We leverage the latest technologies to build scalable, performant, and future-proof digital solutions." />
                <div className="expertise_wrap">
                    <div className="our_expertise grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                        {
                            skills.map((skill, i) => (
                                <div key={i}
                                    className="expertise_card p-25 sm:p-32 3xl:p-64 flex flex-col gap-14 xl:gap-28 items-center">
                                    <div
                                        className="shrink-0 border border-border p-10 sm:p-12 rounded-lg sm:rounded-2xl w-fit shadow-1 bg-white">
                                        <img className="w-32 sm:w-40" src={skill.img} alt={skill.name} />
                                    </div>
                                    <h3 className="sm:text-xl 3xl:text-2xl font-medium text-black">
                                        {skill.name}
                                    </h3>
                                </div>
                            ))
                        }
                    </div>
                    <div className="card_effect absolute bg-brand/10 -z-1"></div>
                </div>
            </div>
        </section>
    )
}

export default Skills