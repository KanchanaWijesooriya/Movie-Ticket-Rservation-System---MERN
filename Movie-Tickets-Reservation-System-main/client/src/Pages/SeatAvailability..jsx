import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const SeatButton = styled(Button)`
  margin: 8px;
  width: 50px;
  height: 50px;
  background-color: lightgrey;
  &.available {
    background-color: green;
  }
  &.unavailable {
    background-color: red;
  }
`;

const SeatSelection = () => {
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        axios.get('/api/seats')
            .then(response => setSeats(response.data))
            .catch(error => console.error('Error fetching seat data:', error));
    }, []);

    return (
        <Grid container spacing={2}>
            {seats.map((seat) => (
                <Grid item key={seat.number}>
                    <SeatButton className={seat.isAvailable ? 'available' : 'unavailable'}>
                        {seat.number}
                    </SeatButton>
                </Grid>
            ))}
        </Grid>
    );
};

export default SeatSelection;
