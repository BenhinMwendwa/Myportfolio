import React from 'react';
import './Footer.css';
import footer from './footer.png';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img src={footer} alt="footer" />
          <p>I am a full stack developer based in Kenya</p>
        </div>
        <div className='footer-top-right'>
          <div className='footer-email-input'>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className='footer-bottom'>
        <div className='footer-bottom-right'>
          <p>© 2023 Benhin Mwendwa. All rights reserved.</p>
        </div>
        <div className='footer-bottom-right'>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
