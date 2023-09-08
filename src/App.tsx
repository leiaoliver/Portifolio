import React from 'react';
import {GobalStyle} from './styles/global';
import { Header } from "../src/components/Header";
import { Home } from "../src/components/Home";

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <GobalStyle />
    </div>
  );
}

export default App;
