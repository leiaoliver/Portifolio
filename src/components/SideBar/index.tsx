import React, { useState } from 'react';
import { FiHome, FiUser, FiSettings, FiBriefcase, FiBookOpen, FiMail } from 'react-icons/fi';
import { Navigation } from './styles'; // Certifique-se de que as importações estejam corretas
import { Link } from 'react-scroll';



export function SideBar() {
 const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleMouseEnter = () => {
    setSidebarOpen(true);
  };

  const handleMouseLeave = () => {
    setSidebarOpen(false);
  };

  return (
    <Navigation 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      expanded={isSidebarOpen}
    >
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FiHome size={24} /> {isSidebarOpen && <span>Página inicial</span>}
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FiUser size={24} /> {isSidebarOpen && <span>Sobre mim</span>}
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FiSettings size={24} /> {isSidebarOpen && <span>Serviços</span>}
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FiBriefcase size={24} /> {isSidebarOpen && <span>Projetos</span>}
          </Link>
        </li>
        <li>
          <Link to="knowledge" smooth={true} duration={500} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FiBookOpen size={24} /> {isSidebarOpen && <span>Conhecimentos</span>}
          </Link>
        </li>
      </ul>
    </Navigation>
  );
}
