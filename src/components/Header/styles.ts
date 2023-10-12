import styled, { keyframes } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  height: 7rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 7rem;
  background: #000; 
  z-index: 100; 

  box-shadow: none; /* Remova o box-shadow por padrão */

  &.scrolling {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adicione o box-shadow quando a classe "scrolling" estiver presente */
  } 
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
  color: #fff;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%; 

  ul {
    display: flex;
    gap: 2.5rem;
    justify-content: center;
  }

  li {
    position: relative;
    list-style: none;
    cursor: pointer; 
  }

  a {
    color: #fff;
  
    text-decoration: none;
    position: relative; 

    &:hover{
    color: #5E3BEE;
  }

  &:hover::before { 
    content: ''; 
    position: absolute;
    bottom: -0.5rem; 
    left: 0;
    width: 100%; 
    height: 0.25rem; 
    border-radius: 1rem;
    background-color: #5E3BEE;
    animation: ${fadeInBorder} 0.4s ease forwards; 
  }
  }



`;

export const ButtonContact = styled.button`
  font-size: 1.3rem;
  border-radius: 30px;
  border: none;
  border: 1.333px solid #5E3BEE;
  color: #5E3BEE;
  width: 10rem;
  padding: 1rem 1rem;
  transition: background-color 0.4s, border-color 0.3s, color 0.3s; /* Adicione a transição aqui */

  &:hover {
    background: #5E3BEE;
    color: #fff;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute; /* Tornar o h1 position: absolute */
  top: 0;
  left: 0;
  background-color: #000;
  font-size: 45px;
  color: #fff;
  mix-blend-mode: multiply;

  font-family: 'Poppins', sans-serif;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Section = styled.section`
  width: 150px;
  height: 100%; /* Ajuste a altura conforme necessário */
  position: relative; /* Defina o elemento pai como posição relativa */
`;
