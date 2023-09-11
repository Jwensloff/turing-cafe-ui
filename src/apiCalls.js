function fetchReservations() {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then((resp) =>{
  if(!resp.ok) {
    throw new Error ('Something went wrong')
  }
   return resp.json()
});
}

function postReservation(reservation) {

  const { name, date, time, number } = reservation;
  let data = { name, date, time, number };

  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((resp) => {
      if(!resp.ok){
        throw new Error ('We were unable to add your reservation at this time.')
      } 
      return resp.json()})
}
export { fetchReservations, postReservation };
