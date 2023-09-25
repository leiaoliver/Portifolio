import React from 'react'; // Make sure to import React
import { Title, Image, Content } from './styles'; // Import the CSS file correctly
import { Container } from '../../styles/global';

import Perfil from '../../assets/About Me.svg'

export function About() {
  return (
    <Container id='about'>
      <Image src={Perfil}/>
      <Content>
        <Title>About Me</Title>
        <p>
          Sou apaixonada por Tecnologia e Programação, sou formada em técnico de informática 
          para web pela ETEC de Rio Grande da Serra e atualmente estou cursando Análise e 
          desenvolvimento de sistemas na Fiap. Possuo conhecimento em JavaScript, HTML, CSS, React,
          ReactNative, typeScript, node.js, etc. Estou sempre disposta a aprender e adquirir novos conhecimentos.
        </p>
      </Content>       
    </Container>  
  );
}
