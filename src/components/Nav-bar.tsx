import React from 'react'
import {NavLink} from 'react-router-dom'

export const NavBar: React.FC = () => (
  <nav>
    <div className="nav-wrapper deep-purple darken-2 px1">
      <NavLink to="/" className="brand-logo">React + Typescript</NavLink>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/">List</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </div>
  </nav>
)