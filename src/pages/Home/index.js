import React from 'react';
import { Container, Content } from './styles';
import heroesImg from '../../assets/heroes.png';


function Home() {
  return (
    <Container>
      <Content>
        <h1>Somos uma plataforma que conecta Ongs que cuidam de animais com pessoas
          que querem ser o herói dos animais. 
          </h1>
      </Content>
      <img src={heroesImg} alt="Heroes"/>
    </Container>
  );
}

export default Home;  