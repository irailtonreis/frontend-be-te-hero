import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiLogIn } from 'react-icons/fi';

import { Container } from './styles';

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

      const response = await api.post('sessions', data);

      localStorage.setItem('ongEmail', response.data.ong.email);
      localStorage.setItem('ongName', response.data.ong.name);
      localStorage.setItem('ongId', response.data.ong.id);
      localStorage.setItem('ongToken', response.data.token);

      history.push('/profile');
    } catch (error) {
      toast.warning("Falha no login, tente novamente");
    }


  }
  return(
    <Container className="logon-container">
      <section className="form">
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
        <FiLogIn  size={16} color="#03a4ec"/>
        Não tenho cadastro</Link>

      </form>

      </section>
    </Container>
  )
}

export default Logon;