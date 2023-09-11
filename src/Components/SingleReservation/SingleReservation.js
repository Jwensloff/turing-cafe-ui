import './SingleReservation.css';

function SingleReservation({ id, name, date, time, number, cancelReservation }) {
  return (
    <div id={id} className='single-reservation-card'>
      <h2 className='card-content'>{name}</h2>
      <p className='card-content'>{date}</p>
      <p className='card-content'>{time} PM</p>
      <p className='card-content'>Number of guests: {number}</p>
      <button className='cancel-button' onClick={()=>cancelReservation(id)}>Cancel Reservation</button>
    </div>
  );
}

export default SingleReservation;
