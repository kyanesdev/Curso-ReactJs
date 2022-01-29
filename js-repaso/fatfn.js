//La palabra Class hace lo siguiente
//Funciones que se declaran con la palabra reservada "function"
//1) La palabra "function" me indica que es una función
//2) Puede tener un contexto de this y puede ser utilizado para implementar herencia basada en prototipos en javascript.

function fn(){
    this.prop = 'propiedad';
    return 'kevinsito feliz';
}

//Recalco la palabra Class solamente es azucar sintactica
fn.prototype.lala = function funcionDePrototipo(){};

//Estoy creando un objeto literal del aire
//este objeto toma todas las propiedades e ignora el return
//Lo que retorna de manera implicita es el this
const r = new fn();
//console.log(r);
//console.log(r.__proto__);


//Las palabras reservada de new NO pueden ser llamadas en arrow functions
//NO TIENEN CONTEXTO DE THIS
//las fatArrowFn tienen un return implicito
const fatFn = ()=>{
    this.prop = 'propiedad';
    return this;
}


const r1 = fatFn();

console.log(r1);

const fnR  = ()=> 2;
console.log(fnR());