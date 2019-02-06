import import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class SearchResults extends Component {
  constructor{
    
  }
  render () {
    return (
      <div>
        <span className='result resultTitle'>Date</span>
        <span className='result resultTitle'>Flight</span>
        <span className='result resultTitle'>From > To</span>
        <span className='result resultTitle'>Plane</span>
      </div>
  }
}











export default SearchResults;
