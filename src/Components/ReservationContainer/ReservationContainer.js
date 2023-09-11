import './ReservationContainer.css';
import SingleReservation from '../SingleReservation/SingleReservation';

function ReservationContainer({ reservations, cancelReservation  }) {

  const reservationCards = reservations.map((reservation) => {
    return <SingleReservation 
      id={reservation.id} 
      key={reservation.id} 
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
      cancelReservation={cancelReservation}/>;
  });

  return <section className='reservation-container'>{reservationCards}</section>;
}

export default ReservationContainer;
