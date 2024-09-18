import React from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './Navbar.css'
import { useState } from 'react';
const Navbar = () => {
    const [menu,setMenu]=useState("home");
    return (
        <nav className="navbar">
            <h1>React Portfolio</h1>
            
            <ul className='nav-menu'>
                 <li><AnchorLink className='anchor-link' href ="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink> </li>
                <li><AnchorLink className='anchor-link'offset={50} href ="#about"><p onClick={()=>setMenu("about")}>About</p></AnchorLink> </li>
                <li><AnchorLink className='anchor-link'offset={50} href ="#services"><p onClick={()=>setMenu("services")}>Services</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href ="#work"><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link'offset ={50}href ="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
              
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link'offset ={50}href ="#contact">Connect with me</AnchorLink></div>
        </nav>
    );
};

export default Navbar;