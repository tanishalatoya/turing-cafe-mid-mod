import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export const Card = (props) => {
  return (
    <section className='res-card'>
      <h2>{props.name}</h2>
      <p>{props.date}</p>
      <p>{props.time} pm</p>
      <p>Number of guests: {props.number}</p>
      <button
        type='button'
        className='cancel'
        id={props.id}
        onClick={() => props.deleteReservation(props.id)}
        >Cancel
      </button>
    </section>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  number: PropTypes.number,
  id: PropTypes.number,
  deleteReservation: PropTypes.func
}
