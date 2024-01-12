import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionar = (colaborador) => {
    console.log(colaborador)
    setColaboradores({...setColaboradores, colaborador})

  }

  return (
    
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionar(colaborador)}/>
      <Time nome="Programação"></Time>
      <Time nome="Front-End"></Time>
      <Time nome="Data Science"></Time>
      
    </div>
  );
}

export default App;
