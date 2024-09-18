import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import"./Hero.css"
 import profile_img from "./Image.jpeg"
const Hero = () => {
  return (
    <div id="home" className='hero'>
      { <img src={profile_img} alt="profile" /> } 
      <h1><span>I am  Benhin Mwendwa</span> Full stack developer based in kenya</h1>
      <p>I am passionate about creating engaging and user-centric websites.</p>
      <div className='hero-action'>
      <div className="hero-connect"><AnchorLink className='anchor-link'offset ={50}href ="#contact">Connect with me</AnchorLink>

        </div>
        <div className='hero-resume'>
          <a href="https://benhinmwendwa.github.io/resume/">View Resume</a>
    </div>
    </div>
    </div>
  );
}

export default Hero;
