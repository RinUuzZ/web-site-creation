import React,{useState} from 'react'
import './Contact.css'

function Contact (){

 
    const [formData, setFormData] = useState({
        fullname: '',
        email:'',
        message:'',
        // Other form fields if any
      });

      const [serverResponse, setServerResponse] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

   


    const handleSubmit = async (e) => {
        e.preventDefault();
   
        try {
          // Make a POST request to the server with form data
          const response = await fetch('http://localhost:4000/contactform', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ formData }),
          });
   
          // Parse the response JSON
          const responseData = await response.json();
   
          // Update state with the server response
          setServerResponse(responseData);
         
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      

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
              <form method="POST" onSubmit={handleSubmit}>
                <h2>Send Message</h2>
                <div className="inputBox">
                  <input type="text" name="fullname" required="required" value={formData.name} onClick={handleChange}/>
                  <span>Full Name</span>
                </div>
                <div className="inputBox">
                  <input type="text" name="email" required="required" value={formData.email} onClick={handleChange}/>
                  <span>Email</span>
                </div>
                <div className="inputBox">
                  <textarea required="required" defaultValue={""}  name="message" value={formData.message} onClick={handleChange}/>
                  <span>Type Your Message.....</span>
                </div>
                <div className="inputBox">
                  <input type="submit" name defaultValue="Send" />
                </div>
              </form>
              {serverResponse && <p>{serverResponse.message}</p>}
            </div>
          </div>
        </section>
      </div>
  )
}}

export default Contact
