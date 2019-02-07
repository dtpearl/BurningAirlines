import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SignIn from './SignIn';
import '../index.css';

class Home extends Component {

  render() {
    return(
      <article className="home mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb5">
        <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
          Welcome User
        </h1>

        <div>
          <Link to="/Search" className="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3">
            Flights
          </Link>
          <Link to="/SignIn" className="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib">
            SignIn
          </Link>
        </div>
      </article>

    )
  }
}

export default Home;
