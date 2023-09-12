import styled, { keyframes } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 5rem;
  background: white; 
  z-index: 100; 

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
`;

export const Title = styled.h1`
  font-family: "Gemunu Libre";
  color: #1C1E53;
  font-size: 2.5rem;

  position: relative;
  display: inline-block;
  cursor: not-allowed; 
  user-select: none; 
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
  color: #1C1E53;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 150%; 

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
    color: #1C1E53;
  
    text-decoration: none;
    position: relative; 
  }

  a:hover{
    color: #5E3BEE;
  }

  a:hover::before { 
    content: ''; 
    position: absolute;
    bottom: -0.5rem; 
    left: 0;
    width: 100%; 
    height: 0.1rem; 
    background-color: #5E3BEE;
    animation: ${fadeInBorder} 0.4s ease forwards; 
  }
`;

export const ButtonContact = styled.button`
  border-radius: 5.333px;
  border: 1.333px solid #5E3BEE;
  color: #5E3BEE;
  width: 10rem;
  padding: 1rem 1rem;
  transition: background-color 0.4s, border-color 0.3s, color 0.3s; /* Adicione a transição aqui */

  &:hover {
    background: #5E3BEE;
    border: 1.333px solid #fff;
    color: #fff;
  }
`;
