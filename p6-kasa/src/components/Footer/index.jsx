import React from 'react'
import './footer.scss'

function Logo() {
    return (
        <img id='footer__logo' src="./assets/LOGOn&b.png" alt="Logo Kasa" />
    )
}
function Footer() {
    return (
        <div className='footer'>
            <Logo />
            <p>© 2020 Kasa. All rights reserved</p>
        </div >
    )
}

export default Footer