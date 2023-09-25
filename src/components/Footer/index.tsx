import React from 'react'; // Make sure to import React
import { Title, Content } from './styles'; // Import the CSS file correctly
import { Container } from '../../styles/global';

export function Footer() {
  return (
    <Container id='contact'>
      <Content></Content>
      
      <Content className='line'></Content>
    </Container>
  );
}
