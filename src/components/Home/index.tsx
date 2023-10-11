import React , { useState, useEffect }from 'react';
import foto from "../../assets/leia.png";
import { Container } from "../../styles/global";
import { Button, Title, Image, Paragrafo, Content} from './styles';
import { FiDownload } from 'react-icons/fi';
import { Element } from 'react-scroll';

interface HomeProps {
  id: string;
}

export function Home({id}:HomeProps) {
  return (
    <Container id={id}>
        <Content>
          <Image src={foto}/>
          <Title>Olá, eu sou a Léia, <span>eu crio aplicativos web e mobile.</span></Title>
          <Paragrafo>Programadora full-stack, apaixonado pelas melhores tecnologias de desenvolvimento back-end, front-end e mobile.</Paragrafo>
          <Button href="https://firebasestorage.googleapis.com/v0/b/curriculo-a8cea.appspot.com/o/cv.pdf?alt=media&token=6957fa41-acae-4e05-8e0b-8bd7c9021a1e" target="_blank">
            Curricúlo
            <FiDownload/>
          </Button>
        </Content>
  </Container>
  );
}
