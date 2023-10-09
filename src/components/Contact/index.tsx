import React, { ChangeEvent, useState } from 'react';
import { Title, Form, Content, Content2 } from './styles'; // Importe o CSS corretamente
import { Container } from '../../styles/global';

interface ContactProps {
  id: string;
}

export function Contact({id}: ContactProps) {
  const [formData, setFormData] = useState({
    primeironome: '',
    segundonome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Verifica se o valor é numérico antes de atualizar o estado
    if (!isNaN(Number(value))) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar os dados do formulário para um servidor ou fazer o que desejar com eles
    console.log(formData);
  };

  return (
    <Container id={id}>
      <Form onSubmit={handleSubmit}>
      <Title>Contato</Title>
      <p>Entre em contato para saber mais</p>
      <Content>
        <div>
          <label htmlFor='nome'>Primeiro nome:</label>
          <input
            type='text'
            id='nome'
            name='primeironome'
            value={formData.primeironome}
            onChange={handleInputChange}
            placeholder='Digite seu primeiro nome'
            required
          />
        </div>
        <div>
          <label htmlFor='nome'>Segundo nome:</label>
          <input
            type='text'
            id='nome'
            name='segundonome'
            value={formData.segundonome}
            onChange={handleInputChange}
            placeholder='Digite seu segundo nome'
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
            placeholder='Digite seu email'
            required
          />
        </div>
        <div>
        <label htmlFor='telefone'>Telefone:</label>
        <input
          type='text'
          id='telefone'
          name='telefone'
          value={formData.telefone}
          onChange={handleInputChange}
          placeholder='Digite o telefone'
          required
        />
      </div>
      </Content> 

      <Content2>
      <div>
          <label htmlFor='servico'>Selecione o serviço:</label>
          <select
            id='servico'
            name='servico'
            required
          >
            <option value='opcao1'>Site Web (frontend - Backend)</option>
            <option value='opcao2'>Aplicativo Mobile (frontend - Backend)</option>
          </select>
        </div>


        <div className='message'>
          <label htmlFor='mensagem'>Mensagem:</label>
          <textarea
            id='mensagem'
            name='mensagem'
            value={formData.mensagem}
            onChange={handleTextareaChange} // Use o manipulador de eventos correto para campos de área de texto
            placeholder='Digite sua mensagem'
            required
          />
        </div>
      </Content2>
       
        <button type='submit'>Enviar</button>
      </Form>
    </Container>
  );
}
