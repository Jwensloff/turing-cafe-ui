import './SingleReservation.css'

function SingleReservation({id, name, date, time, number}) {
  return (<section id={id}>
    <h2>{name}</h2>
    <p>{date}</p>
    <p>{time}</p>
    <p>Number of guests: {number}</p>
  </section>)
}

export default SingleReservation