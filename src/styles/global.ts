import { createGlobalStyle } from 'styled-components';

export const GobalStyle = createGlobalStyle` 
:root {
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body, html {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
  }

  ul {
    list-style:none;
  }

  a {
    text-decoration: none;
  }

  button {
    font: inherit;
    color: inherit;
    cursor: pointer;
    overflow: visible;
    outline: none;
    -webkit-appearance: none;
    cursor: pointer;

    background: none;
    padding: 0;
    margin: 0;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: white;
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;