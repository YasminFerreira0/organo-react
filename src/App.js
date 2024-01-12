import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

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
      
    </div>
  );
}

export default App;
