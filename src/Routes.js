import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';



import FlightBooking from './components/FlightBooking';
import Home from './components/Home';
import FlightSearch from './components/FlightSearch';
import SignIn from './components/SignIn';



const Routes = (
  <Router>
    <div>
      <Route component={Home} />
      <Route exact path="/SignIn" component={SignIn} />
      <Route exact path="/search" component={FlightSearch} />
      <Route path="/flights/:id" component={ FlightBooking } />
    </div>
  </Router>
);

export default Routes;

// <Route path="/flights/:id/:planeid/:flightid" component={ FlightBooking } />
