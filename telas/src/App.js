import logo from './logo.svg';
import './App.css';
import Banner from './home/Banner';
import Cards from './home/Cards';
import BarraNavegacao from './home/BarraNavegacao';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BarraNavegacao />
      <Banner />
      <Cards />
    </div>
  );
}

export default App;
