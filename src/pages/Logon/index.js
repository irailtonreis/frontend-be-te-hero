import React, { useState } from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import LogoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import api from '../../services/api';

function Logon(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

 async function handleLogin(e){
    e.preventDefault();
    try {
      const data = { 
        email, 
        password
      };

      console.log(data);
      const response = await api.post('sessions', data);

      localStorage.setItem('ongEmail', response.data.ong.email);
      localStorage.setItem('ongName', response.data.ong.name);
      localStorage.setItem('ongToken', response.data.token);

      history.push('/profile');
    } catch (error) {
      alert('Falha no login, tente novamente');
    }


  }
  return(
    <div className="div logon-container">
      <section className="form">
        <img src={LogoImg}  alt="Be The Hero"/>
      <form onSubmit={handleLogin}>
        <h1>Faça seu Logon</h1>

        <input placeholder="Sua email" 
         value={email}
         onChange={e => setEmail(e.target.value)}
        />
        <input placeholder="Sua senha" 
         type="password"
         value={password}
         onChange={e => setPassword(e.target.value)}
        />
        <button className="button"  type="submit">Entrar</button>

        <Link className="back-link" to="/register">
        <FiLogIn  size={16} color="#E02041"/>
        Não tenho cadastro</Link>

      </form>

      </section>
      <img src={heroesImg} alt="Heroes"/>
    </div>
  )
}

export default Logon;