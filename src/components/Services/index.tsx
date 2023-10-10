import React from 'react'; // Make sure to import React
import { Card, Image,CardContainer } from './styles'; // Import the CSS file correctly
import { Container } from '../../styles/global';
import { FaGlobe, FaMobile } from 'react-icons/fa'; // Importe os ícones desejados

interface ServicesProps {
    id: string;
}

export function Services({id}:ServicesProps) {
  return (
    <Container id={id}>
   <CardContainer>
    <Card>
        <span style={{background: '#d0d0d0', borderRadius: '50%', height: '50px'}}>
            <FaGlobe style={{ fontSize: '3rem' }}/>
        </span>
            <h2>Sites web</h2>
            <p>Desenvolvimento de sites empresariais. Faça sua empresa ser facilmente encontrada online.</p>
        </Card>

        <Card>
            <FaMobile style={{ fontSize: '3rem' }}/>
            <h2>Aplicativos mobile</h2>
            <p>Desenvolvimento de sites empresariais. Faça sua empresa ser facilmente encontrada online.</p>
        </Card>
   </CardContainer>
    </Container>
  );
}