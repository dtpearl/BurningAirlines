import React, { Component } from 'react';

class DisplaySeats extends Component {
  constructor(props) {
    super(props);
  }

  // This should display the seats on the airplane
  // console.log( this.state.seatsBooked );

  // const fetchSecrets = () => {
  //   axios.get(SERVER_URL).then( (results) => {
  //     this.setState({secrets: results.data});
  //     setTimeout(fetchSecrets, 4000);
  //   });
  // };
  //
  // fetchSecrets();

  render() {
    return(
      <div>
        <h3>Seats on this flight</h3>
        { this.props.seatsBooked.map( (s, index) => <button className="seats" key={index} onClick={ console.log(`Seat:  ${index + 1}`)}>{`Seat ${index + 1 } is: ${s}`}</button> ) }
      </div>
    );
      // <div>
        // Edit this to represent the data received from the DB.
        // { this.props.seats.map( (s) => <p key={s.id}>{s.content}</p> ) }
      // </div>
  }
}

export default DisplaySeats;
