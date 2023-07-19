import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegation } from './components/navigation/Navegation';
import { Banner } from './components/banner/Banner';


function App() {
  return (
    <div className="App">
      <Navegation />
      <Banner />

    </div>
  );
}

export default App;
