import React from 'react';
import Nav from './pages/components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Principles from './pages/Principles';
import Blog from './pages/Blog';
import Students from './pages/Students';
import AdminLogin from './pages/AdminLogin';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Nav/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/principles" component={Principles}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/students" component={Students}/>
        <Route path="/login" component={AdminLogin}/>
      </div>
    </Router>
  )
}

export default App;
