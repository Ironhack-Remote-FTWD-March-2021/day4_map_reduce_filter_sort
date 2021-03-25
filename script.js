// const a = []

// for(let i = 0; i < 5; i++){
//   const b = a
//   b.push('hola')
// }

// console.log(a)

// let array = []

// for(let i = 0; i < 5; i++){
//   let otherArray = array
//   otherArray.push('x')
// }

// console.log(array)

// const a = 'Jaime'

// function myFunction(){
//   const b = 'Pedro'
//   for(let i = 0; i < 5; i++){
//     const c = 'Maria'
//     // console.log(b)
//   }
//   // console.log(b)

// }

// myFunction()
// console.log(c)
// console.log(a)

// const otherFunction = function(){
//   const sum = []
//   return sum
// }

// const m = otherFunction()
// m.push('x')

// const y = otherFunction()

// console.log(y)

//HOISTING

// console.log(x)

// let x = 5;

//-----------

// var x;

// console.log(x)

// x = 5

// function declarations

// var divide;

// function multiply(){
//   return 'multiplicar'
// }

// console.log(multiply)
// console.log(divide)

// // function expressions

// divide = function(){
//   return 'dividir'
// }

// console.log(hello)

//High order function: una funcion que puede recibir otra funcion como argumento

//Callback function: una funcion que pasa como argumento a otra funcion

const numbers = [3, 5, 6, 8, 2];

const totalSum = (list) => {
  let counter = 0;
  list.forEach((number) => (counter += number));
  return counter;
};

// console.log(totalSum(numbers))

const add = (first, second) => first + second;

const multiply = (first, second) => first * second;

const operate = (x, y, callback) => callback(x, y);

// console.log(operate(2, 3, add))
// console.log(operate(15, 2, multiply))

//setTimeout(<callback>, tiempo(milisegundos))

// setTimeout(()=>{
//   console.log('Holaaaa!!!!')
// }, 1000)

//setInterval(<callback>, tiempo(milisegundos))

//clearInterval(interval) --> sirve para parar un interval

// const x = setInterval(()=>{
//   console.log('code()')
// }, 1000)

// setTimeout(()=>{
//   clearInterval(x);
// }, 5000)

const person = {
  name: "Jaime",
  lastName: "Jacobo",
  personalGreet: "Hola chavales!",
  alive: true,
  dogs: ["Maya", "Jordi"],
  sports: ["Padel", "Skate"],
  greet: function () {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  },
};

// console.log(this)

//En funciones normales el this hace referencia al objeto en donde está definida la función en donde estás poniendo el this

//1. Buscar la función en donde estamos poniendo el this
//2. Buscar el objeto(objeto literal, funcion, etc) en donde estamos creando esta función

// * Las arrow functions "pasan" del this. Si tenemos un this dentro de un arrow function, no podemos contar esta funcion como "la funcion donde estamos declarando el this", porque los arrows function pasan el relevo a la siguiente funcion u objeto.

person.greet();

const x = setInterval(() => {
  console.log("code()");
}, 1000);
setTimeout(() => {
  clearInterval(x);
}, 5001);
