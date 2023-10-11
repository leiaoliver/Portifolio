import React, { useState } from 'react';
import { Container } from '../../styles/global';
import image from '../../assets/About Me.svg';
import { FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import { CardContainer, Button, Card } from './styles';

const slideContent = [
  {
    id: 1,
    content: (
      <Card>
        <div className='card1'>
            <h2>Desenvolvimento Web e Mobile (Frontend)</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Eum aliquam, repellat accusantium eius velit maxime ratione 
                 error in a provident est natus! Aspernatur nihil unde odio reprehenderit 
                 officiis! Illo, pariatur.
            </p>
            <button>HIRE ME</button>
        </div>

        <div className='card2'>
            <img src={image} />
        </div>
      </Card>
    ),
  },
  {
    id: 2,
    content: (
        <Card>
          <div className='card1'>
              <h2>Desenvolvimento Web e Mobile (Backend)</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Eum aliquam, repellat accusantium eius velit maxime ratione 
                   error in a provident est natus! Aspernatur nihil unde odio reprehenderit 
                   officiis! Illo, pariatur.
              </p>
              <button>HIRE ME</button>
          </div>
  
          <div className='card2'>
              <img src={image} />
          </div>
        </Card>
      ),
  },
  {
    id: 3,
    content: (
        <Card>
          <div className='card1'>
              <h2>Desenvolvimento Fullstack Web e Mobile</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Eum aliquam, repellat accusantium eius velit maxime ratione 
                   error in a provident est natus! Aspernatur nihil unde odio reprehenderit 
                   officiis! Illo, pariatur.
              </p>
              <button>HIRE ME</button>
          </div>
  
          <div className='card2'>
              <img src={image} />
          </div>
        </Card>
      ),
  },
];

interface ServicesProps {
  id: string;
}

export function Services({ id }: ServicesProps) {
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
    <Container id={id}>
      <CardContainer className={`slide-container ${slideDirection}`}>
        <Button onClick={prevSlide} className="slide-button">
            <FaArrowLeft/>
        </Button>

        <div className="slide">{slideContent[currentIndex].content}</div>

        <Button onClick={nextSlide} className="slide-button">
          <FaArrowRight/>
        </Button>
      </CardContainer>
    </Container>
  );
}
