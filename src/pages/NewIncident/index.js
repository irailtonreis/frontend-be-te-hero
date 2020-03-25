import React from 'react';
import { Link} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg';

import './styles.css';



export default function NewIncident(){
  return(
    <div className="new-incident-container">
    <div className="content"> 
      <section>
      <img src={LogoImg}  alt="Be The Hero"/>
      <h1>Cadastrar novo caso</h1>
      <p>Descresva o caso detalhadamente para encontrar um herói para resolvir isso.</p>
      <Link className="back-link" to="/profile">
      <FiArrowLeft  size={16} color="#E02041"/>
      Voltar para home</Link>
      </section>

      <form>
        <input placeholder="Título o caso" />
        <textarea type="email" placeholder="Descrição" />
        <input placeholder="Valor em reais"/>
        <button className="button" type="submit">Cadastrar</button>
      </form>

    </div>
  </div>
  )
}

