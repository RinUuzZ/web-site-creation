import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
        <section className="contact">
          <div className="content">
            <h2>Contact Us</h2>
            <p>By contacting us you can also get valuable feedback and if you need more facilities we can do it. No need to hesitate.</p>
          </div>
          <div className="container">
            <div className="contactInfo">
              <div className="box">
                <div className="icon">
                  <i className="fa fa-map-marker" aria-hidden="true" />
                </div>
                <div className="text">
                  <h3>Address</h3>
                  <p>Smart trade citty Kottakkal <br /> Malappuram (Drct)</p>
                </div>
              </div>
              <div className="box">
                <div className="icon1">
                <i className="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div className="text">
                  <h3>Phone</h3>
                  <p>8590083588</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </div>
                <div className="text">
                  <h3>Email</h3>
                  <p>ollinwon@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="contactForm">
              <form>
                <h2>Send Message</h2>
                <div className="inputBox">
                  <input type="text" name required="required" />
                  <span>Full Name</span>
                </div>
                <div className="inputBox">
                  <input type="text" name required="required" />
                  <span>Email</span>
                </div>
                <div className="inputBox">
                  <textarea required="required" defaultValue={""} />
                  <span>Type Your Message.....</span>
                </div>
                <div className="inputBox">
                  <input type="Submit" name defaultValue="Send" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Contact
