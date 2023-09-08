import styled, { keyframes } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content:space-between;
  align-items: center;
 
  padding: 0.5rem 5rem;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1rem);
`;

export const Title = styled.h1`
  font-family: "Gemunu Libre";
  color: #0396a6;
  font-size: 3rem;
  opacity: 0.7;

  position: relative;
  display: inline-block;
  cursor: not-allowed; /* Altera o cursor para "não permitido" */
  user-select: none; /* Impede a seleção de texto */
`;

const fadeInBorder = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%; 
  }
`;

export const Navigation = styled.nav`
  position: relative;

  ul {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  li {
    position: relative;
    list-style: none;
  }

  a {
    color: #b4b4b4;
    font-weight: bold;
    text-decoration: none;
    position: relative; 
    font-weight: 100;
  }

  a:hover{
    color: #0396a6;
  }

  a:hover::before { 
    content: ''; 
    position: absolute;
    bottom: -0.5rem; 
    left: 0;
    width: 100%; 
    height: 0.1rem; 
    background-color: #0396a6;
    animation: ${fadeInBorder} 0.4s ease forwards; 
  }
`;

export const SocialMedia = styled.div`

  ul {
    display: flex;
    gap: 1.5rem;
  }

  li {
    list-style: none;
  }

  a img {
    filter: brightness(0) invert(1); /* Inverte as cores da imagem para branco */
  }

  a:hover img {
    filter: brightness(0) invert(0); /* Inverte de volta para a cor original na sobreposição */
  }
`;
