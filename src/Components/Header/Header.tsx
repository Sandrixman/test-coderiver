import { useState } from "react"
import RevealText from "../RevealText/RevealText"
import ScrambleText from "./ScrambleText"
import "./Header.css"

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className='header'>
            <div className='header-inner'>
                {/* LOGO */}
                <div className='logo'>
                    <RevealText delay={0}>
                        <img src='logo.png' alt='logo' />
                    </RevealText>
                </div>

                {/* DESKTOP NAV */}
                <nav className='nav'>
                    <ScrambleText text='Solutions' />
                    <ScrambleText text='Technology' />
                    <ScrambleText text='About' />
                    <ScrambleText text='Careers' />
                    <ScrambleText text='Resources' />
                    <ScrambleText text='Contact' />
                </nav>

                {/* HAMBURGER */}
                <button className='hamburger' onClick={() => setOpen(!open)}>
                    <span className={open ? "bar open" : "bar"} />
                    <span className={open ? "bar open" : "bar"} />
                    <span className={open ? "bar open" : "bar"} />
                </button>
            </div>

            {/* MOBILE MENU */}
            <div className={`mobile-menu ${open ? "show" : ""}`}>
                <ScrambleText text='Solutions' />
                <ScrambleText text='Technology' />
                <ScrambleText text='About' />
                <ScrambleText text='Careers' />
                <ScrambleText text='Resources' />
                <ScrambleText text='Contact' />
            </div>
        </header>
    )
}
