import React from 'react'
import './Plans.css'
import WorkersImage from '../../Assets/workersImage.png'

const Plans = () => {
  return (
    <div>
      <section className="home">
        <div className="container flex">
          <div className="left">
            <div className="img">
              <img src={WorkersImage} alt="" />
            </div>
          </div>
          <div className="right topMargine">
            <h1>PLANS</h1>
            <div className="socialIcon">
              <i className="fa fa-facebook-f facebook"></i>
              <i className="fa fa-instagram instagram"></i>
              <i className="fa fa-twiter twiter"></i>
              <i className="fa fa-youtube youtube"></i>
            </div>
            <p className='plansPara'>A software developer wanting to launch their own company? Our sample and instruction manual for writing a software development business plan is the ideal response. With the help of our in-depth manual, you'll learn all you need to know about starting and operating a profitable software development company, from market research and financial planning to hiring and supervising your staff. And you can quickly and simply build a professional business plan that will amaze investors and put you on the road to success with our simple-to-use template. Why then wait? Launch your software development company right away to convert your love of coding into a successful business!</p>
            <button className="primary-btn" style={{ cursor: "pointer" }}>Contact Us</button>
          </div>
        </div>
        <div className="plansDeatails">
          <div className="WebPlan">
            <h1>Web Development</h1>
          <p>Web Development Solutions: Custom Application Development, Content, Management System(CMS), Ecommerce Development, MERN Stack Development, MEAN Stack Development, Social Media Apps.</p>
          </div>
          <div className="mobilePlsn">
            <h1>App Development</h1>
          <p>Mobile App Solutions: Android App Development, React Native App Development, Flutter App Development, IOS/iPhone App Development</p>
          </div>
          <div className="graphicPlan">
            <h1>Graphic Designing</h1>
                <p>Graphic Designing and Branding: Logo & Brand Identity, Graphic Design, Explainer Videos, Infographics Design, Print Design, Creative Content Writing.</p>
            </div>
          <div className="degitalMarketing">
            <h1>Degital Marketing</h1>
            <p>Digital Marketing Services: Inbound Marketing, SEO, SEM & PPC, Social Media Optimization, Analystics Consultation, Online Reputation Management, Content Marketing, Email Marketing.</p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Plans
