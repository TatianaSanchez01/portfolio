import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { Navegation } from './components/navigation/Navegation';
import { Banner } from './components/banner/Banner';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navegation />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
