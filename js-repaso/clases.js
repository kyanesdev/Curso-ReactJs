//Esto es una expresion de clase
/* const Rectangulo = class R{

} */

//clases declaradas con class NO tienen hoisting
class Rectangulo{

}

//Hoisting
//Esto ocurre cuando tomamos variables definidas con var
//y funciones definidas con function
//y las lleva al comienzo del archivo.
console.log(Cuadrado);
function Cuadrado(){
    
}
console.log(Cuadrado,Rectangulo);

//Siempre que llamas la palabra reservada "new" va a llamar
//a la funcion "constructor()"
class Porki{
    constructor(){
        console.log('Porki Feliz')
    }
}

const feliz = new Porki();