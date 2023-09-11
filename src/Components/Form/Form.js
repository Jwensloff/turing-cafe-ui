import { useState } from 'react';
import './Form.css';

function Form() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numGuests, setNumGuests] = useState('');

  return (
    <form>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        // onchange={(event) => setReservation(event.target.value)}
      />
      <input
        type='text'
        placeholder='Date (mm/dd)'
        name='date'
        value={date}
        // onchange={(event) => setReservation(event.target.value)}
      />
      <input
        type='text'
        placeholder='Time'
        name='time'
        value={time}
        // onchange={(event) => setReservation(event.target.value)}
      />
      <input
        type='text'
        placeholder='Number of Guests'
        name='numGuests'
        value={numGuests}
        // onchange={(event) => setReservation(event.target.value)}
      />
      {/* <button onClick={event=>submitReservation(event)}>Make Reservation</button> */}
    </form>
  );
}

export default Form;
