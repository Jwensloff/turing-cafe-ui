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

  const submitReservation = (event) => {
    event.preventDefault();
    const num = Number(number);
    const newReservation = {
      id: Date.now(),
      name,
      date,
      time,
      number: num,
    };

    addReservation(newReservation);
    resetForm();
  };

  return (
    <form className='form'>
      <input
        className='input'
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        className='input'
        type='text'
        placeholder='Date (mm/dd)'
        name='date'
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <input
        className='input'
        type='text'
        placeholder='Time'
        name='time'
        value={time}
        onChange={(event) => setTime(event.target.value)}
      />
      <input
        className='input'
        type='text'
        placeholder='Number of Guests'
        name='number'
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button
        className='submit-button'
        onClick={(event) => submitReservation(event)}
      >
        Make Reservation
      </button>
    </form>
  );
}

export default Form;
