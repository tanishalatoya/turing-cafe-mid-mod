import React from 'react';
import './Card.css';

export const Card = (props) => {
  return (
    <section className='res-card'>
      <h2>{props.name}</h2>
      <p>{props.date}</p>
      <p>{props.time} pm</p>
      <p>Number of guests: {props.number}</p>
      <button type='button' class='cancel'>Cancel</button>
    </section>
  )
}
