import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

function Logo() {
    return (
        <img src="./assets/LOGO.png" alt="Logo Kasa" />
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
                    <Link className='navbar__link' to="/">Accueil</Link>
                    <Link className='navbar__link' to="/apropos">A Propos</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header