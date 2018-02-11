import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav id="nav">
      <NavLink exact activeClassName="active" to="/">Home</NavLink>
      <NavLink activeClassName="active" to="/about">About</NavLink>
      <NavLink activeClassName="active" to="/principles">Principles</NavLink>
      <NavLink activeClassName="active" to="/get_involved">Get Involved</NavLink>
      <NavLink activeClassName="active" to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Nav;
