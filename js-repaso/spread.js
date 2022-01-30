const fn = (a,b,c)=>
    console.log(a + b + c);

const arr = [1,2,3];

const arr1 = [4,5,6];

//fn(arr[0],arr[1],arr[2]);
//fn(...arr);

const arr2 = [...arr, ...arr1];
console.log (arr2);

const obj1 = {a:1 , b:2};
const obj2 = {b:3 , d:'cósmico'};

const obj3 = {...obj1};


console.log();
console.log('el objeto 3 tiene:' , obj3);




