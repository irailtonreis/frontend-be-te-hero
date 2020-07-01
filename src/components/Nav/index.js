import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaAlignJustify } from 'react-icons/fa';
import logo from '../../assets/logo.svg';

import { Navigation } from './styles';

export default function Nav(){
  const [isExpanded, setIsExpanded] = useState(true);
  function handleToggle(e) {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  }

  return (
    <Navigation>
      <div className="logo">
        <Link to="/">
            <img src={logo} alt="logo" />
        </Link>
      </div>
      <nav className="nav">
        <i
          className="fa-bars"
          aria-hidden="true"
          onClick={e => handleToggle(e)}
        ><FaAlignJustify /></i>
        <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
          <NavLink activeClassName="active" to="/">
            <li>Home</li>
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            <li>about</li>
          </NavLink>
          <NavLink activeClassName="active" to="/contact">
            <li>Casos</li>
          </NavLink>
          <NavLink activeClassName="active" to="/contact">
            <li>Cadastro</li>
          </NavLink>
          <NavLink activeClassName="active" to="/contact">
            <li>Login</li>
          </NavLink>
        </ul>
      </nav>
    </Navigation>
  );
}
