import styled, { keyframes } from 'styled-components';



export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 5rem;

    width: 100%;
`

export const Card = styled.div`
    width: 25%;
    height: 40%;
    padding: 2rem;

    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);

    h2 {
        font-size: 2.5rem;
    }

    p{
        margin-top: 1rem;
        font-size: 1.5rem;
    }
`

export const Image = styled.img``
