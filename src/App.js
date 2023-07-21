import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegation } from './components/navigation/Navegation';
import { Banner } from './components/banner/Banner';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';


function App() {
  return (
    <div className="App">
      <Navegation />
      <Banner />
      <Skills />
      <Projects/>
    </div>
  );
}

export default App;
