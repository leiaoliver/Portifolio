import styled, { keyframes } from 'styled-components';

export const Title = styled.h2``

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const Content = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    width: 100%;
    overflow: hidden;

    &.next {
        animation: ${slideIn} 0.5s forwards;
    }

    &.prev {
        animation: ${slideOut} 0.5s forwards;
    }
`;

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: repeat(2, auto); 
    width: 100%;
    gap: 5rem;
`;

export const Card = styled.div`
    width: 100%;
    height: 60vh;
    padding: 2rem;
    background: #fff;
    border-radius: 1rem;
    box-shadow: 5px 5px 10px #888888;
    position: relative;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #d0d0d0;
        border-radius: 1rem;
        position: relative; /* Adicione esta linha */
        width: 100%;
        height: 200px;
        left: 0;
        top: 0;
    }

    span {
        bottom: 10rem;

        h2 {
            font-size: 2.5rem;
        }

        p {
            font-size: 1.5rem;
            margin-top: 1rem;
        }
    }
`;

export const Image = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 10rem;
`;

export const Button = styled.button`
    border: none;
    
    svg {
        width: 25px;
        height: 25px;
    }
`;

export const GithubButton = styled.button`
    background-image: linear-gradient(to right, #5E3BEE, #FF6B6B);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 3.5rem;
    padding: 1rem;
    border: none;
    border-radius: 5rem;
    bottom: 3rem;

    font-size: 1.5rem;
`;
