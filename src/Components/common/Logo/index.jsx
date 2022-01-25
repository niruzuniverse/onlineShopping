import React from 'react'
import './styles.css'
import logoImg from './logo.png'
const Logo = () => {
    return (
        <div className='logo'>
            <div>
                <img src={logoImg} alt='logo'/>
                <span>
                    <b>Yummy</b>
                </span>
            </div>
            <p>
                <b>food</b>
            </p>
        </div>
    )
}

export default Logo
