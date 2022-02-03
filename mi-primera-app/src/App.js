/* import Button from './Button.js'
import './Button.css'


const arr = [
  'porki feliz',
  'porki triste',
  'porki emocionado'
]

const App = ()=>{

  const miVariable = false

  if(miVariable){

    return <p>Mi variable dio true!</p>

  }

  return (
    <div>
      <h1 onClick={(e)=>console.log('click' , e)}>Hola Mundo</h1>
      {arr.map(el => <p key={el}>{el}</p> )}
      
      <Button onClick={()=>console.log('clickeado')}>
        Enviar
      </Button>
    </div>
  )

} */

//Componente basado en clases

import {Component} from 'react'

class Button extends Component {
    render(){

      console.log('ejecutando metodo render de button')
      return (
        <button>Enviar</button>
      )

    }
}
class App extends Component {

    //Esto es el estado de un componente
    //puede contener propiedades y tiene que estar escrito
    //si o si en ingles "state" ya que estado no lo tomaria
    state = {
      valor: 3
    }

    //Es como los componentes funcionales que retornan contenido
    //en JSX
    render(){

      console.log(this.state);
      
      return (
        <div>
          <p>Hola Mundo</p>
          <Button></Button>
          //el componente se actualiza cuando llamamos a setState
          <button className={`${this.state.valor}`} onClick={()=> this.setState({valor:2})}>
            Enviarselo a App
          </button>
        </div>
      )
    }


}



export default App