import React, { useState } from 'react'
import './Header.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from '../../../Assets/Oliwon Logo-01.png'
import instagram from '../../../Assets/instagram-new-outline.png'
import whatsApp from '../../../Assets/whatsApp.png'
import faceBook from '../../../Assets/facebook.png'
import threads from '../../../Assets/threadss.png'
import linkedInd from '../../../Assets/linkedin.png'
import emai from '../../../Assets/email-clipart-transparent-12 (1).png'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'

const Header = () => {
    const [sideBar, setSideBar] = useState(false);

    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header")
        header.classList.toggle("active", window.screenY > 200)
    })

    return (
        <header className="header" style={{ backgroundImage: "" }}>
            <div className="container flex">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <Router>
                    <div className="nav">
                        <ul className={sideBar ? 'nav-links-sidebar' : 'nav-links'} onClick={() => setSideBar(false)}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li> <Link to="/services">Services</Link></li>
                            <li> <Link to="/plans">Plans</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <div className='icons'>
                                <ul>
                                    <li className="icon">
                                        <a href="https://www.instagram.com/ollinwon?igsh=MXZ0a2NiNHNkYjRxZw==" target="_blank" rel="noopener noreferrer">
                                            <img src={instagram} alt="Instagram" className='headerIcons' /></a>

                                        <a href="https://wa.me/message/PK6UNO6XDCFUG1   " target="_blank" rel="noopener noreferrer">
                                            <img src={whatsApp} alt="WhatsApp" className='headerIcons' />
                                        </a>
                                        <a href="https://www.facebook.com/profile.php?id=61551080944269&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                            <img src={faceBook} alt="Facebook" className='headerIcons' />
                                        </a>
                                        <a href='https://www.threads.net/' target="_blank" rel="noopener noreferrer">
                                            <img src={threads} alt="Threads" className='headerIcons' /></a>

                                        <a href="https://www.linkedin.com/in/sareenajaseem" target="_blank" rel="noopener noreferrer">
                                            <img src={linkedInd} alt="LinkedIn" className='headerIcons' />
                                        </a>
                                        <a href="mailto:yourname@example.com" target="_blank" rel="noopener noreferrer">
                                            <img src={emai} alt="Email" className='headerIcons' />
                                        </a>
                                        <a href="https://twitter.com/iqjita" target="_blank" rel="noopener noreferrer" class="twitter-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                    <button className='nav-bar-items-icon' onClick={() => setSideBar(!sideBar)}>
                        {sideBar ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </Router>
            </div>
        </header>
    );
};

export default Header;
