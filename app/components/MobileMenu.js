"use client"
import Link from 'next/link'
import gsap from "gsap"
import React, { useEffect, useRef, useCallback } from 'react'

const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/career", label: "Career" },
]

const MobileMenu = ({ isOpen, onClose }) => {
    const overlayRef = useRef(null)
    const panelRef = useRef(null)
    const linksRef = useRef([])
    const socialRef = useRef(null)
    const tlRef = useRef(null)

    // Build the GSAP timeline once on mount
    useEffect(() => {
        const tl = gsap.timeline({ paused: true })

        tl.to(overlayRef.current, {
            opacity: 1,
            visibility: "visible",
            duration: 0.4,
            ease: "power2.out",
        })
        .to(panelRef.current, {
            x: "0%",
            duration: 0.5,
            ease: "power3.out",
        }, "<0.1")
        .from(linksRef.current, {
            y: 40,
            opacity: 0,
            duration: 0.4,
            stagger: 0.07,
            ease: "power3.out",
        }, "-=0.25")
        .from(socialRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
        }, "-=0.15")

        tlRef.current = tl

        return () => {
            tl.kill()
        }
    }, [])

    // Play / reverse the timeline when isOpen changes
    useEffect(() => {
        if (!tlRef.current) return
        if (isOpen) {
            tlRef.current.timeScale(1).play()
        } else {
            tlRef.current.timeScale(1.5).reverse()
        }
    }, [isOpen])

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape" && isOpen) onClose()
        }
        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [isOpen, onClose])

    const handleLinkClick = useCallback(() => {
        onClose()
    }, [onClose])

    return (
        <>
            {/* Overlay */}
            <div
                ref={overlayRef}
                className="mobile-menu-overlay"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Off-canvas Panel */}
            <nav
                ref={panelRef}
                className="mobile-menu-panel"
                aria-label="Mobile navigation"
                role="dialog"
                aria-modal={isOpen}
            >
                {/* Close button */}
                <button
                    className="mobile-menu-close"
                    onClick={onClose}
                    aria-label="Close menu"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {/* Logo */}
                <div className="mobile-menu-logo">
                    <Link href="/" onClick={handleLinkClick}>
                        <img src="/images/logo.svg" alt="Headbase" />
                    </Link>
                </div>

                {/* Nav Links */}
                <ul className="mobile-menu-links">
                    {navLinks.map((link, i) => (
                        <li
                            key={link.href}
                            ref={(el) => (linksRef.current[i] = el)}
                        >
                            <Link
                                href={link.href}
                                className="mobile-menu-link"
                                onClick={handleLinkClick}
                            >
                                <span className="mobile-menu-link-index">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="mobile-menu-link-label">
                                    {link.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Footer / Social */}
                <div ref={socialRef} className="mobile-menu-footer">
                    <p className="mobile-menu-footer-label">Follow us</p>
                    <div className="mobile-menu-socials">
                        <a href="#" aria-label="LinkedIn" className="mobile-menu-social-link">
                            LinkedIn
                        </a>
                        <a href="#" aria-label="Instagram" className="mobile-menu-social-link">
                            Instagram
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default MobileMenu
