import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// Example imports and <Route/> tags below
// import Home from './components/Home';
// import FAQ from './components/FAQ';
// import Character from './components/Character';
// <Route exact path="/" component={ Home } />
// <Route exact path="/faq" component={ FAQ } />
// <Route path="/characters/:name" component={ Character } />

//

// Add your imports here
import FlightBooking from './components/FlightBooking';

const Routes = (
  <Router>
    <div>
      <Route path="/flights/:id" component={ FlightBooking } />
    </div>
  </Router>
);

export default Routes;
