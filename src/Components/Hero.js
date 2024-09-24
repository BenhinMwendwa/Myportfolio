import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css';
import profile_img from './Image.jpeg';

const Hero = () => {
  const resumeLink = 'https://drive.google.com/file/d/135xqNF0twHazBNfRknWbDHMm7M_6dQzc/view?usp=sharing'; // Replace this with your actual Google Drive link

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="profile" />
      <h1>
        <span>I am Benhin Mwendwa</span> Full stack developer based in Kenya
      </h1>
      <p>I am passionate about creating engaging and user-centric websites.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
