import React from 'react';
import { Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import SignUp from '../../components/SignUp';

import './styles.css';

import api from '../../services/api';

import dogImg from '../../assets/dog.svg';

export default function Register(){
 

  const history = useHistory();
  
  const initialValues = {
   name: "",
   email: "",
   password: "",
   whatsapp: "",
   city: "",
   uf: ""
  }

  const handleSubmit  = data => {
    handleRegister(data)
  }

 async function handleRegister(data){
    try {
      const response = await api.post('ongs', data);

      alert(`Ong ${response.data.name} cadastrada com sucesso!`); 

      history.push('/');
      
    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }
  
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
        <img src={dogImg}  alt="Be The Hero"/>
        <h1>Cadastro</h1>
        <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a pessoas a encontrarem casos na sua ONG</p>
        <Link className="back-link" to="/">
        <FiArrowLeft  size={16} color="#E02041"/>
        Já tenho cadastro</Link>
        </section>
        <SignUp handleSubmit={handleSubmit} initialValues={initialValues} />

      </div>
    </div>
    )

}