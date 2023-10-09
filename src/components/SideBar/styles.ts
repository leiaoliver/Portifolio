import styled from 'styled-components';

interface NavigationProps {
  expanded: boolean;
}

export const Navigation = styled.nav<NavigationProps>`
  display: flex;
  position: fixed;

  font-size: 1.1rem;
  font-weight: 400;
  line-height: 150%;

  background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    color: #1C1E53;

    /* A largura depende do estado "expanded" */
    width: ${(props) => (props.expanded ? '220px' : '60px')}; 
    height: 100vh;
    padding: 20px;

    transition: width 0.2s ease; 


    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 4rem;

   

        li {
        position: relative;
        list-style: none;
        cursor: pointer;
        display: flex;
        align-items: center;

        /* Estilo dos ícones */
        & svg {
            margin-right: 0.5rem;
            font-size: 1.5rem;
        }

        /* Estilo dos nomes (inicialmente invisíveis) */
        & span {
            font-size: 1.8rem;
            display: ${(props) => (props.expanded ? 'inline' : 'none')};
        }
        }

        a {
        color: #1C1E53;
        text-decoration: none;
        position: relative;

        &:hover {
            color: #5E3BEE;
        }
     }
  }
`;
