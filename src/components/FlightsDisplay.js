import React, { Component } from 'react';

class FlightsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {flight_id: ""};
    this._update = this._update.bind(this);
  }
  _update(flight_id)
  {
      this.setState({flight_id});
  }

  _handleClick = (flight_id) => {
    this.props.passFlightId( flight_id );
  }

  render() {
    return (
      <div>
        <p>Following are the available flights.</p>
        {this.props.flights_all.map (s=>
          <p key={s.id}>{s.origin} to {s.destination} on {s.date}: Flight&nbsp;{s.number}
          <button className="res-button book" onClick = { () => { this._handleClick(s.id) } }>
            Book Flight
          </button></p>
        )}
      </div>
    );
  }
}

export default FlightsDisplay;
