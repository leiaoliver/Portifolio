import React, { useEffect, useState } from 'react';
import { HeaderContainer, Title, ButtonContact, Navigation } from './styles';
import { Link } from 'react-scroll';

export function Header() {
  const [isScrolling, setIsScrolling] = useState(false);

  // Função para lidar com o evento de rolagem
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true); // Se a página estiver rolada para baixo, ative a classe "scrolling"
    } else {
      setIsScrolling(false); // Caso contrário, desative a classe "scrolling"
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Adicione um ouvinte de rolagem quando o componente for montado

    return () => {
      window.removeEventListener('scroll', handleScroll); // Remova o ouvinte de rolagem quando o componente for desmontado
    };
  }, []);

  return (
    <HeaderContainer className={isScrolling ? 'scrolling' : ''}>
      <Title>Léia</Title>
      <Navigation>
        <ul>
        <li>
          <Link to="home" smooth={true} duration={500} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Página inicial
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Sobre mim
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Services
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Projetos
          </Link>
        </li>
        <li>
          <Link to="knowledge" smooth={true} duration={500} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Conhecimentos
          </Link>
        </li>
        </ul>
      </Navigation>
     
      <Link to="contact" smooth={true} duration={500}>
       <ButtonContact>Contato</ButtonContact>
     </Link>  
     
    </HeaderContainer>
  );
}