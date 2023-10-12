import React, { useState } from 'react';
import { Title, Content, Card } from './styles';
import { Container } from '../../styles/global';
import image from '../../assets/1635968989145-removebg-preview 1.svg';

interface KnowledgeProps {
  id: string;
}

export function Knowledge({ id }: KnowledgeProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseEnter = (cardIndex: number) => {
    setHoveredCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const cards = [
    { title: 'HTML', description: 'Your HTML description here Your HTML description here Your HTML description here Your HTML description here Your HTML description here' },
    { title: 'CSS', description: 'Your CSS description here' },
    { title: 'CSS', description: 'Your CSS description here' },
    { title: 'CSS', description: 'Your CSS description here' },
    { title: 'CSS', description: 'Your CSS description here' },
    { title: 'CSS', description: 'Your CSS description here' },
    { title: 'CSS', description: 'Your CSS description here' },
    { title: 'CSS', description: 'Your CSS description here' },
    { title: 'CSS', description: 'Your CSS description here' },
    { title: 'CSS', description: 'Your CSS description here' },

    // Adicione mais cartões conforme necessário
  ];

  return (
    <Container
      id={id}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
    >
      <Title>Conhecimentos</Title>
      <Content>
        {cards.map((card, index) => (
          <Card
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <h2 style={{ opacity: hoveredCard === index ? 0 : 1, visibility: hoveredCard === index ? 'hidden' : 'visible' }}>{card.title}</h2>
            <img src={image} alt={card.title} style={{ opacity: hoveredCard === index ? 0 : 1, visibility: hoveredCard === index ? 'hidden' : 'visible' }} />

            {hoveredCard === index && (
              <p>
                {card.description}
              </p>
            )}
          </Card>
        ))}
      </Content>
    </Container>
  );
}
