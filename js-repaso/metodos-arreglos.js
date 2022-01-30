const arr = [0,1,2,3,4];

//filter
const r = arr.filter((el,i) =>{
    //console.log(i);
    return el > 2;
});
//console.log(r);

//map
/* const mapped = arr.map((el,i)=>{
    console.log(i)
    return el * 2

}); */
//console.log(mapped);

//ejemplo de react
const users = [
    {
        id: 1 , name: 'Porki kevin'
    },

    {
        id: 2 , name: 'Porki ladri'
    },

    {
        id: 3 , name: 'Porki angie'
    },
]

const mapped = users.map((user)=>`<h1>${user.name}<h1>`);
//console.log(mapped);


//reduce
//const r1 = arr.reduce((acc,el)=> acc + el , 0);
// const getMax = (a,b)=> Math.max(a,b);
// const r1 = arr.reduce(getMax , 0);

// const r1 = users.reduce((acc,el) => 
//     `${acc === '' ? '': `${acc},`} ${el.name}`,'');
// console.log(r1);

const r1 = users.reduce((acc,el)=>{
    if(el.id < 2 ){
        return acc;
    }else{
        return acc.concat(el);
    }
} , [])

console.log(r1);