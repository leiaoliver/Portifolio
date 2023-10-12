import React, { useState } from 'react';
import { Container } from '../../styles/global';
import image from '../../assets/logo.svg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {
  Content,
  CardContainer,
  Card,
  Image,
  Button,
  GithubButton,
} from './styles';

const slideContent = [
  {
    id: 1,
    content: (
      <CardContainer>
        <Card>
          <div>
            <Image src={image} />
          </div>
          <span>
            <h2>Ig.news</h2>
            <p>Lage Paging desenvolvida junto à Rocketseat</p>
          </span>
          <GithubButton>Github</GithubButton>
        </Card>

        <Card>
          <div>
            <Image src={image} />
          </div>
          <span>
            <h2>Ig.news</h2>
            <p>Lage Paging desenvolvida junto à Rocketseat</p>
          </span>
          <GithubButton>Github</GithubButton>
        </Card>

        <Card>
          <div>
            <Image src={image} />
          </div>
          <span>
            <h2>Ig.news</h2>
            <p>Lage Paging desenvolvida junto à Rocketseat</p>
          </span>
          <GithubButton>Github</GithubButton>
        </Card>
      </CardContainer>
    ),
  },
  {
    id: 2,
    content: (
      <CardContainer>
      <Card>
        <div>
          <Image src={image} />
        </div>
        <span>
          <h2>news</h2>
          <p>Lage Paging desenvolvida junto à Rocketseat</p>
        </span>
        <GithubButton>Github</GithubButton>
      </Card>

      <Card>
        <div>
          <Image src={image} />
        </div>
        <span>
          <h2>Ig.news</h2>
          <p>Lage Paging desenvolvida junto à Rocketseat</p>
        </span>
        <GithubButton>Github</GithubButton>
      </Card>

      <Card>
        <div>
          <Image src={image} />
        </div>
        <span>
          <h2>Ig.news</h2>
          <p>Lage Paging desenvolvida junto à Rocketseat</p>
        </span>
        <GithubButton>Github</GithubButton>
      </Card>
    </CardContainer>
    ),
  },
  {
    id: 3,
    content: (
      <CardContainer>
      <Card>
        <div>
          <Image src={image} />
        </div>
        <span>
          <h2>Ig.news</h2>
          <p>Lage Paging desenvolvida junto à Rocketseat</p>
        </span>
        <GithubButton>Github</GithubButton>
      </Card>

      <Card>
        <div>
          <Image src={image} />
        </div>
        <span>
          <h2>Ig.news</h2>
          <p>Lage Paging desenvolvida junto à Rocketseat</p>
        </span>
        <GithubButton>Github</GithubButton>
      </Card>

      <Card>
        <div>
          <Image src={image} />
        </div>
        <span>
          <h2>Ig.news</h2>
          <p>Lage Paging desenvolvida junto à Rocketseat</p>
        </span>
        <GithubButton>Github</GithubButton>
      </Card>
    </CardContainer>
    ),  },
];

interface ServicesProps {
  id: string;
}

export function Projects({ id }: ServicesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');

  const nextSlide = () => {
    setSlideDirection('next');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideContent.length);
      setSlideDirection('');
    }, 500); // Ajuste a duração da animação em milissegundos (500ms no exemplo)
  };

  const prevSlide = () => {
    setSlideDirection('prev');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slideContent.length) % slideContent.length);
      setSlideDirection('');
    }, 500); // Ajuste a duração da animação em milissegundos (500ms no exemplo)
  };

  return (
    <Container id={id} style={{ background: '#eaeaea' }}>
      <Content className={`slide-container ${slideDirection}`}>
        <Button onClick={prevSlide} className="slide-button">
          <FaArrowLeft />
        </Button>

        <div className="slide">{slideContent[currentIndex].content}</div>

        <Button onClick={nextSlide} className="slide-button">
          <FaArrowRight />
        </Button>
      </Content>
    </Container>
  );
}
