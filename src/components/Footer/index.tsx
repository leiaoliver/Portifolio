import React from 'react'; // Make sure to import React
import { Title, Content, Image } from './styles'; // Import the CSS file correctly
import { Container } from '../../styles/global';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/logo.svg'

export function Footer() {
  return (
    <Content>
      <hr /> 

    <div style={{display: 'flex', justifyContent: 'space-between', padding: '2.5rem'}}>
      
      <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', gap: '5rem'}}>
        <Image src={logo} />
        <span>leia bal bal</span>
      </div>
  
      <div style={{display:'flex', alignItems:'end', justifyContent: 'center', gap:'2rem'}}>
      <a href='https://www.instagram.com/leiaoliver388/' target='_blank'>
          <FaInstagram className='instagram'/> 
          </a>
          <a href='https://www.linkedin.com/in/l%C3%A9ia-silva-de-oliveira/' target='_blank'>
          <FaLinkedin className='linkedin'/>
          </a>

          <a href='https://github.com/leiaoliver' target='_blank'>
           <FaGithub className='github'/>
           </a>
           
          <a href='https://twitter.com/liaOliv69924485'>
            <FaTwitter className='twitter' target='_blank'/>
          </a>
      </div>
    </div>
     
   
    </Content>

  );
}
