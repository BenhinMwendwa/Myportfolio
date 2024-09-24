import React from 'react'
import './About.css'
// import pic from "./11.jpeg"
// import picc from "./12.jpeg"
// import piccc from "./13.jpg"
function About() {
  return (
    <div id ='about' className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
        {/* <img src={pic} alt="Profile Pic" /> */}
        </div>
       
        <div className="about-sections">
           <div className="about-left">
            {/* <img src={picc} alt="new" /> */}
            {/* <h2>Benhin Mwendwa</h2> */}
            </div>
            <div className="about-right">
              <div className="about-para">
              <p>I am a dedicated Full Stack Developer with a strong passion for creating engaging and user-centric websites. My love for technology drives me to continuously enhance my skills and stay updated with the latest trends in the field. I have a Bachelor's Degree in Applied Computing from KCA University, and I am currently furthering my education in Software Engineering at Moringa School.</p>
<p>My professional experience includes working with Royalty Technologies and the ICT Authority, where I have gained hands-on expertise in computer hardware and software support, website development, network installation, and server configuration. I am fluent in English and Kiswahili, which allows me to effectively communicate and collaborate in diverse environments.</p>
<p>I am actively seeking new opportunities to contribute to innovative projects and engage with open-source communities. I am also open to remote work, which provides me the flexibility to travel and explore new learning experiences.</p>

          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>FLask</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>Python</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Java programming</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>React.js</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Node.js</p><hr style={{width:"60%"}}/></div>


          </div>
    </div>
    </div>
    <div className="about-achievements">
      <div className="about-achievement">
        <h1>2+</h1>
        <p>Years of Experience</p>
      </div>
      <hr/>
      <div className="about-achievement">
        <h1>10+</h1>
        <p>Projects Compeleted</p>
      </div>
      <hr/>
      <div className="about-achievement">
        <h1>5+</h1>
        <p>Happy Clients</p>
      </div>
      </div></div>
    
  );
}
export default About;