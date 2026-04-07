import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="py-20 sm:py-34 text-text">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <img src="/images/logo.svg" alt="Headbase" />
                    </Link>
                    <nav className="hidden md:block">
                        <ul className="flex gap-40 capitalize">
                            <li>
                                <Link className="link" href="/services">Services</Link>
                            </li>
                            <li>
                                <Link className="link" href="/work">Work</Link>
                            </li>
                            <li>
                                <Link className="link" href="/about">About</Link>
                            </li>
                            <li>
                                <Link className="link" href="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link className="link" href="/career">Career</Link>
                            </li>
                        </ul>
                    </nav>
                    <button className="md:hidden" aria-label="Mobile menu toggler">
                        <img src="/images/menu.svg" alt="" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header