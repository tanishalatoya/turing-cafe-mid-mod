import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  render() {
    return (
      <form>
        <input
        type='text'
        placeholder='Name'
        name='name'
        value={this.state.name}
        />
        <input
        type='text'
        placeholder='Date (mm/yy)'
        name='date'
        value={this.state.name}
        />
        <input
        type='text'
        placeholder='Time'
        name='time'
        value={this.state.name}
        />
        <input
        type='text'
        placeholder='Number of guests'
        name='number'
        value={this.state.name}
        />
        <button
          type='button'
        >Make Reservation
        </button>
      </form>
    )

  }
}
