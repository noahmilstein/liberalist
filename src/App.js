import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Nav from './pages/Nav';
import Principles from './pages/Principles';
import Reading from './pages/Reading';
import GetInvolved from './pages/GetInvolved';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/principles" component={Principles}/>
        <Route path="/get_involved" component={GetInvolved}/>
        <Route path="/reading" component={Reading}/>
        <Route path="/contact" component={Contact}/>
      </div>
    </Router>
  )
}

export default App;
