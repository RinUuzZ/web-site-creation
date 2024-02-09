import React from 'react'
import './Branding.css';

const Branding = () => {
    return (
        <div className='body'>
            <section id='skills'>

                <span className="skillTittle">What We do</span>

                <span className="skillDiscr `iption">
                    At Ollinwon, we specialize in crafting exceptional digital experiences tailored to meet your unique business needs. Our dedicated team of experts merges creativity with technical prowess to deliver cutting-edge web solutions that drive results and exceed expectations.
                    .</span>

                <div className="skillBars">

                    <div className="skillBar">
                        <img src="http://www.pngmart.com/files/7/Web-Design-PNG-Photos.png" alt="" className="skillBarImage" />
                        <div className="skillBarText">
                            <h2>Website Designing and Development</h2>
                            <p>Many websites choose to display a short explanatory text in a prominent position of their web page layouts to inform visitors what the purpose of the site is. This introductory text, when crafted well, can help users quickly decide whether they’re in the right place or not.  The field encompasses a broad range of tasks including everything from coding, to technical design, to the performance of a website or application running on the internet.</p>
                        </div>
                    </div>
                    
                <div className="skillBar">
                    <img src="https://marketing.legal/files/AMBX545453KPG5T/images/marketing-seo/responsive-web-design.png" alt="" className="skillBarImage" />
                    <div className="skillBarText">
                        <h2>Responsive Design</h2>
                        <p>In today's digital landscape, having a responsive website is non-negotiable. Our websites are meticulously designed to adapt seamlessly to all screen sizes and devices, ensuring an optimal user experience no matter how your audience accesses your site.</p>
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
                    <img src="http://www.pngall.com/wp-content/uploads/5/Service-Maintenance-Transparent.png" alt="" className="skillBarImage" />
                    <div className="skillBarText">
                        <h2>Ongoing Support and Maintenance</h2>
                        <p>Our commitment to your success doesn't end after launch. We offer comprehensive support and maintenance services to keep your website running smoothly and securely. From software updates to troubleshooting, we're here to provide the ongoing assistance you need.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src="http://pluspng.com/img-png/e-commerce-png-download-ecommerce-png-images-transparent-gallery-advertisement-952.png" alt="" className="skillBarImage" />
                    <div className="skillBarText">
                        <h2>E-commerce Solutions</h2>
                        <p>Looking to take your business online? We specialize in developing powerful e-commerce solutions that streamline the buying process and drive conversions. From inventory management to secure payment gateways, we handle every aspect of your online store's development.</p>
                    </div>
                </div>


                <div className="getStarte" >
                    <h3>Let's Get Started</h3>
                    <h4>Ready to elevate your online presence? Contact us today to discuss your project and discover how we can help you achieve your goals.</h4>
                </div>

                </div>
            </section>
        </div>
    )
}

export default Branding
