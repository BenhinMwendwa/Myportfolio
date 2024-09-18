import React from 'react';
import './MyWork.css';
import MyWork_data from '../Assets/mywork_data.js';
import arrow from '../Components/arrow_044.jpg';

const MyWork = () => {
  return (
    <div id ="work" className='my-work'>
      <div className='my-work-title'><h1>My Latest Work</h1></div>
      <div className='my-work-container'>
        {MyWork_data.map((work, index) => (
          <img key={index} src={work.img} alt={`Work ${index + 1}`} />
        ))}
      </div>
      <div className='my-work-show-more'>Show More</div>
      <img src={arrow} alt="arrow"/>
    </div>
  );
};

export default MyWork;
