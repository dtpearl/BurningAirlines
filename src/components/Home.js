import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends Component {

  render() {
    return(
      <div>
        <h2>Welcome User</h2>
        <Link to="/Search"><button className="search">Flights</button></Link>
        <hr/>
      </div>
    )
  }
}

export default Home;
