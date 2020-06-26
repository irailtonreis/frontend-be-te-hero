import React, { useState, useEffect } from 'react';
import './styles.css';

import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import LogoImg from '../../assets/logo.svg';

import api from '../../services/api';


function Profile(){
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const ongName = localStorage.getItem('ongName');
  const ongToken = localStorage.getItem('ongToken');

  useEffect(()=> {
    api.get('profile', {
      headers: {
        Authorization: ongToken,
      }
    }).then(response => {
      setIncidents(response.data);
    })

  }, [ongToken]);

 async function handleDeleteIncident(id){
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongToken,
        }
      });
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert("Erro ao deletar o caso, tente novamente.") 
      
    }
  }

  function  handleLogout(){
    localStorage.clear();

    history.push('/');


  }
  return(
    
    <div className="profile-container">
      <header>
      <img src={LogoImg}  alt="Be The Hero"/>
      <span>Bem vinda, {ongName}</span>
      <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
      <button onClick={handleLogout} type="button">
      <FiPower size={18} color="#E02041"/> 
      </button>
      </header>
      <h1>Casos Cadastrados</h1>

      <ul>
        {incidents.map(incident => (
            <li key={incident.id}>
            <strong>CASO: </strong>
            <p>{incident.title}</p>  
  
            <strong>DESCRIÇÃO: </strong>
            <p>{incident.description}</p>  
            
            <strong>VALUE: </strong>
            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.value)}</p>  
  
            <button onClick={() => handleDeleteIncident(incident.id)} type="button">
              <FiTrash2 size={20} color="#E02041"/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Profile;