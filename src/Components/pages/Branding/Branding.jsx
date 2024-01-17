import React from 'react'
import './Branding.css';

const Branding = () => {
  return (
    <div className='body'>
      <section id='skills'>
            <span className="skillTittle">What We do</span>
            <span className="skillDiscr `iption">The only way to empower people is to educate them. IQJITA helps aspirants stay ahead in the industrial revolution. We prepare you to launch your career by providing supportive, creative, skill-based, flexible and professional environment programs that enable you to establish a solution that suits your learning needs.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src="http://www.pngmart.com/files/7/Web-Design-PNG-Photos.png" alt="" className="skillBarImage" />
                    <div className="skillBarText">
                        <h2>Website Designing and Development</h2>
                        <p>Many websites choose to display a short explanatory text in a prominent position of their web page layouts to inform visitors what the purpose of the site is. This introductory text, when crafted well, can help users quickly decide whether they’re in the right place or not.  The field encompasses a broad range of tasks including everything from coding, to technical design, to the performance of a website or application running on the internet.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src="https://freepngimg.com/thumb/graphic_design/3-2-graphic-design-free-download-png.png" alt="" className="skillBarImage" />
                    <div className="skillBarText">
                        <h2>Graphic Designing</h2>
                        <p>Web development is the act of building, creating and maintaining websites. The field encompasses a broad range of tasks including everything from coding, to technical design, to the performance of a website or application running on the internet</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src="https://www.pinclipart.com/picdir/big/528-5288409_mobile-app-development-clipart.png" alt="" className="skillBarImage" />
                    <div className="skillBarText">
                        <h2>Mobile App Development</h2>
                        <p>The process of developing software applications for mobile platforms, such as smartphones, tablets, or digital assistants, is referred to as mobile app development. This calls for the use of tools and programming languages created especially for mobile platforms, such as Swift for iOS and Java for Android. </p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src="https://www.imagensempng.com.br/wp-content/uploads/2021/05/05-2.png" alt="" className="skillBarImage" />
                    <div className="skillBarText">
                        <h2>Degital Marketing</h2>
                        <p>In today's digital age, typing has become an essential skill that is required in various aspects of life. From school assignments to work reports, being able to type quickly and accurately can save you a significant amount of time and effort. This is where online typing practice speed tests come in handy.</p>
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Branding
