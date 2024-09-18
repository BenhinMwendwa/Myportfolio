import React, { useState } from 'react';
import './contact.css';
import Mail_icon from './mail.jpg';
import Call from './call.jpg';
import Location from './loc.webp';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f5b9e6a6-a8f8-43e8-a977-d5912e7bb7b1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setIsSubmitted(true); // Update the state to show the success message
      setMessage('Thank you for contacting us! We will get back to you shortly.');
    } else {
      setIsSubmitted(true);
      setMessage('Oops! Something went wrong. Please try again later.');
    }
  };

  return (
    <div id="contact" className='contact'>
      <div className='contact-title'>
        <h1>Contact Me</h1>
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's Talk</h1>
          <p>I am currently available</p>
          <p>Monday to Friday: 9am to 5pm</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={Mail_icon} alt='mail' /><p>benhinmwendwa7@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={Call} alt='call' /><p>017307513</p>
            </div>
            <div className='contact-detail'>
              <img src={Location} alt='location' /><p>Kenya</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor='name'>Your Name</label>
          <input type='text' placeholder='Your Name' name='name' required />
          <label htmlFor='email'>Your Email</label>
          <input type='email' placeholder='Enter Your email' name='email' required />
          <label htmlFor='message'>Write your Message here</label>
          <textarea rows="8" placeholder='Enter your message' name='message' required />
          <button type="submit" className='contact-submit'>Submit</button>
        </form>
      </div>

      {/* Success message */}
      {isSubmitted && (
        <div className='contact-success'>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
