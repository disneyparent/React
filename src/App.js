
import React from 'react';
import DisneyLogin from './components/DisneyLogin';
import Welcome from './components/Welcome';
import { BrowserRouter as Router } from 'react-router-dom';
import BuggieList from './components/BuggieList';



function App() {

  return (
    <Router>

      <Route exact path = '/' component={DisneyLogin}/>
      <Route path = '/welcome' component={Welcome} />
      <Route path = '/buggielist' component={BuggieList}/>

    </Router>
  );
}

export default App;
