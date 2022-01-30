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

    propiedad = 'mi propiedad';
    static estatico = 2;
    #hambre = false;



    constructor(estado = 'feliz'){
        this.estado = estado;
        
        //con this estoy haciendo referencia a la instancia de la clase
        //y con el punto pongo el nombre de la propiedad
        //console.log(`soy un porki ${this.estado}`) 
    }
    //metodo hablar, es metodo porque esta dentro de una clase
    hablar(){
        console.log(`soy un porki ${this.estado} y estoy  ${this.#hambre? ` con mucha hambbre` : `llenito`}`)
    }

    //metodo estático, no es necesario crear una nueva instancia de clase
    //es un metodo que lo accedemos desde la clase
    static comer(){
        //los metodos estaticos no pueden acceder a las propiedades
        //esto pasa porque forman parte de las instancias
        //la unica forma es creando una propiedad estatica 
        console.log(this.estatico, 'estoy comiendo');
    }

}

Porki.comer();

//No podes crear una nueva instancia de una clase sin
//la palabra reservada de "new"
const king = new Porki('king');
// king.hablar();
//console.log(feliz.__proto__);
const triste = new Porki('triste');
// triste.hablar();
const nose = new Porki();
// nose.hablar();

