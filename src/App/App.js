import React, { Component } from 'react';
import { ResContainer } from '../ResContainer/ResContainer'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
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
        <div className='resy-form'>

        </div>
        <ResContainer
          reservations={this.state.reservations}
        />
      </div>
    )
  }
}

export default App;
