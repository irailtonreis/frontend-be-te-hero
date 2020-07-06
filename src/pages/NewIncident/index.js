import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content } from './styles';

import api from '../../services/api';



export default function NewIncident(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');

  const history = useHistory(); 


 async function handleNewIncident(e){
    e.preventDefault();

    const data = {
       title,
       description,
       value,
    }

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      })

      history.push('/profile');
    } catch (error) {
      
      alert("Erro ao cadastrar caso, tente novamente");
    }
  }
  return(
    <Container>
    <Content> 
      <section>
      <h1>Cadastrar novo caso</h1>
      <p>Descresva o caso detalhadamente para encontrar um herói para resolvir isso.</p>
      <Link className="back-link" to="/profile">
      <FiArrowLeft  size={16} color="#E02041"/>
      Voltar para home</Link>
      </section>

      <form onSubmit={handleNewIncident}>
        <input 
          placeholder="Título o caso" 
          value={title}
          onChange={e => setTitle(e.target.value)}
          />
        <textarea 
          placeholder="Descrição" 
          value={description}
          onChange={e => setDescription(e.target.value)}
          />
        <input 
          placeholder="Valor em reais"
          value={value}
          onChange={e => setValue(e.target.value)}
          />
        <button className="button" type="submit">Cadastrar</button>
      </form>

    </Content>
  </Container>
  )
}

