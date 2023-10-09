import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { Header } from "../src/components/Header";
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Knowledge } from './components/Knowledge';
import { Contact } from './components/Contact';
import { SideBar } from './components/SideBar';

function App() {


  return (
    <Router>
      
        <Header />  
       {/* <SideBar />  */}
        <div className="content">
          <Home id='home' />  
          <About id='about'/>
          <Services id="services"/>
          <Projects id="projects"/>
          <Knowledge id="knowledge"/>
          <Contact id="contact"/>
        </div>
        <Footer />
      
      <GlobalStyle />
    </Router>
  );
}

export default App;
