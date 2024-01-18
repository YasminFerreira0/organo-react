import { useState } from 'react'; //importação do react para useState
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '', 
      corSecundaria: ''

    },
    {
      nome: 'Front-End', 
      corPrimaria: '', 
      corSecundaria: ''

    },
    
    {
      nome: 'Data Science',
      corPrimaria: '', 
      corSecundaria: ''

    },
    
    {
      nome: 'Devops', 
      corPrimaria: '', 
      corSecundaria: ''

    },
    
    {
      nome: 'Ux e Design',
      corPrimaria: '', 
      corSecundaria: ''

    },
    {
      nome: 'Mobile', 
      corPrimaria: '', 
      corSecundaria: ''

    },
    
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '', 
      corSecundaria: ''

    },
    
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionar = (colaborador) => {
    console.log(colaborador)
    setColaboradores({...setColaboradores, colaborador})

  }

  return ( // Programa react publicado 
    
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionar(colaborador)}/>
      <Time nome="Programação"></Time>
      <Time nome="Front-End"></Time>
      <Time nome="Data Science"></Time>
      <Time nome="Devlops"></Time>
      <Time nome="Ux e Design"></Time>
      <Time nome="Mobile"></Time>
      <Time nome="Inovação e Gestão"></Time>
      
    </div>
  );
}

export default App; // exportação da função react 
