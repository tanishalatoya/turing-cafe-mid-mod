import React from 'react';
import { Card } from '../Card/Card';
import PropTypes from 'prop-types';
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
      deleteReservation={props.deleteReservation}
    />
  })
  return (
    <section className='res-container'>
     { allReservations }
    </section>
  )
}

ResContainer.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  number: PropTypes.number,
  id: PropTypes.number,
  deleteReservation: PropTypes.func
}
