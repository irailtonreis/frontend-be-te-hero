import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


export default function Header(){

  return(
    <div className="container">
      <div className="content">

      <div className="nav">
        <h1>Be The Hero</h1>
      </div>
      <div className="logo">
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