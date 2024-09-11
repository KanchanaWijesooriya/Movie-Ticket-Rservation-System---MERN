// import React from 'react';
// import styled from 'styled-components';

// const HeaderContainer = styled.div`
//   background-color: #000;
//   color: #fff;
//   padding: 10px 20px;
//   display: flex;
//   justify-content: space-between;
// `;

// const Nav = styled.nav`
//   display: flex;
//   gap: 20px;
// `;

// const Header = () => {
//   return (
//     <HeaderContainer>
//       <h1>KCC MULTIPLEX</h1>
//       <Nav>
//         <a href="#">Home</a>
//         <a href="#">Buy Tickets</a>
//         <a href="#">Movies</a>
//         <a href="#">Cinemas</a>
//         <a href="#">Contact Us</a>
//       </Nav>
//     </HeaderContainer>
//   );
// };

// export default Header;


// src/Header.js
// src/Header.js
import React from 'react';
import './Header.css';
import Content from './Components/Content'
// import './Content.css'

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
                    <li><a href="/">Home</a></li>
                    <li><a href="/buy-tickets">Buy Tickets</a></li>
                    <li><a href="/movies"><font color="Orange">Movies</font></a></li>
                    <li><a href="/cinemas">Cinemas</a></li>
                    <li><a href="/contact-us">Contact Us</a></li>
                </ul>
                </nav>
            </div>
        </header>

       
        <Content/>
    </div>  
      
      
   
    
  );
}

export default Header;
