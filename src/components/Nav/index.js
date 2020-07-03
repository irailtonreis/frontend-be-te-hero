import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaAlignJustify } from 'react-icons/fa';
import logo from '../../assets/logo.svg';

import { Navigation } from './styles';

export default function Nav(){
  const [isExpanded, setIsExpanded] = useState(false);
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
          <li>
          <NavLink activeClassName="active" exact to="/">Home</NavLink>
          </li>
          <li>
          <NavLink activeClassName="active" to="/about">Sobre</NavLink>
          </li>
          <li>
          <NavLink activeClassName="active" to="/incidents">Casos</NavLink>
          </li>
          <li>
          <NavLink activeClassName="active" to="/register">Cadastro</NavLink>
          </li>
          <li>
          <NavLink activeClassName="active" to="/logon">Login</NavLink>
          </li>
        </ul>
      </nav>
    </Navigation>
  );
}
