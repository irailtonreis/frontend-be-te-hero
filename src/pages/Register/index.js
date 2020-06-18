import React, { useState } from 'react';
import * as Yup from 'yup';
import { Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import api from '../../services/api';

import LogoImg from '../../assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
  whatsapp: Yup.string().required('Whatsap é obrigatório').min(10).max(11, 'máximo 11')
});

export default function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [whatsapp, setWhatsap] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();
  
 async function handleRegister(e){
    e.preventDefault(); 
    const data = {
       name,
       email,
       whatsapp,
       password,
       city, 
       uf
    }    

    try {
      const response = await api.post('ongs', data);

      alert(`Ong ${response.data.name} cadastrada com sucesso!`); 

      history.push('/');
      
    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }
  
  }

  return (
    <div className="div register-container">
      <div className="div content">
        <section>
        <img src={LogoImg}  alt="Be The Hero"/>
        <h1>Cadastro</h1>
        <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a pessoas a encontrarem casos na sua ONG</p>


        <Link className="back-link" to="/">
        <FiArrowLeft  size={16} color="#E02041"/>
        Já tenho cadastro</Link>
        </section>
        <form schema={schema} onSubmit={handleRegister}>
          <input placeholder="Nome da ONG"
          value={name} 
          onChange={e => setName(e.target.value)}
          />
          <input type="email" placeholder="E-mail"
           value={email} 
           onChange={e => setEmail(e.target.value)}
          />
          <input type="password" placeholder="senha"
          value={password} 
          onChange={e => setPassword(e.target.value)}
          />
           <input placeholder="whatsapp"
          value={whatsapp} 
          onChange={e => setWhatsap(e.target.value)}
          />

          <div className="div input-group">
          <input placeholder="Cidade"
          value={city} 
          onChange={e => setCity(e.target.value)}
          />
          <input placeholder="UF" style={{width: 80}}
          value={uf} 
          onChange={e => setUf(e.target.value)}
          />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
    )

}