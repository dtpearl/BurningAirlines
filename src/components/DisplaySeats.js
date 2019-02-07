import React, { Component } from 'react';

class DisplaySeats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seatsBooked: [],
      selectedSeat: ""
    }
    this.saveSeat = this.saveSeat.bind(this);
  }

  componentDidMount() {
    this.setState({seatsBooked: this.props.seatsBooked})
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

  saveSeat = (param) => (e) => {
    console.log('A seat was clicked');
    console.log(param);
    // axios.post(POST_SERVER_URL, {})
  }

  render() {
    return(
      <div>
        <h3>Seats on this flight</h3>
            { this.props.seatsBooked.map( (s, index) => <button className="seats" key={index} value={index} onClick={this.saveSeat(index+1)}>{`Seat ${index + 1 } is: ${s}`}</button> ) }
      </div>
    );
      // <div>
        // Edit this to represent the data received from the DB.
        // { this.props.seats.map( (s) => <p key={s.id}>{s.content}</p> ) }
      // </div>
  }
}

export default DisplaySeats;
