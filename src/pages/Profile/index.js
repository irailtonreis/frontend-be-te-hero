import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import LogoImg from '../../assets/logo.svg';


function Profile(){
  return(
    <div className="div profile-container">
      <header>
      <img src={LogoImg}  alt="Be The Hero"/>
      <span>Bem vinda, APAD</span>
      <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
      <button type="button">
      <FiPower size={18} color="#E02041"/> 
      </button>
      </header>
      <h1>Casos Cadastrados</h1>

      <ul>
        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>  

          <strong>CASO: </strong>

          <p>Caso teste</p>  

          <strong>CASO: </strong>
          <p>R$ 120,00</p>  

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3"/>
          </button>
        </li>

        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>  

          <strong>CASO: </strong>

          <p>Caso teste</p>  

          <strong>CASO: </strong>
          <p>R$ 120,00</p>  

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3"/>
          </button>
        </li>

        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>  

          <strong>CASO: </strong>

          <p>Caso teste</p>  

          <strong>CASO: </strong>
          <p>R$ 120,00</p>  

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3"/>
          </button>
        </li>

        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>  

          <strong>CASO: </strong>

          <p>Caso teste</p>  

          <strong>CASO: </strong>
          <p>R$ 120,00</p>  

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3"/>
          </button>
        </li>


       
      </ul>
    </div>
  )
}

export default Profile;