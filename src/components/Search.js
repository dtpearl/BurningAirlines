import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import FlightsDisplay from './FlightsDisplay'

const PlaneURL = 'https://localhost:3001/flights.json';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      from: '',
      to: '',
    }
    this.handleInputTo = this.handleInputTo.bind(this);
    this.handleInputFrom = this.handleInputFrom.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputFrom(event) {
    this.setState({
      from: event.target.value,
    })
  }

  handleInputTo(event) {
    this.setState({
      to: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/search/${this.state.from}/${this.state.to}`);
  }


  render() {
    return(
      <form onSubmit={ this.handleSubmit }>

              <label className = "search"><span className ="monospace">
                From: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span>
              <select value={this.state.from} onChange = {this.handleInputFrom} className="select-city">
                  <option value="">Select...</option>
                  <option value="sydney">Sydney</option>
                  <option value="melbourne">Melbourne</option>

                </select>
              </label><br />

              <label className = "search"><span className ="monospace">
                To: &nbsp; &nbsp; &nbsp;</span>
              <select value={this.state.to} onChange = {this.handleInputTo} className="select-city">
                  <option value="">Select...</option>
                  <option value="sydney">Sydney</option>
                  <option value="melbourne">Melbourne</option>

                </select>
              </label><br />


              <input type="submit" value="Search" className="res-button" />
            </form>

    )
  }
}

export default Search;
