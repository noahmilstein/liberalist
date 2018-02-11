import React from 'react';
import Nav from './pages/components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Principles from './pages/Principles';
import Reading from './pages/Reading';
import GetInvolved from './pages/GetInvolved';
import FeaturedContent from './pages/FeaturedContent';
import Students from './pages/Students';
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
        <Route path="/featured_content" component={FeaturedContent}/>
        <Route path="/students" component={Students}/>
      </div>
    </Router>
  )
}

export default App;
