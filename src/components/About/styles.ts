import styled from 'styled-components';

export const Content = styled.div`
    background-color: #000;
    color: #fff;
    position: absolute; 
    width: 650px;
    height: 350px;
    padding: 3rem 5rem;
    margin-left: 550px;
    
    hr {
        margin-top: 1.5rem;
        opacity: 80%;
    }

    p {
        opacity: 60%;
        font-size: 1.8rem;
        font-weight: 400;
        margin-top: 1rem;
        letter-spacing: 0.1rem;
        line-height: 1.3;
    }

    > div {
        margin-top: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;

            :nth-child(1), 
            :nth-child(2),
            :nth-child(3) {
                margin-right: 5rem;
                width: 2.5rem;
                height: 2.5rem;
                cursor: pointer;
            }

            :nth-child(4) {
                width: 2.5rem;
                height: 2.5rem;
                cursor: pointer;
            }


            .instagram {
                transition: color 0.3s ease; /* Adicione uma transição suave para a cor do ícone */
           }
            .instagram:hover{
                color: #bc2a8d;
            }

            .linkedin {
            transition: color 0.3s ease; /* Adicione uma transição suave para a cor do ícone */
            }

            .linkedin:hover {
            color: #0077b5; /* Cor real da logo do LinkedIn para o hover */
            }

            .github {
            transition: color 0.3s ease; /* Adicione uma transição suave para a cor do ícone */
            }

            .github:hover {
            color: #333; /* Cor real da logo do GitHub para o hover */
            }

            .twitter {
            transition: color 0.3s ease; /* Adicione uma transição suave para a cor do ícone */
            }

            .twitter:hover {
            color: #1da1f2; /* Cor real da logo do Twitter para o hover */
            }
            
            a {
                text-decoration: none;
                color: inherit;
            }
    }
`

export const Title = styled.h1`
  font-size: 4rem;
  color: transparent; /* Torna o texto invisível */
  background-image: linear-gradient(to right, #5E3BEE, #FF6B6B); /* Gradiente de cores */
  background-clip: text;
  -webkit-background-clip: text;
  display: inline-block;
  cursor: pointer;
  user-select: none;

  letter-spacing: 0.4rem;
  line-height: 1.2;
`;


export const ImageContainer = styled.div`
  position: relative; /* Defina position: relative no ImageContainer */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eae3e1;
  width: 50vw;
  height: 70vh;
`;

export const Image = styled.img`
  position: absolute; 
  width: 300px;
  height: 400px;
  bottom: 0; 
`;
