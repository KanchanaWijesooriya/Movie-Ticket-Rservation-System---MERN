import React from 'react';
import '../Styles/ContactStyles.css';
import log from '../Assets/log.jpg';
import home from '../Assets/home.png';
import contact from '../Assets/contact-us.png';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <section className="header1">
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
                    <h1>Contact Us</h1><br /><br />
                    <p>
                        Whether you are a movie distributor, an aspiring producer or looking to advertise your brand at our cinemas, or simply feedback on your experience, we would love to hear from you.
                    </p>
                </div>
            </section>

            <section className="services">
                <div className="card">
                    <div className="icon">
                        <img src={home} alt="" />
                    </div>
                    <h2>Miss Something!</h2>
                    <h4>Go back to Home Page</h4>
                    <p>
                        Missed something or encountered an issue during your movie ticket reservation? Let us know!<br />
                        Your feedback helps us improve our service.<br />
                        If you'd like to return to the homepage to continue exploring available movies and showtimes, simply click the "Home" button.<br />
                        Thank you for choosing our platform for your movie ticket needs!
                    </p>
                    <a href="/" className="button">Go to Home</a>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={contact} alt="" />
                    </div>
                    <h2>Contact Us</h2>
                    <h4>Contact Our Support</h4>
                    <p>
                        Need assistance or have any inquiries? <br />
                        Our dedicated agents are here to help you!<br />
                        Whether you have questions about movie showtimes, ticket availability, or need assistance with your reservation, our team is ready to assist you promptly.<br />
                        Thank you for choosing our platform for your movie ticket reservations. We look forward to serving you!
                    </p>
                    <a href="/SupportReq" className="button">Go to Support</a>
                </div>
            </section>

            <section className="footer">
                <div>
                    <h1>Scope Cinemas</h1>
                    <h3>We’re doing our part to help keep you safe.</h3>
                    <h5>
                        With cinemas now open, your safety and comfort is our priority.
                        We’re committed to keeping our cinemas, employees, and patrons in
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

export default Contact;
