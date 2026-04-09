import { Phone } from 'lucide-react'
import Button from './Button'
import Title from './Title'

const CtaSec = () => {
    return (
        <section className="py-50 lg:py-90 2xl:py-120 text-center">
            <div className="container">
                <Title classes="text-center" text={`Ready to <i>Grow Your Business</i> Digitally?`} description="Let's discuss how we can help you achieve your digital goals. Our team is excited to hear from you." />
                <Button link="#" text="Schedule a Free Strategy Call" variant="primary">
                    <Phone className='size-20' />
                </Button>
            </div>
        </section>
    )
}

export default CtaSec