import React from 'react'; // Make sure to import React
import { Title } from './styles'; // Import the CSS file correctly
import { Container } from '../../styles/global';

interface ProjectsProps {
  id: string;
}

export function Projects({id}: ProjectsProps) {
  return (
    <Container id={id}>
       <Title>Projetos</Title>
    </Container>
  );
}
