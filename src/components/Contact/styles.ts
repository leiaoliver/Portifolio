import styled, { keyframes } from 'styled-components';

export const Content = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px; 
    max-width: 700px;
    
    div {
        input {        
            display: flex;
            height: 40px;
            width: 100%;
            padding: 10px;
            align-items: center;
            border: none;
            border-radius: 5px;
            border: 2px solid #3D269D;
            opacity: 70%;
        }

        input:focus {
            background-color: #red;
            color: #333;
          }
    }
`
export const Content2 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 16px; 
max-width: 700px;

input {
    display: flex;
}
`

export const Title = styled.h2`
    color: #282938;
    font-size: 35px;
`

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;

p {
    margin-top: 25px;
    margin-bottom: 60px;
    font-size: 16px;
    opacity: 75%;
}
    

label {
    color: var(--Heading-color, #282938);
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 32px */
}
`

