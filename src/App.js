import React from 'react';
import Landing from './pages/Landing';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path='/Jewel' component={Landing}/>
      </Router>
    </div>
  );
}

export default App;
