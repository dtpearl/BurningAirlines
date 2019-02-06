import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class FlightsForm extends Component {
  constructor() {
    super();
    this.state = {
      origin: '',
      destination: '',
    }
    this.handleInputTo = this.handleInputTo.bind(this);
    this.handleInputFrom = this.handleInputFrom.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputFrom(event) {
    this.setState({
      origin: event.target.value,
    })
  }

  handleInputTo(event) {
    this.setState({
      destination: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit( this.state.origin, this.state.destination );
    this.setState({ origin: '', destination: '' });
  }


  render() {
    return(
      <form onSubmit={ this.handleSubmit }>

              <label className = "search"><span className ="monospace">
                From: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span>
              <select value={this.state.origin} onChange = {this.handleInputFrom} className="select-city">
                  <option value="">Select...</option>
                  <option value="SYD">Sydney (SYD)</option>
                  <option value="MEL">Melbourne (MEL)</option>
                  <option value="BRS">Brisbane (BRS)</option>
                  <option value="DEL">Delhi (DEL)</option>
                  <option value="JFK">New York (JFK)</option>
                  <option value="SFO">California (SFO)</option>

                </select>
              </label><br />

              <label className = "search"><span className ="monospace">
                To: &nbsp; &nbsp; &nbsp;</span>
              <select value={this.state.destination} onChange = {this.handleInputTo} className="select-city">
                  <option value="">Select...</option>
                    <option value="SYD">Sydney (SYD)</option>
                    <option value="MEL">Melbourne (MEL)</option>
                    <option value="BRS">Brisbane (BRS)</option>
                    <option value="DEL">Delhi (DEL)</option>
                    <option value="JFK">New York (JFK)</option>
                    <option value="SFO">California (SFO)</option>



                </select>
              </label><br />


              <input type="submit" value="Search" className="res-button" />
            </form>

    )
  }
}

class FlightsResults extends Component {
  render() {
    return (
      <div>
        { this.props.flights.map( (flight) =>
          <p key={ flight.id }>
            <span className='result resultTitle'>Date</span>
              <li>{ flight.date } </li>
            <span className='result resultTitle'>Flight</span>
              <li><Link to={
                {
                  pathname:`/flights/${ flight.id }`,
                  state: {
                    flightID: flight.id,
                  }
                }
                }>{ flight.f_no }</Link></li>
            <span className='result resultTitle'>From > To</span>
              <li>{ flight.origin } { flight.destination }</li>
          </p>
        )
      }
      </div>
    );
  }
}


class FlightSearch extends Component {
  constructor() {
    super();
    this.state = {
      flights: [],
      flightID: 0,
    }
    this.fetchFlights = this.fetchFlights.bind(this);
  }

  fetchFlights(origin, destination) {
    axios.get('http://localhost:3000/flights.json').then( (results) => {
      let flightsMatch = [];

      for (var i = 0; i < results.data.length; i++) {
        let currentFlight = results.data[i]
        if (currentFlight.origin === origin && currentFlight.destination === destination) {
          flightsMatch.push(currentFlight);
        }
      }
      this.setState({ flights: flightsMatch });
      console.log( this.state.flights );
    });
  }

  render() {
    return (
      <div className="container">
        <FlightsForm onSubmit={ this.fetchFlights }/>
        <FlightsResults flights={ this.state.flights }/>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}

export default FlightSearch;
