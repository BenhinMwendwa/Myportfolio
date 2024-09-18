import React from 'react'
import './About.css'
import pic from "./11.jpeg"
import picc from "./12.jpeg"
// import piccc from "./13.jpg"
function About() {
  return (
    <div id ='about' className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
        <img src={pic} alt="Profile Pic" />
        </div>
       
        <div className="about-sections">
           <div className="about-left">
            {/* <img src={picc} alt="new" /> */}
            <h2>Benhin Mwendwa</h2>
            </div>
            <div className="about-right">
              <div className="about-para">
              <p>I am a Full Stack Developer, passionate about creating engaging and user-centric websites. I have a deep love for technology and always strive to improve my skills and knowledge. I am currently working remotely and enjoy the freedom to travel and learn new things.</p>
              <p>I have a Bachelor's Degree in Computer Science from a prestigious university in Kenya and a Master's Degree in Software Engineering from the same university. I am currently looking for opportunities to work on projects and contribute to open-source projects.</p>
        
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
        <h1>10+</h1>
        <p>Years of Experience</p>
      </div>
      <hr/>
      <div className="about-achievement">
        <h1>90+</h1>
        <p>Projects Compeleted</p>
      </div>
      <hr/>
      <div className="about-achievement">
        <h1>15+</h1>
        <p>Hppy Clients</p>
      </div>
      </div></div>
    
  );
}
export default About;