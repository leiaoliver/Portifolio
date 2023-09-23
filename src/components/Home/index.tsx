import React from 'react';
import foto from "../../assets/Group 11 1.svg";
import { Container } from "../../styles/global";
import { Button, Title, Image, Paragrafo} from './styles';

export function Home() {
  return (
    <Container id="home">
        <div>
          <h2>Olá, eu sou a Léia</h2>
          <Title>I create <span>web and mobile</span> applications</Title>
          <Paragrafo>Programadora full-stack, apaixonado pelas melhores tecnologias de desenvolvimento back-end, front-end e mobile.</Paragrafo>
          <Button href="https://firebasestorage.googleapis.com/v0/b/curriculo-a8cea.appspot.com/o/cv.pdf?alt=media&token=6957fa41-acae-4e05-8e0b-8bd7c9021a1e" target="_blank">Curricúlo</Button>
        </div>
     
        <div>
          <Image src={foto}/>
        </div>
  </Container>
  );
}
