import { startTransition, useState } from 'react';
import Banner from './componentes/banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/time';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />
      <Time nome='Programação'/>
      <Time nome='Front-End'/>
    </div>
  );
};

export default App;
