import React, { Component } from 'react';
import axios from 'axios';
import DisplaySeats from './DisplaySeats';

//const SERVER_URL_FLIGHTS = 'http://localhost:3000/flights.json';
const SERVER_URL_FLIGHT = 'http://localhost:3000/flights/'

class FlightBooking extends Component {
  constructor(props) {
    super();
    this.state = {
      // Information sent from Flight search
      // Flight ID, plane information
      planeID: props.planeID,
      seats: 0,
      // Information handled in FlightBooking
      seatsBooked: []
      // Array with null values (or 'available') for each seat on the airplane. Array(rows * cols).fill(null)
    };
  }



  componentDidMount() {
    const flightDataURL = `${SERVER_URL_FLIGHT}${ this.props.match.params.id }.json`;

    axios.get(flightDataURL).then( (results) => {
      const flightData = results.data;
      console.log(flightData);
      this.setState({
        planeID: flightData.plane.id,
        seats: (flightData.plane.row * flightData.plane.col),
        seatsBooked: Array(flightData.plane.row * flightData.plane.col).fill('Available')
       });
    });

  }



  render () {
    return(
      <div>
        <h2>Burning Airlines booking system is totally free!!</h2>
        <h3>Caution: You get what you pay for</h3>

        <DisplaySeats seatsBooked={ this.state.seatsBooked }/>
      </div>
    );
  }
}


export default FlightBooking;
