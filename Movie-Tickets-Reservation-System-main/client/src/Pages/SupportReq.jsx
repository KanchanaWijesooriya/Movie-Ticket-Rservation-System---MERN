import React from 'react';
import "../Styles/SupReqStyles.css";
import log from '../Assets/log.jpg';
import { Link } from 'react-router-dom';

const SupportReq = () => {
    return (
        <div>
            <section className="header2">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer"></link>
                <nav className="navBar">
                    <div className="navLinks">
                        <img className="logo" src={log} alt="logo" />
                        <h2>SCOPE CINEMAS</h2>
                        <ul className="list">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="textBox">
                    <h1>Support Request</h1>
                    <p>
                        Whether you have questions about movie showtimes, ticket availability, or need assistance with your reservation, our team is ready to assist you promptly.
                    </p>
                </div>
            </section>

            <div className="container">
                <form>
                    <h1>Support Request</h1>
                    <input type="text" id="firstName" placeholder="First Name" required />
                    <input type="text" id="subject" placeholder="Subject" required />
                    <input type="email" id="email" placeholder="Email" required />
                    <input type="text" id="mobile" placeholder="Mobile" required />
                    <h4>Type Your Message Here..</h4>
                    <textarea required></textarea>
                    <input type="submit" value="Send" id="button" />
                </form>
            </div>

            {/* Footer Section */}
            <section className="footer">
                <div>
                    <h1>Scope Cinemas</h1>
                    <h3>We’re doing our part to help keep you safe.</h3>
                    <h5>
                        With cinemas now open, your safety and comfort is our priority. 
                        We’re committed to keeping our cinemas, employees and patrons in 
                        line with prevailing health and safety guidelines issued by local 
                        authorities, as well as our own expert-backed suggestions. We humbly request 
                        you familiarize yourself with our guidelines and check back often for updates, 
                        in order to have an uninterrupted cinematic experience at Scope Cinemas.
                    </h5>
                    <a href="https://www.facebook.com/scopecinemas/">
                        <i className="fa-brands fa-square-facebook fa-2xl"></i>
                    </a>
                    <a href="https://www.instagram.com/explore/locations/1499326136835992/scope-cinemas-multiplex-at-colombo-city-centre/">
                        <i className="fa-brands fa-instagram fa-2xl"></i>
                    </a>
                    <a href="https://twitter.com/ScopeCinema_">
                        <i className="fa-brands fa-twitter fa-2xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/scope-cinemas">
                        <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default SupportReq;
