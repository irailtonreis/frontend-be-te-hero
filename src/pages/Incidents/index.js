import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Container, Content } from './styles';

const Incidents = () => {
  const [incidents, setIncidents] = useState([])

  useEffect(() => {
    async function loadIncidents(){
      const response = await api.get('incidents');

      setIncidents(response.data)
    }
   
    loadIncidents()
  }, []);

  return (
    <Container>
      <Content>
        {incidents.map(incident => (
            <li key={incident.id}>
            <strong>CASO: </strong>
            <p>{incident.title}</p>  
  
            <strong>DESCRIÇÃO: </strong>
            <p>{incident.description}</p> 
            <img src={incident.foto.url} alt="caso" srcSet={incident.foto.url}/> 
            
            <strong>VALUE: </strong>
            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.value)}</p>  
          </li>
        ))}
      </Content>
    </Container>
  );
}

export default Incidents;
