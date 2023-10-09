import React from 'react'; // Make sure to import React
import { Title } from './styles'; // Import the CSS file correctly
import { Container } from '../../styles/global';

interface KnowledgeProps {
    id: string;
}

export function Knowledge({id}: KnowledgeProps) {
  return (
    <Container id={id}>
       <Title>Conhecimentos</Title>
    </Container>
  );
}
