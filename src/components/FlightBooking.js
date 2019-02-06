import React, { Component } from 'react';
import axios from 'axios';
import DisplaySeats from './DisplaySeats';

//const SERVER_URL_FLIGHTS = 'http://localhost:3000/flights.json';
const SERVER_URL_FLIGHT = 'http://localhost:3000/flights/1.json'

class FlightBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Information sent from Flight search
      // Flight ID, plane information
      planeID: 1,
      seats: 0,
      // Information handled in FlightBooking
      seatsBooked: []
      // Array with null values (or 'available') for each seat on the airplane. Array(rows * cols).fill(null)
    };
  }



  componentDidMount() {
    axios.get(SERVER_URL_FLIGHT).then( (results) => {
      const flightData = results.data;
      console.log(flightData);
      this.setState({
        planeID: flightData.plane.id,
        seats: (flightData.plane.row * flightData.plane.col),
        seatsBooked: Array(flightData.plane.row * flightData.plane.col).fill('Available')
       });
    });

    // Send seats info to DisplaySeats (results.data...)
  }



  render () {
    return(
      <div>
        <h2>Burning Airlines booking system is totally coming soon</h2>
        <DisplaySeats seatsBooked={ this.state.seatsBooked }/>
      </div>
    );
  }
}


export default FlightBooking;
