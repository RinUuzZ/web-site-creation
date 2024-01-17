import React from 'react'
import './Service.css'
import WebDevelopment from '../../Assets/vector-web-development-web-banner.jpg'
import GraphicDesigning from '../../Assets/Graphic-Designing.jpg'
import MobileAppDevelopment from '../../Assets/AppDevelopmnet.jpg'
import DegitalMarketing from '../../Assets/Digital Marketing.jpeg'

const Work = () => {
  return (
    <section id='work'>
        <h2 className="WorksTittle">My Portfolio</h2>
        <span className="workdescrtioption">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className="worksImages">
            <img src={WebDevelopment} alt="" className="worksImage" />
            <img src={GraphicDesigning} alt="" className="worksImage" />
            <img src={MobileAppDevelopment} alt="" className="worksImage" />
            <img src={DegitalMarketing} alt="" className="worksImage" />
        </div>
        <button className="wroksss">See More</button>
    </section>
  )
}

