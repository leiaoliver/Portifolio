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
    }
`

export const Content2 = styled.div`
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

    select {
        display: flex;
        height: 40px;
        width: 100%;
        padding: 10px;
        align-items: center;
        border: none;
        border-radius: 5px;
        border: 2px solid #3D269D;
        opacity: 70%;

        background: white;

        &:focus {
            border: none;
            border-radius: 5px;
            border: 2px solid #3D269D;
        }
    }

}


.message {
 label {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
 }

 textarea {
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
}
`


export const Title = styled.h2`
    color: #282938;
    font-size: 35px;
`

export const Form = styled.form`
display: flex;
gap: 16px;
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

