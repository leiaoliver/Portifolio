import styled from 'styled-components';


export const Content = styled.div`
  font-size: 18px;
  padding: 20px 0;
  text-align: center;
  width: 100%;
  height: 30vh;
  padding: 8rem;

  a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border: 1px solid  #5E3BEE;
  border-image-slice: 1;
  border-radius: 50%;

  text-decoration: none;
  color: inherit;
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
`;


export const Title = styled.div`
`;
export const Image = styled.img`
    width: 10rem;
    height: 5rem;
`;