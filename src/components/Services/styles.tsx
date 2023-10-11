import styled, { keyframes } from 'styled-components';

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


export const CardContainer = styled.div`
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
`

export const Card = styled.div`
    width: 100%;
    gap: 5rem;
    display: flex;
   

    .card1 {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        gap: 2rem;
        width: 50%;

        h2 {
            font-size: 3.5rem;
            color: #000;
            opacity: 85%;
        }

        p {
            font-size: 1.5rem;
            color: #000;
            opacity: 75%;
        }

        button {
            width: 10rem;
            height: 4rem;
            padding: 1rem;
            border: none;
            border-radius: 5rem;
            color: #000;
            font-size: 1.3rem;
            background-image: linear-gradient(to right, #5E3BEE, #FF6B6B);
        }
    }

    .card2 {
        width: 50%;

        img {
            width: 300px;
            height: 300px;
        }
    }

`

export const Image = styled.img``

export const Button = styled.button`
    border: none;
    
    svg {
        width: 25px;
        height: 25px;
    }
`
