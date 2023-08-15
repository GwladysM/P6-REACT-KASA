import React from 'react'
import './error.scss'

function Error() {
    return (
        <div className='error'>
            <h1 className='error__h1'>404</h1>
            <h2 className='error__h2'>Oups! La page que vous demandez n'existe pas.</h2>
            <p>Retourner sur la page d'accueil</p>
        </div>
    )
}
export default Error