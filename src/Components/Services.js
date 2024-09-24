import React from 'react';
import './Services.css';
// import picccc from './13.jpeg';
//  import arrow from '../Components/arrow_044.jpg';
import Services_Data from '../Assets/service_data.js';

function Services() {
  return (
    <div id ="services" className='services'>
      <div className='services-title'>
        <h1>Services</h1>
        {/* <img src={picccc} alt="Service Pic" /> */}
      </div>
      <div className='services-container'>
        {Services_Data.map((service, index) => (
          <div key={index} className='services-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_description}</p>
            <div className='services-readmore'>
              {/* <p>Read More</p>
<img src={arrow} alt="arrow"/> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
