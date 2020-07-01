import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

export default function Header(){

  return(
    <div className="container menu">
      <div className="content">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav class="menu" data-menu="suave">
      <button data-menu="button" aria-expanded="false" aria-controls="menu">Menu</button>
      <ul data-menu="list" id="menu">
        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="incidents">Casos</Link></li>
        <li><Link className="link" to="/">Login</Link></li>
        <li><Link className="link" to="/register">Cadastro</Link></li>
      </ul>
    </nav>
      </div>
    </div>
  )
}