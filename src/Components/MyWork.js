import React, { useState } from 'react';
import './MyWork.css';
import MyWork_data from '../Assets/mywork_data.js';
// import arrow from '../Components/arrow_044.jpg';

const MyWork = () => {
  const [visibleWorks, setVisibleWorks] = useState(4); 

  const showMoreWorks = () => {
    setVisibleWorks(prevVisibleWorks => prevVisibleWorks + 4);
  };

  return (
    <div id="work" className="my-work">
      <div className="my-work-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="my-work-container">
        {MyWork_data.slice(0, visibleWorks).map((work, index) => (
          <div key={index} className="work-item">
            <img src={work.img} alt={work.title} />
            <p>{work.title}</p>
          </div>
        ))}
      </div>
      {visibleWorks < MyWork_data.length && (
        <button onClick={showMoreWorks} className="my-work-show-more">Show More</button>
      )}
      {/* <img src={arrow} alt="arrow" /> */}
    </div>
  );
};

export default MyWork;
