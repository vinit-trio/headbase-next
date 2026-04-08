'use client'
import React from 'react';
import Title from './Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

const Industries = () => {

    const industries = [
        {
            name: 'FinTech', description: 'Building secure, compliant, and high-conversion financial products. From dashboards to customer-facing platforms, we design experiences that build trust and perform at scale.', image: '/images/fintech.svg',
        },
        {
            name: 'EdTech', description: 'Designing learning platforms that prioritize clarity, engagement, and accessibility. Across web, mobile, and LMS products, we create UX that supports learning—not distraction.', image: '/images/edtech.svg',
        },
        {
            name: 'Healthcare', description: 'Building patient-friendly, compliant digital experiences. From healthtech SaaS to wellness apps, we balance usability, accessibility, and regulatory requirements.', image: '/images/healthcare.svg',
        },
        {
            name: 'E-commerce', description: 'Creating seamless shopping experiences for DTC brands and enterprise platforms. Our work supports discovery, conversion, retention, and end-to-end user journeys.', image: '/images/e-commerce.svg',
        },
        {
            name: 'Real Estate', description: 'Designing digital platforms that connect people and properties. From listing platforms to internal tools, we build intuitive, scalable real estate experiences.', image: '/images/real-estate.svg',
        },
        {
            name: 'Manufacturing & Industrial Tech', description: 'Building digital tools for operations, analytics, and internal systems. We focus on clarity, efficiency, and usability in complex industrial environments.', image: '/images/mi-tech.svg',
        }
    ]

    return (
        <section className="py-spc bg-black text-white">
            <div className="container">
                <Title classes='white' text={`<i>Industries</i>`} description="We work across high-impact industries, combining deep domain knowledge with cutting-edge design." />
            </div>
            <div
                className="container 3xl:max-w-full 3xl:p-0 mask-[linear-gradient(90deg,#000_80%,transparent_calc(100%-16px))] 3xl:mask-none">
                <Swiper
                    slidesPerView={1.2} spaceBetween={16} loop={true} breakpoints={{
                        768: { slidesPerView: 2.2, spaceBetween: 24, },
                        1400: { slidesPerView: 3.2, spaceBetween: 32, },
                    }}
                    modules={[Pagination]} className="3xl:pl-[calc((100%-1680px)/2)]!">
                    {
                        industries.map((industry, index) => (
                            <SwiperSlide key={index} className='h-auto! pb-4 pr-4'>
                                <div
                                    className="h-full rounded-xl lg:rounded-3xl p-16 lg:p-28 bg-gray flex flex-col gap-16 xl:gap-32 border border-gray hover:border-border-2">
                                    <div className="border border-border-2 p-10 sm:p-12 rounded-lg lg:rounded-2xl w-fit shadow-2 bg-black">
                                        <img className="w-32 sm:w-40" src={industry.image} alt={industry.name} />
                                    </div>
                                    <div className="flex flex-col gap-8 xl:gap-16">
                                        <h3 className="text-xl lg:text-2xl font-medium">{industry.name}</h3>
                                        <p className="opacity-80">{industry.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Industries