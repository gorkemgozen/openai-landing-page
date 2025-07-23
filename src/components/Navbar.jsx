import { useState } from 'react';
import NavbarLogo from '../assets/OpenAI-white-wordmark.png';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-logo-box">
                <img src={NavbarLogo} className='navbar-logo' alt="OpenAI Logo" />
            </div>
            <div className="navbar-right">
                <div className="baska-bisey">
                    <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" width="1em" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M13.8333 13.8333L10.7022 10.7022M10.7022 10.7022C11.607 9.79738 12.1667 8.54738 12.1667 7.16667C12.1667 4.40525 9.9281 2.16667 7.16667 2.16667C4.40525 2.16667 2.16667 4.40525 2.16667 7.16667C2.16667 9.9281 4.40525 12.1667 7.16667 12.1667C8.54738 12.1667 9.79738 11.607 10.7022 10.7022Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className="oturum-ac-button">Oturum aç</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar