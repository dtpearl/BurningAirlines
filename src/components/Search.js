import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



class Search extends Component {
  constructor() {
    super();
    this.state = {
      from: '',
      to: '',
    }
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
      <div>
              <div className="heading">
                <h1> Welcome to Burning Airlines</h1>
                <h4>Enter Your Trip Details Here:</h4>
              </div>
            <form onSubmit={e => this.handleSubmit(e)}>
          		<div className="form-item">
          			<p className="formLabel"></p>
          			<input type="text" className="form-style" placeholder="From" onChange={e => this.handleInputFrom(e)}/>
          		</div>
          		<div className="form-item">
          			<p className="formLabel"></p>
          			<input type="text" className="form-style" placeholder="To" onChange={e => this.handleInputTo(e)}/>
          		</div>
          		<div className="form-item">
        		    <input type="submit" className="login pull-right" value="Submit"/>

          		</div>
            </form>
        </div>
    )
  }
}

export default Search;
