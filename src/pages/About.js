import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div id="about">
      <p>About</p>
      <Link activeClassName="active" to="/reading">Reading</Link>
    </div>
  )
}

export default About;
