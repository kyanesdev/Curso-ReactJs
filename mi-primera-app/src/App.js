import logo from './logo.svg';
//import './App.css';
import './main.css';

const estilo2 = {
  boxShadow: '0 5px 3px rgba(0, 0, 0, 0.5)'
}

const estilo = ({bg = '#222'})=> ({
  backgroundColor: bg,
  color: '#fff',
  padding: '2rem',
  margin: '10px 15px'
})

const Li = ({children})=>{


  return (
    <li className='clase-li'>{children}</li>
  )
}


//Un componente de react puede ser declarado como funcion
//o tambien puede ser declarado como una constante con la arrow function
function App() {

  return (
    <ul className="clase-css">

      <Li estado="sadly">valor de li</Li>

    </ul> 
  );
}

export default App;
