import styled from 'styled-components';

export const Content = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(5, 1fr);
    gap: 4rem;
    margin-top: 3rem;
`;

export const Title = styled.h1`
    font-size: 4rem;
    color: transparent;
    background-image: linear-gradient(to right, #5E3BEE, #FF6B6B);
    background-clip: text;
    -webkit-background-clip: text;
    display: inline-block;
    cursor: pointer;
    user-select: none;
    letter-spacing: 0.4rem;
    line-height: 1.2;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    height: 200px;
    justify-content: center;
    border: 1px solid #5E3BEE;
    border-radius: 0.75rem;
    padding: 1rem;
    cursor: pointer;

    h2 {
        margin-bottom: 1rem;
    }

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: -150px;
    }

`;
