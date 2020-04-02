import React, { Component } from 'react';
import { ResContainer } from '../ResContainer/ResContainer';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  addReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, {...newReservation}] })
  }

  deleteReservation = (reservationId) => {
    const updatedReservations = this.state.reservations.filter(reservation => {
      return reservation.id !== reservationId
    })
    this.setState({ reservations: updatedReservations })
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(reservations => {
        this.setState({ reservations: [...reservations]})
      })
      .catch(error => console.log(error.message))
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form
          addReservation={this.addReservation}
        />
        <ResContainer
          reservations={this.state.reservations}
          deleteReservation={this.deleteReservation}
        />
      </div>
    )
  }
}

export default App;
