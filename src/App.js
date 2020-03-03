import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path='/welcome' component={Welcome} />
      </div>
    </Router>
  );
}

export default App;
