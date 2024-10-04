import React from 'react';
import '../Styles/InputFormStyles.css'
import log from '../Assets/log.jpg'
import { Link } from 'react-router-dom';

const InputForm1 = () => {
    return (
        <>
            <section className="header">
        <nav class="navBar">
            <div class="navLinks"><img class="logo" src={log} alt='logo'/>
                <h2>SCOPE CINEMAS</h2>
                <ul class="list">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </div>
        </nav>
            </section>
            
    <section class="venue">
        <form action="addNUNdata.php" method="post">
            <div class="selections">
                <label for="date" id="lbl">Select date:</label>
                <select name="date" id="inputField">
                    <option value="MON">Monday</option>
                    <option value="SUN">Sunday</option>
                    <option value="SAT">Saturday</option>
                </select>
            </div>
            <div class="selections">
                <label for="time" id="lbl">Select a Time:</label>
                <select name="time" id="inputField">
                    <option value="2.00 pm">2.00 pm</option>
                    <option value="6.00 pm">6.00 pm</option>
                </select>
            </div>
            <div class="selections">
                <label for="cusName" id="lbl">Enter Your Name:</label>
                <input type="text" name="cusName" id="inputField"/>
            </div>
            <div class="selections">
                <label for="cusMail" id="lbl">Enter Your Email:</label>
                <input type="text" name="cusMail" id="inputField"/>
            </div>
            <div class="selections">
                <label for="cusTel" id="lbl">Enter Your Telephone:</label>
                <input type="text" name="cusTel" id="inputField"/>
            </div>
            <div class="selectionsButtons">
                <a href="index.html"><button type="button" class="btn">Previous</button></a>
                <button type="submit" name="insert" class="btn"> Next</button>
            </div>
        </form>
    </section>
    <section class="footer">
        <div>
            <h1>Scope Cinemas</h1>
            <h3>We're doing our part to help keep you safe.</h3>
            <h5>
                With cinemas now open, your safety and comfort is our priority. 
                We're committed to keeping our cinemas, employees and patrons in 
                line with prevailing healthy and safety guidelines issued by local 
                authorities, as well as our own expert-backed suggestions. We humbly request 
                you familiarize yourself with our guidelines and check back often for updates, 
                in order to have an uninterrupted cinematic experience at Scope Cinemas.
            </h5>
            <a href="https://www.facebook.com/scopecinemas/"><i class="fa-brands fa-square-facebook fa-2xl"></i></a>
            <a href="https://www.instagram.com/explore/locations/1499326136835992/scope-cinemas-multiplex-at-colombo-city-centre/"><i class="fa-brands fa-instagram fa-2xl"></i></a>
            <a href="https://twitter.com/ScopeCinema_"><i class="fa-brands fa-twitter fa-2xl"></i></a>
            <a href="https://www.linkedin.com/company/scope-cinemas"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
        </div>
    </section>
        </>
    );
}

export default InputForm1;
