import React, { useState } from 'react'
import './Navbar.css'

function Navbar_func() {
    const [mobile, func_mobile] = useState(1)
    return(
        <nav className='NavbarItems'>
            <h2 className="navbar-logo">
                <a href='/shreyas'>
                    Communication Portal
                </a>
            </h2>

            <div className='menu-icon' onClick={()=>func_mobile(mobile*-1)}>
                <i className={mobile>0 ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
{/* <---
            <ul className={mobile>0 ? 'dropdown' : 'clear'}>
                <li><a className="nav-links" href="/">Home</a></li>
                <li><a className="nav-links" href='/contacts'>Contacts</a></li>
                <li><a className="SignIn" href='/signin'>Signin</a></li>
            </ul>
---> */}
            <ul className="nav-menu">
                <li><a className="nav-links" href="/">Home</a></li>
                <li><a className="nav-links" href='/send-messages'>Send Message</a></li>
                <li><a className="SignIn" href='/signin'>Signin</a></li>
            </ul>

        </nav>
    );
}

export default Navbar_func