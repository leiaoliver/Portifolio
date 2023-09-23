import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  > div {
    display: flex;
    flex-direction:column;
    gap: 10px;
    width: 790.67px;

  
    h2 {
      font-size: 159px;
      letter-spacing: 0.2px;
      line-height: 1.5;
    }
  }
`;

export const ImagePerfil = styled.img`
  
`;

export const Title = styled.h2`
  font-size: 50px;
  letter-spacing: 0.5px;

  
  span {
    color: #5E3BEE;
  }
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 130px;
  border: none;
  border-radius: 5.33px;
  background: #5E3BEE;
  color: #fff;
  cursor: pointer; 
  margin-top: 20px;
  transition: background 0.4s ease;


  &:hover {
    background: #3D269D;
  }
`;

export const Image = styled.img`
  width: 500px;
  
`;

export const Paragrafo = styled.p`
  width: 500px;
  color: #1C1E53;
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 1.5;

`