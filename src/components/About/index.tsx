import React from 'react';
import { Title, Image, Content, ImageContainer } from './styles';
import { Container } from '../../styles/global';

import Perfil from '../../assets/leia.png';
import instagram from '../../assets/instagram.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';

interface AboutProps {
  id: string;
}

export function About({ id }: AboutProps) {
  return (
    <Container id={id}>
      <ImageContainer>
        <Image src={Perfil} />
      </ImageContainer>

      <Content>
        <Title>About Me</Title>
        <p>
          Sou apaixonada por Tecnologia e Programação, sou formada em técnico de informática
          para web pela ETEC de Rio Grande da Serra e atualmente estou cursando Análise e
          desenvolvimento de sistemas na Fiap. Possuo conhecimento em JavaScript, HTML, CSS, React,
          ReactNative, typeScript, node.js, etc. Estou sempre disposta a aprender e adquirir novos conhecimentos.
        </p>
        <hr /> {/* Adicione a linha horizontal aqui */}
        <div>
          <img src={instagram} />
          <img src={github} />
          <img src={linkedin} />
          <img src={twitter} />
        </div>
      </Content>
    </Container>
  );
}
