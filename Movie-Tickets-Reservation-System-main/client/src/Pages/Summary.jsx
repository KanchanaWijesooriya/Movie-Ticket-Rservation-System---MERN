import React from 'react';
import '../Styles/SummaryStyles.css'
import log from '../Assets/log.jpg'
import axios from 'axios';
import {loadStripe} from '@stripe/stripe-js';

const Summary = ({mn, d, t, nt, to, n, p, e}) => {

    const register = async () => {
            try {
                const stripe = await loadStripe('pk_test_51PjlQG01yUiu8H7zrKRvAAw397VwNtPbnibqLYsa8YMLI6dWNuNrpilQryLNOoeNwikBv4IUXSmMtgOCS0oLyBWU009fgIqSdp');
                const response = await axios.post('/input', {Moviename: mn, Date: d, Time: t, Notickets: nt, Total: to, Name: n, Email: e, Telephone: p})
                //alert("Signed in successfully")
                if(response.data.id){
                    const { id } = response.data;
                        stripe.redirectToCheckout({ sessionId: id });
                }
            } catch (error) {
                alert("Sign in failed "+error)
            }
    }
    return (
        <div>
            <section class="header">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer"></link>

            <nav class="navBar">
                <div class="navLinks"><img class="logo" src={log}/>
                    <h2>SCOPE CINEMAS</h2>
                    <ul class="list">
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="contact.html">CONTACT</a></li>
                    </ul>
                </div>
            </nav>
        </section>

        <section class="sumDetails">
            

            
            <h1>Summary</h1>
            <div class="sumOne">

                <div class="topic1"><h2>Movie & Tickets</h2></div>
                <label for="">Movie Name:</label>
                <input type="text" id="mov-name" value={mn} readOnly/><br/><br/>
                <label for="">Show Date:</label>
                <input type="text" id="datee"  value={d} readOnly/><br/><br/>
                <label for="">Show Time:</label>
                <input type="text" id="time"  value={t} readOnly/><br/><br/>
                <label for="">Number Of Tickets:</label>
                <input type="text" id="no_of_seates"  value={nt} readOnly/><br/><br/>
                <label for="">Total:</label>
                <input type="text" id="tot"  value={to} readOnly/><br/><br/>
            </div>
            <div class="sumTwo">
                <div class="topic2"><h2>Your Details</h2></div>
                <label for="">Name:</label>
                <input type="text" id="name" value={n} readOnly/><br/><br/>
                <label for="">Phone Number:</label>
                <input type="text" id="phone" value={p} readOnly/><br/><br/>
                <label for="">Email:</label>
                <input type="text" id="email" value={e} readOnly/>
                
            </div>
            <div id="bs">
            <button id="spec" onClick={register}>Finish</button>
            </div>
           
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
        </div>
    );
}

export default Summary;
