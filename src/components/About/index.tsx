import React from 'react';
import { Title, Image, Content, ImageContainer } from './styles';
import { Container } from '../../styles/global';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';

import Perfil from '../../assets/leia.png';


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
        <hr /> 
        <div>
          <a href='https://www.instagram.com/leiaoliver388/' target='_blank'>
          <FaInstagram className='instagram'/> 
          </a>
          <a href='https://www.linkedin.com/in/l%C3%A9ia-silva-de-oliveira/' target='_blank'>
          <FaLinkedin className='linkedin'/>
          </a>

          <a href='https://github.com/leiaoliver' target='_blank'>
           <FaGithub className='github'/>
           </a>
           
          <a href='https://twitter.com/liaOliv69924485'>
            <FaTwitter className='twitter' target='_blank'/>
          </a>
          
        </div>
      </Content>
    </Container>
  );
}
