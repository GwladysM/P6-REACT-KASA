import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.scss'

function Logo() {
    return (
        <img src="/assets/LOGO.png" alt="Logo Kasa" />
    )
}

function Header() {
    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <Logo />
            </div>
            <div>
                <nav>
                    <NavLink className={(nav) => (nav.isActive ? "active" : "non-active")} to="/">Accueil</NavLink>
                    <NavLink className={(nav) => (nav.isActive ? "active" : "non-active")} to="/apropos">A Propos</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header