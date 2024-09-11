import React, { useContext, useState , useEffect } from 'react';
import '../Styles/MovieCompTile.css'
import { Link } from 'react-router-dom';
import { Context } from '../App';

const MovieTile = ({name, img, hal, set}) => {
    // const [hall, setHall] = useContext(Context);
    // const [seat, setSeat] = useContext(Context);
    const {setHall, setSeat, setMov} = useContext(Context);

    const sendhallandseat = () => {
        setHall(hal)
        setSeat(set)
        setMov(name)
    }

    return (
        <div onClick={sendhallandseat}>
            <div className='film-col'>
            <Link to={'/cutomer'}><img className='img-for-movie' src={img} alt="movie image"/></Link>
            <h3 className='title-for-movie'>{name}</h3>
            <h4>Click to Buy Tickets</h4>
        </div>
        </div>
    );
}

export default MovieTile;
