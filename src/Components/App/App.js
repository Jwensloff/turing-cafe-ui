import './App.css';
import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import ReservationContainer from '../ReservationContainer/ReservationContainer';
import fetchReservations from '../../apiCalls';

function App() {
  const [ reservations, setReservations ] = useState([]);

  useEffect(() => {
    fetchReservations()
    .then((data) => {
      console.log(data);
      setReservations(data);
    });
  }, []);

  function addReservation(newReservation) {
    setReservations([...reservations, newReservation])
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form addReservation={addReservation}/>
      </div>
      <div className='resy-container'>
        <ReservationContainer reservations={reservations}/>
      </div>
    </div>
  );
}

export default App;
