import React, { useState, useContext } from 'react';
import '../Styles/InputFormStyles.css'
import log from '../Assets/log.jpg'
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../App';

const InputForm = () => {
    // const [date, setDate] = useState('');
    // const [time, setTime] = useState('');
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [tele, setTele] = useState('');
    const [moveon, setMoveon] = useState(false);
    const {date, setDate, time, setTime, name, setName, email, setEmail, tele, setTele} = useContext(Context);

    const register = async (e) => {
        e.preventDefault();
            // try {
            //     await axios.post('/input', {Date: date, Time: time, Name: name, Email: email, Telephone: tele})
            //     alert("Signed in successfully")
                setMoveon(true)
            // } catch (error) {
            //     alert("Sign in failed "+error)
            // }
    }

    if(moveon) {
        return <Navigate to={'/seatinput'} />
    }
    return (
        <>
            <section class="header">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer"></link>

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
        <form action="" onSubmit={register}>
            <div class="selections">
                <label for="date" id="lbl">Select date:</label>
                <select name="date" id="inputField" value={date} onChange={e => setDate(e.target.value)}>
                    <option value="MON">Monday</option>
                    <option value="SUN">Sunday</option>
                    <option value="SAT">Saturday</option>
                </select>
            </div>
            <div class="selections">
                <label for="time" id="lbl">Select a Time:</label>
                <select name="time" id="inputField" value={time} onChange={e => setTime(e.target.value)}>
                    <option value="2.00 pm">2.00 pm</option>
                    <option value="6.00 pm">6.00 pm</option>
                </select>
            </div>
            <div class="selections">
                <label for="cusName" id="lbl">Enter Your Name:</label>
                <input type="text" name="cusName" id="inputField" value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div class="selections">
                <label for="cusMail" id="lbl">Enter Your Email:</label>
                <input type="text" name="cusMail" id="inputField" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div class="selections">
                <label for="cusTel" id="lbl">Enter Your Telephone:</label>
                <input type="text" name="cusTel" id="inputField" value={tele} onChange={e => setTele(e.target.value)}/>
            </div>
            <div class="selectionsButtons">
                <Link to={'/'}><button type="button" class="btn">Previous</button></Link>
                <button type="submit" class="btn"> Next</button>
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

export default InputForm;
