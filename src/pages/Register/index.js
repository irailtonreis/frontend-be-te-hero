import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import SignIn from '../../components/Register';

import './styles.css';

import api from '../../services/api';

import LogoImg from '../../assets/logo.svg';

export default function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [whatsapp, setWhatsap] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();
  
  const initialValues = {
   name,
   email,
   password,
   whatsapp,
   city,
   uf
  }


  const handleSubmit  = values => {
    setName(values.name)
    setEmail(values.email)
    setPassword(values.password)
    setWhatsap(values.whatsapp)
    setCity(values.city)
    setUf(values.uf)
    handleRegister();
  }


 async function handleRegister(e){
     
    const data = {
       name,
       email,
       whatsapp,
       password,
       city, 
       uf
    }    

    console.log(data)

    // try {
    //   const response = await api.post('ongs', data);

    //   alert(`Ong ${response.data.name} cadastrada com sucesso!`); 

    //   history.push('/');
      
    // } catch (error) {
    //   alert('Erro no cadastro, tente novamente.');
    // }
  
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
          <SignIn handleSubmit={handleSubmit} initialValues={initialValues} />

      </div>
    </div>
    )

}