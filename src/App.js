
import React from 'react';
import DisneyLogin from './components/DisneyLogin';
import Welcome from './components/Welcome'
import { BrowserRouter as Router, Route } from "react-router-dom"


function App() {

  return (
    <Router>

      <Route exact path = '/' component={DisneyLogin}/>
      <Route path = '/welcome' component={Welcome} />

    </Router>
  );
}

export default App;
