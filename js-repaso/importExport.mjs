//Diferentes tipos de exports
/* export const mates = ['mate1','mate2','mate3'];
const cafe = ['cafe1','cafe2','cafe3']; 
export const otrosDesayunos = []; */

/* module.exports = {
    mates,
    cafe
} */

const mates = ['mate1','mate2','mate3'];
const cafe = ['cafe1','cafe2','cafe3']; 
const otrosDesayunos = [];

//Se pueden importar funciones
//Tambien se pueden exportar variables, constantes, clases , etc.
const fn1 = ()=>{
    return 'soy la funcion 1'
}

function fn2(){
    return 'soy la funcion 2'
}

export{
     mates, 
     otrosDesayunos,
     fn1,
     fn2
}

export default cafe;