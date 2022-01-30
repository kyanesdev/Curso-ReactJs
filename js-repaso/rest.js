const restOperation = (a, ...argumentos)=>{
    /* console.log(a);
    console.log(argumentos); */
}

/* restOperation(1,2,3);

const objeto = {
    a:1 , b:2 , c:3 , d:4
}

const {a , b , ...restobjeto} = objeto;

console.log(a, b , restobjeto); */

const arr = [1,2,3,4,5];

const [a, b , ...r] = arr;
console.log(a, b , r);

//Como lo usariamos en react

const useState = ()=>['valor',()=>{}];

const [val,setValor] = useState();
console.log(val,setValor);