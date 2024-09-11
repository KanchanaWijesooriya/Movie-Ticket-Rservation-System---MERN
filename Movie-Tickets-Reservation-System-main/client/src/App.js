import './App.css';
import React from 'react';
import Home from './Pages/Home';
import InputForm from './Pages/InputForm';
import SeatInput from './Pages/SeatInput';
import Summary from './Pages/Summary';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import { createContext, useState, useEffect } from "react";
import Success from './Pages/Success';
import Cancel from './Pages/Cancel';

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.withCredentials = true;

export const Context = createContext();

function App() {
  const [hall, setHall] = useState('');
  const [seat, setSeat] = useState([]);
  const [mov, setMov] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tele, setTele] = useState('');
  const [noseats, setNoseats] = useState('');
  const [tot, setTot] = useState('');
  
  return (
    <div className="App">
      <Context.Provider value={{hall, setHall, seat, setSeat, date, setDate, time, setTime, name, setName, email, setEmail, tele, setTele, mov, setMov, noseats, setNoseats, tot, setTot}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cutomer' element={<InputForm/>}/>
        <Route path='/seatinput' element={<SeatInput halno={hall} sett={seat}/>}/>
        <Route path='/summary' element={<Summary mn={mov} d={date} t={time} nt={noseats} to={tot} n={name} p={tele} e={email}/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/cancel' element={<Cancel/>}/>
      </Routes>
      </Context.Provider>
      
    </div>
  );
}

export default App;
