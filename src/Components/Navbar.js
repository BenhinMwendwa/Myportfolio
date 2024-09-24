import React, { useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_icon from './menu.png';
import menu_close from './close.jpg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <img src={menu_icon} alt="" className='nav-open' onClick={toggleMenu} />

            <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <img src={menu_close} alt="menu" className='nav-close' onClick={toggleMenu} />
                <li><AnchorLink className='anchor-link' href="#home">Home</AnchorLink></li>
                <li><AnchorLink className='anchor-link' href="#about">About</AnchorLink></li>
                <li><AnchorLink className='anchor-link' href="#services">Services</AnchorLink></li>
                <li><AnchorLink className='anchor-link' href="#work">Portfolio</AnchorLink></li>
                <li><AnchorLink className='anchor-link' href="#contact">Contact</AnchorLink></li>
            </ul>
            <div className="nav-connect">
                <AnchorLink className='anchor-link' href="#contact">Connect with me</AnchorLink>
            </div>
        </nav>
    );
};

export default Navbar;
