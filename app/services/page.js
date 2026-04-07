import { ArrowRight, Phone } from "lucide-react"
import Button from "../components/Button"
import Hero from "../components/Hero"
import HeroBg from "../components/HeroBg"

const services = () => {
    return (
        <>
            <HeroBg classes='translate-x-1/2' />
            <Hero
                title={`Digital Services That Power <br /> <i>Scalable Business Growth</i>`}
                description="We help startups, growing businesses, and enterprise teams design, build, and scale reliable digital products from strategy to long-term execution."
            >
                <Button text="Start a Project" variant="primary">
                    <ArrowRight className='size-20' />
                </Button>
                <div className="left-[calc(100%-20px)] absolute text-left text-gray-500 min-w-max mt-10 hidden md:block top-full"
                        style={{ fontFamily: "Segoe Print, Comic Sans MS" }}>
                    <img src="/images/curved-arrow.svg" alt="" />
                    <p className="rotate-3 absolute top-full left-full min-w-max -mt-10 ml-10">
                        Good ideas deserve <br />good execution.
                    </p>
                </div>
            </Hero>
        </>
    )
}

export default services