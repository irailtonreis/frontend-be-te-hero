import React, { useState } from 'react';
import * as Yup from 'yup';
import { Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useFormik } from 'formik';


import './styles.css';

import api from '../../services/api';

import LogoImg from '../../assets/logo.svg';

const validationSchema = Yup.object({
  name: Yup.string().required("O Campo nome é requerido"),
  email: Yup.string().email("Deve ser formato de e-mail").required("O Campo email é requerido"),
  password: Yup.string().min(6, "minímo 6 caracteres").required("O Campo senha é requerido"),
  whatsapp: Yup.number().min(9, "mínimo 9 caracteres").required("O Campo whatsapp é requerido"),
});


export default function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [whatsapp, setWhatsap] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();
  
  const { handleSubmit, values, errors } = useFormik({
    initialValues: {
      name: "",
      lastName: ""
    },
    validationSchema,
    onSubmit(values) {
      console.log(values);
    }
  });


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


        <form onSubmit={handleSubmit}>
          <div>
          <input placeholder="Nome da ONG"
          name="firstName" 
          values={values.name}
          onChange={e => setName(e.target.value)}
          />
           {errors.name ? errors.name : null}
          </div>
          <div>
          <input type="email" placeholder="E-mail"
          values={values.email}
          onChange={e => setEmail(e.target.value)}
          />
          {errors.email ? errors.email : null}
          </div>
          <div>
          <input type="password" placeholder="senha"
          values={values.password}
          onChange={e => setPassword(e.target.value)}
          />{errors.password ? errors.password : null}
          </div>
          <div>
           <input placeholder="whatsapp"
          values={values.whatsapp}
          onChange={e => setWhatsap(e.target.value)}
          />
          {errors.whatsapp ? errors.whatsapp : null}
          </div>
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