import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Nav = () => {
  return (
    <MuiThemeProvider>
      <nav id="nav">
      <AppBar
        showMenuIconButton={false}
        title="USA Liberalist"
        children={
          <div className="navLinkList">
            <NavLink className="navLink" exact activeClassName="active" to="/">Home</NavLink>
            <NavLink className="navLink" activeClassName="active" to="/principles">Principles</NavLink>
            <NavLink className="navLink" activeClassName="active" to="/about">About</NavLink>
            <NavLink className="navLink" activeClassName="active" to="/students">Students</NavLink>
            {/* <NavLink className="navLink" activeClassName="active" to="/get_involved">Get Involved</NavLink> */}
            <NavLink className="navLink" activeClassName="active" to="/blog">Blog</NavLink>
            <NavLink className="navLink" activeClassName="active" to="/contact">Contact</NavLink>
          </div>
        }
      />
    </nav>
    </MuiThemeProvider>
  )
}

export default Nav;
