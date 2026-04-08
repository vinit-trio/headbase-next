import React from 'react'
import Title from './Title'

const Organizations = () => {

    const teams = [
        {
            title: "Founders & Leadership Teams",
            description: "Building and scaling products while balancing speed, risk, and long-term vision.",
            image: "/images/founder.svg"
        },
        {
            title: "Product & Engineering Teams",
            description: "Design and development partners for complex systems, workflows, and platforms.",
            image: "/images/team.svg"
        },
        {
            title: "Startups & Growing Businesses",
            description: "Turning early ideas into scalable products that support rapid growth.",
            image: "/images/chart.svg"
        },
        {
            title: "Enterprises & Large Organizations",
            description: "Modernizing systems and building reliable internal and customer-facing tools.",
            image: "/images/building.svg"
        },
        {
            title: "Regulated & Complex Industries",
            description: "Delivering compliant, secure solutions in highly regulated environments.",
            image: "/images/shield.svg"
        },
        {
            title: "Global & Distributed Clients",
            description: "Supporting teams across regions with reliable collaboration and delivery.",
            image: "/images/earth.svg"
        }
    ]

    return (
        <section className="py-spc text-center">
            <div className="container">
                <Title classes="text-center" text={`Who We <i>Work With</i>`} description="Teams and organizations we partner with to design, build, and scale digital products." />
                <div className="team_wrap">
                    <div className="team_cards grid md:grid-cols-2 2xl:grid-cols-3">
                        {
                            teams.map((team, index) => (
                                <div key={index} className="team_card p-19 lg:p-32 3xl:p-64 flex flex-col gap-8 xl:gap-16 items-center">
                                    <div className="shrink-0 border border-border p-10 sm:p-12 rounded-lg sm:rounded-2xl w-fit shadow-1 bg-white mb-6 xl:mb-12">
                                        <img className="w-32 sm:w-40" src={team.image} alt="" />
                                    </div>
                                    <h3 className="sm:text-xl 3xl:text-2xl font-medium text-black">{team.title}</h3>
                                    <p>{team.description}</p>
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

export default Organizations