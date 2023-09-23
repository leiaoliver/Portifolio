import React from 'react';
import { HeaderContainer, Title, Navigation, ButtonContact } from './styles';



export function Header() {
  return (
    <HeaderContainer>
      <Title>Léia</Title>
      <Navigation>
        <ul>
        <li><a href="/home">Página inicial</a></li>
        <li><a href="/projects">Portifólio</a></li>
          <li><a href="/about">Sobre mim</a></li>
        </ul>
      </Navigation>
     
        <a href='/contact'>
          <ButtonContact>Contact Me</ButtonContact>
        </a>  
     
    </HeaderContainer>
  );
}
