import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

export default function Header(){

  return(
    <div className="container">
      <div className="content">

      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="nav">
        <ul>
         <li><Link className="link" to="/">Home</Link></li>
         <li><Link className="link" to="incidents">Casos</Link></li>
         <li><Link className="link" to="/">Login</Link></li>
         <li><Link className="link" to="/register">Cadastro</Link></li>
        </ul>
      </div>
      
      </div>
    </div>
  )
}