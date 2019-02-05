import React, { Component } from 'react';

class FlightBooking extends Component {
  constructor() {
    super();
    this.state = {
      // Information sent from Flight search
      // Flight ID, plane information
      flightID: 1,
      seats: 12,
      // Information handled in FlightBooking
      seatsBooked: Array(12).fill('Available')
      // Array with null values (or 'available') for each seat on the airplane. Array(rows * cols).fill(null)
    };
    this._displaySeats = this._displaySeats.bind(this);
  }

  _displaySeats() {
    // This method should display the seats on the airplane
    console.log( this.state.seatsBooked );

    // const fetchSecrets = () => {
    //   axios.get(SERVER_URL).then( (results) => {
    //     this.setState({secrets: results.data});
    //     setTimeout(fetchSecrets, 4000);
    //   });
    // };
    //
    // fetchSecrets();
  }

  render () {
    return(
      <div>
        <h2>Burning Airlines booking system is totally coming soon</h2>
      </div>
    );
  }
}


export default FlightBooking;
