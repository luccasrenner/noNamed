import React from 'react';
import { 
      Route,
      BrowserRouter as Router , 
    } from "react-router-dom";



import './App.scss';

import Home from './design/pages/home/home';
import Profile from './design/pages/profile/profile';

function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path="/profile" component={ () => <Profile /> } />
        <Route exact path="/" component={ () => <Home /> } />
      </Router>
      
    </div>
  );
}

export default App;
