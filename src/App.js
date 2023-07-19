import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegation } from './components/navigation/Navegation';
import { Banner } from './components/banner/Banner';
import { Skills } from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Navegation />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
