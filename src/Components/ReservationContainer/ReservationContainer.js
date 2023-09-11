import './ReservationContainer.css';
import SingleReservation from '../SingleReservation/SingleReservation';

function ReservationContainer({ reservations }) {

  const reservationCards = reservations.map((reservation) => {
    return <SingleReservation 
      id={reservation.id} 
      key={reservation.id} 
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}/>;
  });

  return <section className='reservation-container'>{reservationCards}</section>;
}

export default ReservationContainer;
