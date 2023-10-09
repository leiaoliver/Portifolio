import React from 'react'; // Make sure to import React
import { Title } from './styles'; // Import the CSS file correctly
import { Container } from '../../styles/global';

interface ServicesProps {
    id: string;
}

export function Services({id}:ServicesProps) {
  return (
    <Container id={id}>
       <Title>Serviços</Title>
    </Container>
  );
}