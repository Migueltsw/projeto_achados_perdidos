import Banner from './Banner';
import Cards from './Cards';
import BarraNavegacao from './BarraNavegacao';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rodape from './Rodape';

function Home() {
  return (
    <div className="Home">
      <BarraNavegacao />
      <Banner />
      <Cards />
      <Rodape />
    </div>
  );
}

export default Home;