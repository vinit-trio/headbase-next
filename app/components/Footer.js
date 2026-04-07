import React from 'react'

const Footer = () => {
    return (
        <footer className="relative py-spc border-t border-black/10 overflow-hidden">
            <div className="container">
                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-32 gap-y-40 sm:gap-y-80">
                    <div>
                        <div className="mb-32 xl:mb-64">
                            <img src="/images/logo.svg" alt="HeadBase" className="w-275" />
                        </div>
                        <div>
                            <h2 className="text-40 font-medium text-black">
                                The agency <br />
                                for <i className="font-semibold text-blue">impatient</i> <br />
                                brands
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col gap-25 md:gap-35 3xl:gap-100 sm:not-xl:order-last">
                        <div className="link_title font-medium text-2xl text-black">
                            Quick links
                        </div>
                        <ul className="space-y-20">
                            <li><a className="link hover:text-black" href="#">Services</a></li>
                            <li><a className="link hover:text-black" href="#">Work</a></li>
                            <li><a className="link hover:text-black" href="#">About</a></li>
                            <li><a className="link hover:text-black" href="#">Contact</a></li>
                            <li><a className="link hover:text-black" href="#">Career</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-25 md:gap-35 3xl:gap-100 sm:not-xl:order-last">
                        <div className="link_title font-medium text-2xl text-black">
                            Services
                        </div>
                        <ul className="space-y-20">
                            <li><a className="link hover:text-black" href="#">Wordpress</a></li>
                            <li><a className="link hover:text-black" href="#">Shopify Store</a></li>
                            <li><a className="link hover:text-black" href="#">Web Design</a></li>
                            <li><a className="link hover:text-black" href="#">Web Development</a></li>
                            <li><a className="link hover:text-black" href="#">UI/UX Design</a></li>
                            <li><a className="link hover:text-black" href="#">App Design</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-25 md:gap-35 3xl:gap-74">
                        <p>
                            SH-403 Shiven Shoppers, Adajan DN,
                            Surat – 395009, Gujarat, India
                        </p>
                        <ul className="flex gap-8 xl:gap-16">
                            <li>
                                <a href="#" aria-label="Instagram account"
                                    className="border border-border inline-block p-10 sm:p-12 rounded-lg xl:rounded-2xl hover:shadow-1">
                                    <img src="/images/Instagram.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Linkedin account"
                                    className="border border-border inline-block p-10 sm:p-12 rounded-lg xl:rounded-2xl hover:shadow-1">
                                    <img src="/images/LinkedIn.svg" alt="" />
                                </a>
                            </li>
                        </ul>
                        <a href="mailto:hr@headbase.com" className="text-blue ul_effect w-fit">hr@headbase.com</a>
                        <p>&copy; <span id="currentYear">2026</span>-Headbase. All Rights Reserved</p>
                    </div>
                </div>
            </div>
            <div className="absolute clip-1 bg-brand/10 size-[30vw] -bottom-100 left-0 -z-1"></div>
            <div className="absolute inset-0 backdrop-blur-3xl -z-1"></div>
        </footer>
    )
}

export default Footer