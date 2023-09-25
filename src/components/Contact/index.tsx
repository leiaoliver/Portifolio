import React, { useState } from 'react';
import { Title, Form, Content, Content2 } from './styles'; // Importe o CSS corretamente
import { Container } from '../../styles/global';

export function Contact() {
  const [formData, setFormData] = useState({
    primeironome: '',
    segundonome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar os dados do formulário para um servidor ou fazer o que desejar com eles
    console.log(formData);
  };

  return (
    <Container id='contact'>
      <Form onSubmit={handleSubmit}>
      <Title>Contato</Title>
      <p>Entre em contato para saber mais</p>
      <Content>
        <div>
          <label htmlFor='nome'>Primeiro nome:</label>
          <input
            type='text'
            id='nome'
            name='nome'
            value={formData.primeironome}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='nome'>Segundo nome:</label>
          <input
            type='text'
            id='nome'
            name='nome'
            value={formData.segundonome}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='email'>Telefone:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.telefone}
            onChange={handleInputChange}
            required
          />
        </div>
      </Content> 

      <Content2>
        <div>
          <label htmlFor='email'>Selecione o serviço:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='mensagem'>Mensagem:</label>
          <textarea
            id='mensagem'
            name='mensagem'
            value={formData.mensagem}
            onChange={handleInputChange}
            required
          />
        </div>
      </Content2>
       
        <button type='submit'>Enviar</button>
      </Form>
    </Container>
  );
}
