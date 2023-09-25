import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { Header } from "../src/components/Header";
import { Home } from "../src/components/Home";
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Adicione outras rotas conforme necessário */}
        </Routes>
        <Footer/>
        {/* Remova a renderização dos componentes aqui se você desejar que eles sejam renderizados dentro das rotas */}
      </div>
      <GlobalStyle />
    </Router>
  );
}

export default App;
