import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';

const Incidents = () => {
  const [incidents, setIncidents] = useState([])

  useEffect(() => {
    async function loadIncidents(){
      const response = await api.get('incidents');

      setIncidents(response.data)
      console.log(response.data);
    }
   
    loadIncidents()
  }, []);

  return (
    <Container>
    <div className="">
    <ul className="">
     {incidents.map(incident => (
       <li>
         <h2>{incident.title}</h2>
        <strong>{incident.description}</strong>
       </li>
     ))}
    </ul>
    </div>

    </Container>
  );
}

export default Incidents;
