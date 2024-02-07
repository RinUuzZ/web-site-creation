import React,{useState} from 'react'
import './Contact.css'

function Contact (){

  const [formData, setFormData] = useState({
    fullname: '',
    email:'',
    mobilenumber:'',
    message:''
  });
  const [serverResponse, setServerResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api', {
     method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(formData).toString(),
      });

      const responseData = await response.json();
      setServerResponse(responseData);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
  
    const handleChange = (e) => {
      
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
 
    

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
                  <p>+91 8590083588</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </div>
                <div className="text">
                  <h3>Email</h3>
                  <p>ollinwonofficial@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="contactForm">
              <form method="POST" onSubmit={handleSubmit} enctype="application/x-www-form-urlencoded" >
                <h2>Send Message</h2>

                <div className="inputBox">
                  <input type="text" name="fullname" required="required"  onChange={handleChange} />
                  <span>Full Name</span>
                </div>

                <div className="inputBox">
                  <input type="text" name="email" required="required"  onChange={handleChange} />
                  <span>Email</span>
                </div>

                <div className="inputBox">
                  <input type="text" name="mobilenumber" required="required"  onChange={handleChange} />
                  <span>Mobile Number</span>
                </div>

                <div className="inputBox">
                  <textarea required="required" onChange={handleChange}  name="message" />
                  <span>Type Your Message.....</span>
                </div>
                
                  <button type="submit" className='submitButton'>Submit</button>
                
              </form>
              {serverResponse && <p>{serverResponse.message}</p>}
            </div>
          </div>
        </section>
      </div>
  )
}

export default Contact