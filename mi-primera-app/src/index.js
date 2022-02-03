import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//<p>hola mundo</p>

//Estos son componentes
//El contenido dentro del tag es una propiedad
//Siempre para acceder a los datos dentro de las tag tengo que usar children

/* const Li = ({ children , estado , casa , edad })=> {
  console.log(casa,edad);
  return (
    <li>{children} estoy {estado}</li>
  )

}
const X = ()=> 
  <ul>
    <Li 
    estado={'feliz'}
    casa={false}
    edad={20}
    >
      Porki </Li>  
    <Li estado={'triste'}> Porki </Li>
    <Li estado={'emocionado'}> Kevincito</Li>
  </ul> */


  

//metodo para renderizar aplicaciones
/* ReactDOM.render(
  <X/> , document.getElementById('root')
) */ //jsx es azucar sintactica para no estar
//escribiendo todo el tiempo React.createElement()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
