import React from 'react';
import './Header.css';
import Content from './Components/Content'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
        <header className="header">
            <div className="nav-container">
                <div className="logo">
                <h1>KCC MULTIPLEX</h1>
                </div>
                <nav className="nav">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    <li><a href="/buy-tickets">Buy Tickets</a></li>
                    <li><a href="/movies"><font color="Orange">Movies</font></a></li>
                    <li><a href="/cinemas">Cinemas</a></li>
                </ul>
                </nav>
            </div>
        </header>

       
        <Content/>
    </div>  
      
      
   
    
  );
}

export default Header;
