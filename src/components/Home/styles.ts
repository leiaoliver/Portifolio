import styled, { keyframes } from 'styled-components';


export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

`

export const Title = styled.h2`
  margin-top: 25px;
  width: 700px;
  font-size: 50px;
  letter-spacing: 0.5px;

  background-image: linear-gradient(to right, #5E3BEE, #FF6B6B);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
  
  
  span {
    color: #000;
    opacity: 85%;
  }
`;


export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  width: 130px;
  height: 40px;
  font-size: 14px;
  margin-top: 20px;
  border: none;
  border-radius: 30px;
  background-image: linear-gradient(to right, #5E3BEE, #FF6B6B);
  background-size: 200% 100%;
  color: #fff;
  cursor: pointer;
  transition: background 0.4s ease;

  &:hover {
    background-image: linear-gradient(to left, #5E3BEE, #FF6B6B);
    background-size: 100% 200%;

    }
`;




export const Image = styled.img`
  width: 150px;
  height: 150px; 
  border-radius: 50%; 

  background: #eae3e1;
`;


export const Paragrafo = styled.p`
  width: 500px;
  color: #1C1E53;
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 1.5;
  margin-top: 20px;

  opacity: 80%;
`
