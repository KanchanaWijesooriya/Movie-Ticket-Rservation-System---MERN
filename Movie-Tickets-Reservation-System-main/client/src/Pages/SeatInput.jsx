import React, { useState, useEffect, useContext } from 'react';
import '../Styles/SeatInputStyles.css'
import log from '../Assets/log.jpg'
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { Context } from '../App';


const SeatInput = ({halno, sett}) => {
    
    // alert(halno)
    // alert(sett)

    const {setNoseats, setTot} = useContext(Context);

    const [moveon, setMoveon] = useState(false);
    const [dis, setDis] = useState({A1: false, B1: false, C1: false, D1: false, E1: false, F1: false, G1: false,
                                    A2: false, B2: false, C2: false, D2: false, E2: false, F2: false, G2: false,
                                    A3: false, B3: false, C3: false, D3: false, E3: false, F3: false, G3: false,
                                    A4: false, B4: false, C4: false, D4: false, E4: false, F4: false, G4: false,
                                    A5: false, B5: false, C5: false, D5: false, E5: false, F5: false, G5: false,
                                    A6: false, B6: false, C6: false, D6: false, E6: false, F6: false, G6: false
                                    });
            


    // const [check, setCheck] = useState({A1: false, B1: false, C1: false, D1: false, E1: false, F1: false, G1: false,
    //                                 A2: false, B2: false, C2: false, D2: false, E2: false, F2: false, G2: false,
    //                                 A3: false, B3: false, C3: false, D3: false, E3: false, F3: false, G3: false,
    //                                 A4: false, B4: false, C4: false, D4: false, E4: false, F4: false, G4: false,
    //                                 A5: false, B5: false, C5: false, D5: false, E5: false, F5: false, G5: false,
    //                                 A6: false, B6: false, C6: false, D6: false, E6: false, F6: false, G6: false
    //                                 });
    // const [newMovie, setNewMovie] = useState({ hall: '', name: '', banner: '', trailer: '' });
    const [a1, setA1] = useState(false);
    const [b1, setB1] = useState(false);
    const [c1, setC1] = useState(false);
    const [d1, setD1] = useState(false);
    const [e1, setE1] = useState(false);
    const [f1, setF1] = useState(false);
    const [g1, setG1] = useState(false);

    const [a2, setA2] = useState(false);
    const [b2, setB2] = useState(false);
    const [c2, setC2] = useState(false);
    const [d2, setD2] = useState(false);
    const [e2, setE2] = useState(false);
    const [f2, setF2] = useState(false);
    const [g2, setG2] = useState(false);

    const [a3, setA3] = useState(false);
    const [b3, setB3] = useState(false);
    const [c3, setC3] = useState(false);
    const [d3, setD3] = useState(false);
    const [e3, setE3] = useState(false);
    const [f3, setF3] = useState(false);
    const [g3, setG3] = useState(false);

    const [a4, setA4] = useState(false);
    const [b4, setB4] = useState(false);
    const [c4, setC4] = useState(false);
    const [d4, setD4] = useState(false);
    const [e4, setE4] = useState(false);
    const [f4, setF4] = useState(false);
    const [g4, setG4] = useState(false);

    const [a5, setA5] = useState(false);
    const [b5, setB5] = useState(false);
    const [c5, setC5] = useState(false);
    const [d5, setD5] = useState(false);
    const [e5, setE5] = useState(false);
    const [f5, setF5] = useState(false);
    const [g5, setG5] = useState(false);

    const [a6, setA6] = useState(false);
    const [b6, setB6] = useState(false);
    const [c6, setC6] = useState(false);
    const [d6, setD6] = useState(false);
    const [e6, setE6] = useState(false);
    const [f6, setF6] = useState(false);
    const [g6, setG6] = useState(false);


    //making an int array out of
    const getBooleanArray = () => {
        const states = [
            a1, b1, c1, d1, e1, f1, g1,
            a2, b2, c2, d2, e2, f2, g2,
            a3, b3, c3, d3, e3, f3, g3,
            a4, b4, c4, d4, e4, f4, g4,
            a5, b5, c5, d5, e5, f5, g5,
            a6, b6, c6, d6, e6, f6, g6,
        ];
    
        return states.map(state => state ? 1 : 0);
    }
    
    // Example usage
    const intArray = getBooleanArray();
    console.log(intArray);

    //Counting ones for total
    const countOnes = (arr) => {
        return arr.reduce((count, num) => count + (num === 1 ? 1 : 0), 0);
      };
      const onesCount = countOnes(intArray);

    //Logical OR
    function elementWiseLogicalOr(arr1, arr2) {
        if (arr1.length !== arr2.length) {
          throw new Error("Arrays must have the same length");
        }
      
        return arr1.map((val, index) => val || arr2[index]);
      }
      
      const result = elementWiseLogicalOr(intArray, sett);
      
      console.log(result); // Output: [1, 1, 0, 1, 0]
      

      //Disableing seats
    const updateDisState = (arr) => {
        const keys = Object.keys(dis);
        if (arr.length !== keys.length) {
            console.error("Array length does not match the number of state keys.");
            return;
        }
    
        const updatedState = keys.reduce((acc, key, index) => {
            acc[key] = arr[index] === 1;
            return acc;
        }, {});
    
        setDis(updatedState);
    }



    // const handleInputChange = (e) => {
    //     const { name, checked } = e.target;
    //     setCheck(prevMovie => ({
    //       ...prevMovie,
    //       [name]: checked
    //     }));
    //   };

    //   const intArray = Object.values(check).map(value => value ? 1 : 0);

    //   const trueCount = Object.values(check).filter(value => value === true).length;

    //   const trueKeys = Object.entries(check)
    //   .filter(([key, value]) => value === true)
    //   .map(([key]) => key);

    //   const trueKeys = Object.entries(check)
    // .filter(([key, value]) => value === true)
    // .map(([key, value]) => key);


      useEffect(() => {
        updateDisState(sett)
      },[sett]);

      const senddata = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/array', {Hall: halno, Seats: result})
            //alert("updated successfully")
            setNoseats(onesCount)
            const totnum = onesCount*1250
            setTot(totnum)
            setMoveon(true)
        } catch (error) {
            alert("update error "+error)
        }
      }

      if(moveon) {
        return <Navigate to={'/summary'} />
    }



    return (
        <>
            <section class="header">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer"></link>

            <nav class="navBar">
                <div class="navLinks">
                    <img class="logo" src={log} alt="the logo"/>
                    <h2>SCOPE CINEMAS</h2>
                    <ul class="list">
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="contact.html">CONTACT</a> </li>
                    </ul>
                </div>
            </nav>
        </section>
        
        <section class="seats1"  >
            <div class="sTitle">
                <h2>SCREEN</h2>
            </div>
           <div classs="seats">
            <ul>
                <li>
                    <input type="checkbox" id="check1A" name="hall" disabled={dis.A1} value={a1} onChange={e => setA1(e.target.checked)} className={dis.A1 ? 'disabled-checkbox' : ''}/>
                    <label for="check1A">1A</label>
                </li>
                <li>
                    <input type="checkbox" id="check1B" name="check" disabled={dis.B1} value={b1} onChange={e => setB1(e.target.checked)}/>
                    <label for="check1B">1B</label>
                </li>
                <li>
                    <input type="checkbox" id="check1C" name="check" disabled={dis.C1} value={c1} onChange={e => setC1(e.target.checked)}/>
                    <label for="check1C">1C</label>
                </li>
                <li>
                    <input type="checkbox" id="check1D" name="check" disabled={dis.D1} value={d1} onChange={e => setD1(e.target.checked)}/>
                    <label for="check1D">1D</label>
                </li>
                <li>
                    <input type="checkbox" id="check1E" name="check" disabled={dis.E1} value={e1} onChange={e => setE1(e.target.checked)}/>
                    <label for="check1E">1E</label>
                </li>
                <li>
                    <input type="checkbox" id="check1F" name="check" disabled={dis.F1} value={f1} onChange={e => setF1(e.target.checked)}/>
                    <label for="check1F">1F</label>
                </li>
                <li>
                    <input type="checkbox" id="check1G" name="check" disabled={dis.G1} value={g1} onChange={e => setG1(e.target.checked)}/>
                    <label for="check1G">1G</label>
                </li>
            </ul>
            <ul>
                <li>
                    <input type="checkbox" id="check2A" name="check" disabled={dis.A2} value={a2} onChange={e => setA2(e.target.checked)}/>
                    <label for="check2A">2A</label>
                </li>
                <li>
                    <input type="checkbox" id="check2B" name="check" disabled={dis.B2} value={b2} onChange={e => setB2(e.target.checked)}/>
                    <label for="check2B">2B</label>
                </li>
                <li>
                    <input type="checkbox" id="check2C" name="check" disabled={dis.C2} value={c2} onChange={e => setC2(e.target.checked)}/>
                    <label for="check2C">2C</label>
                </li>
                <li>
                    <input type="checkbox" id="check2D" name="check" disabled={dis.D2} value={d2} onChange={e => setD2(e.target.checked)}/>
                    <label for="check2D">2D</label>
                </li>
                <li>
                    <input type="checkbox" id="check2E" name="check" disabled={dis.E2} value={e2} onChange={e => setE2(e.target.checked)}/>
                    <label for="check2E">2E</label>
                </li>
                <li>
                    <input type="checkbox" id="check2F" name="check" disabled={dis.F2} value={f2} onChange={e => setF2(e.target.checked)}/>
                    <label for="check2F">2F</label>
                </li>
                <li>
                    <input type="checkbox" id="check2G" name="check" disabled={dis.G2} value={g2} onChange={e => setG2(e.target.checked)}/>
                    <label for="check2G">2G</label>
                </li>
            </ul>
            <ul>
                <li>
                    <input type="checkbox" id="check3A" name="check" disabled={dis.A3} value={a3} onChange={e => setA3(e.target.checked)}/>
                    <label for="check3A">3A</label>
                </li>
                <li>
                    <input type="checkbox" id="check3B" name="check" disabled={dis.B3} value={b3} onChange={e => setB3(e.target.checked)}/>
                    <label for="check3B">3B</label>
                </li>
                <li>
                    <input type="checkbox" id="check3C" name="check" disabled={dis.C3} value={c3} onChange={e => setC3(e.target.checked)}/>
                    <label for="check3C">3C</label>
                </li>
                <li>
                    <input type="checkbox" id="check3D" name="check" disabled={dis.D3} value={d3} onChange={e => setD3(e.target.checked)}/>
                    <label for="check3D">3D</label>
                </li>
                <li>
                    <input type="checkbox" id="check3E" name="check" disabled={dis.E3} value={e3} onChange={e => setE3(e.target.checked)}/>
                    <label for="check3E">3E</label>
                </li>
                <li>
                    <input type="checkbox" id="check3F" name="check" disabled={dis.F3} value={f3} onChange={e => setF3(e.target.checked)}/>
                    <label for="check3F">3F</label>
                </li>
                <li>
                    <input type="checkbox" id="check3G" name="check" disabled={dis.G3} value={g3} onChange={e => setG3(e.target.checked)}/>
                    <label for="check3G">3G</label>
                </li>
            </ul>
            <ul>
                <li>
                    <input type="checkbox" id="check4A" name="check" disabled={dis.A4} value={a4} onChange={e => setA4(e.target.checked)}/>
                    <label for="check4A">4A</label>
                </li>
                <li>
                    <input type="checkbox" id="check4B" name="check" disabled={dis.B4} value={b4} onChange={e => setB4(e.target.checked)}/>
                    <label for="check4B">4B</label>
                </li>
                <li>
                    <input type="checkbox" id="check4C" name="check" disabled={dis.C4} value={c4} onChange={e => setC4(e.target.checked)}/>
                    <label for="check4C">4C</label>
                </li>
                <li>
                    <input type="checkbox" id="check4D" name="check" disabled={dis.D4} value={d4} onChange={e => setD4(e.target.checked)}/>
                    <label for="check4D">4D</label>
                </li>
                <li>
                    <input type="checkbox" id="check4E" name="check" disabled={dis.E4} value={e4} onChange={e => setE4(e.target.checked)}/>
                    <label for="check4E">4E</label>
                </li>
                <li>
                    <input type="checkbox" id="check4F" name="check" disabled={dis.F4} value={f4} onChange={e => setF4(e.target.checked)}/>
                    <label for="check4F">4F</label>
                </li>
                <li>
                    <input type="checkbox" id="check4G" name="check" disabled={dis.G4} value={g4} onChange={e => setG4(e.target.checked)}/>
                    <label for="check4G">4G</label>
                </li>
            </ul>
            <ul>
                <li>
                    <input type="checkbox" id="check5A" name="check" disabled={dis.A5} value={a5} onChange={e => setA5(e.target.checked)}/>
                    <label for="check5A">5A</label>
                </li>
                <li>
                    <input type="checkbox" id="check5B" name="check" disabled={dis.B5} value={b5} onChange={e => setB5(e.target.checked)}/>
                    <label for="check5B">5B</label>
                </li>
                <li>
                    <input type="checkbox" id="check5C" name="check" disabled={dis.C5} value={c5} onChange={e => setC5(e.target.checked)}/>
                    <label for="check5C">5C</label>
                </li>
                <li>
                    <input type="checkbox" id="check5D" name="check" disabled={dis.D5} value={d5} onChange={e => setD5(e.target.checked)}/>
                    <label for="check5D">5D</label>
                </li>
                <li>
                    <input type="checkbox" id="check5E" name="check" disabled={dis.E5} value={e5} onChange={e => setE5(e.target.checked)}/>
                    <label for="check5E">5E</label>
                </li>
                <li>
                    <input type="checkbox" id="check5F" name="check" disabled={dis.F5} value={f5} onChange={e => setF5(e.target.checked)}/>
                    <label for="check5F">5F</label>
                </li>
                <li>
                    <input type="checkbox" id="check5G" name="check" disabled={dis.G5} value={g5} onChange={e => setG5(e.target.checked)}/>
                    <label for="check5G">5G</label>
                </li>
            </ul>
            <ul>
                <li>
                    <input type="checkbox" id="check6A" name="check" disabled={dis.A6} value={a6} onChange={e => setA6(e.target.checked)}/>
                    <label for="check6A">6A</label>
                </li>
                <li>
                    <input type="checkbox" id="check6B" name="check" disabled={dis.B6} value={b6} onChange={e => setB6(e.target.checked)}/>
                    <label for="check6B">6B</label>
                </li>
                <li>
                    <input type="checkbox" id="check6C" name="check" disabled={dis.C6} value={c6} onChange={e => setC6(e.target.checked)}/>
                    <label for="check6C">6C</label>
                </li>
                <li>
                    <input type="checkbox" id="check6D" name="check" disabled={dis.D6} value={d6} onChange={e => setD6(e.target.checked)}/>
                    <label for="check6D">6D</label>
                </li>
                <li>
                    <input type="checkbox" id="check6E" name="check" disabled={dis.E6} value={e6} onChange={e => setE6(e.target.checked)}/>
                    <label for="check6E">6E</label>
                </li>
                <li>
                    <input type="checkbox" id="check6F" name="check" disabled={dis.F6} value={f6} onChange={e => setF6(e.target.checked)}/>
                    <label for="check6F">6F</label>
                </li>
                <li>
                    <input type="checkbox" id="check6G" name="check" disabled={dis.G6} value={g6} onChange={e => setG6(e.target.checked)}/>
                    <label for="check6G">6G</label>
                </li>
            </ul>
            </div> 
        </section>
        <section class="dSeats">
            <form action="" onSubmit={senddata}>
                <div class="dSeats-inner">
                    <label>Number of seats:</label>
                    <input type="text" name="nSeats" id="nSeats" value={onesCount}  readonly/>
                </div>

                {/* <div class="dSeats-inner">
                    <label>Seat Numbers:</label>
                    <input type="text" name="seatNO" id="seatNO"  readonly/>
                </div>
                 */}

                <div class="dSeats-inner">
                <label>Ticket Price:</label>
                <input type="text" name="tctPrice" id="tctPrice" value={"$4.50"}  readonly/>
                </div>

                <div class="dSeats-inner">
                <label>Total:</label>
                 <input type="text" name="sTot" id="sTot" value={4.50*onesCount}  readonly/>
                </div>
                <div class="selectionsButtonsi">
                <button class="btn">Previous</button>
                <button type="submit" name="insert" class="btn">Next</button>
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

export default SeatInput;
