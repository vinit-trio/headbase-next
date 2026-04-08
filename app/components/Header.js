"use client"
import Link from 'next/link'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState, useCallback } from 'react'
import MobileMenu from './MobileMenu';

const Header = () => {

    const headerRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setMenuOpen(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
    }, []);

    useEffect(() => {
        gsap.to(headerRef.current, {
            opacity: 1,
            ease: 'power3.out',
        });
    }, [])

    // Lock body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            start: 0,
            end: "max",
            onUpdate: (self) => {
                if (self.scroll() < 50) {
                    headerRef.current.classList.remove("scroll_down");
                    headerRef.current.classList.remove("scroll_up");
                    return;
                }
                if (self.direction === 1) {
                    headerRef.current.classList.add("scroll_down");
                    headerRef.current.classList.remove("scroll_up");
                } else {
                    headerRef.current.classList.remove("scroll_down");
                    headerRef.current.classList.add("scroll_up");
                }
            },
        });
    }, []);

    return (
        <>
            <header ref={headerRef}>
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

                        {/* Hamburger button */}
                        <button
                            className="hamburger md:hidden"
                            onClick={toggleMenu}
                            aria-label="Toggle mobile menu"
                            aria-expanded={menuOpen}
                        >
                            <span className={`hamburger-box${menuOpen ? ' active' : ''}`}>
                                <span className="hamburger-line hamburger-line--1" />
                                <span className="hamburger-line hamburger-line--2" />
                                <span className="hamburger-line hamburger-line--3" />
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
        </>
    )
}

export default Header