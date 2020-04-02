import React from 'react';
import { Card } from '../Card/Card';
import './ResContainer.css'

export const ResContainer = (props) => {
  const allReservations = props.reservations.map(reservation => {
    return <Card
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
      id={reservation.id}
      key={reservation.id}
    />
  })
  return (
    <section className='res-container'>
     { allReservations }
    </section>
  )
}
