import { useState } from 'react';
import './Form.css';

function Form({ addReservation }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [number, setNumber] = useState('');

  const resetForm = () => {
    setName('');
    setDate('');
    setTime('');
    setNumber('');
  };

  // console.log(addReservation)
  const submitReservation = (event) => {
    event.preventDefault();
    // console.log('the submit button worked')
    const newReservation = {
      id: Date.now(),
      name,
      date,
      time,
      number,
    };

    addReservation(newReservation);
    resetForm();
  };

  return (
    <form>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type='text'
        placeholder='Date (mm/dd)'
        name='date'
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <input
        type='text'
        placeholder='Time'
        name='time'
        value={time}
        onChange={(event) => setTime(event.target.value)}
      />
      <input
        type='text'
        placeholder='Number of Guests'
        name='number'
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button onClick={(event) => submitReservation(event)}>
        Make Reservation
      </button>
    </form>
  );
}

export default Form;
