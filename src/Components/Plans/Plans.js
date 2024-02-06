import React from 'react';
import WorkrsImage from '../../Assets/workersImage.png';
import './Plans.css';

const Plans = () => {

  return (
    <div className="mainItem">
      <div className='main-body-items'>
        <div className="text-and-image">
          <img src={WorkrsImage} alt="" className='developerImage' />
          <h1 className='plans-text'>Plans</h1>
        </div>

        <div className="main-image-div">
          <h2>
            The web development roadmap involves mastering HTML, CSS, and JavaScript, progressing to front-end frameworks, learning a back-end language, understanding databases, and acquiring skills in security, optimization, and deployment, with continuous learning and project experience being crucial throughout the journey.</h2>
        </div>
      </div>
    </div>
  )
}

export default Plans
