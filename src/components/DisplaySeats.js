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

  saveSeat(seat) {
    console.log('A seat was clicked');
    console.log(seat);
    // axios.post(POST_SERVER_URL, {})
  }

  render() {
    return(
      <div>
        <h3>Seats on this flight</h3>
          <form onSubmit={ this.saveSeat }>
            { this.props.seatsBooked.map( (s, index) => <button className="seats" key={index} value={`X`}>{`Seat ${index + 1 } is: ${s}`}</button> ) }
          </form>
      </div>
    );
      // <div>
        // Edit this to represent the data received from the DB.
        // { this.props.seats.map( (s) => <p key={s.id}>{s.content}</p> ) }
      // </div>
  }
}

export default DisplaySeats;
