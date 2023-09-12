import React from 'react';
import { HeaderContainer, Title, Navigation, ButtonContact } from './styles';

import instagram from '../../assets/instagram.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';


export function Header() {
  return (
    <HeaderContainer>
      <Title>Léia</Title>
      <Navigation>
        <ul>
          <li><a href="/">Sobre mim</a></li>
          <li><a href="/projetos">Projetos</a></li>
          <li><a href="/conhecimentos">Conhecimentos</a></li>
          <li><a href="/fale-comigo">Fale comigo</a></li>
        </ul>
      </Navigation>
      <ButtonContact>
        Contact Me
      </ButtonContact>
      {/* <SocialMedia>
        <ul>
            <li><a href="/"><img src={instagram} alt="Instagram"/></a></li>
            <li><a href="/"><img src={github} alt="GitHub"/></a></li>
            <li><a href="/"><img src={linkedin} alt="LinkedIn"/></a></li>
            <li><a href="/"><img src={twitter} alt="Twitter"/></a></li>
        </ul>
      </SocialMedia> */}
    </HeaderContainer>
  );
}
