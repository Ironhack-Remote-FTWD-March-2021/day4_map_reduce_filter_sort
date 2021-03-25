// .map()*

// .filter()

// .sort()

// .reduce()

// MAP

// 1. Se aplica sobre un array
// 2. No modifica al array sobre el que lo aplicas. Te crea uno nuevo
// 3. Qué hace? Ejecuta una condición por cada item de un array

// const numbers = [34, 54, 12, 33, 1]
// const mappedNumbers = numbers.map((number) => number * 2)

// console.log(mappedNumbers)

//Mismo codigo de arriba pero sin utilizar el map
// const numbers = [34, 54, 12, 33, 1]

// const mappedNumbers = []

// numbers.forEach((number)=>{
//   mappedNumbers.push(number * 2)
// })

// console.log(mappedNumbers)

//FILTER

// 1. Se aplica sobre un array
// 2. No modifica al array sobre el que lo aplicas. Te crea uno nuevo
// 3. Qué hace? Filtra un array con la condición que tú le pongas. Si el return es true, entonces me va a pushear ese valor al array nuevo. Si es falso, lo va a descartar

// const otherNumbers = [4, 56, 23, 88, 9]

// const filteredArray = otherNumbers.filter((number)=> {
//   return number < 10
// })

// const filteredArray = otherNumbers.filter((number)=> number < 10)

// console.log(filteredArray)

// const prueba = 'Alfredo'

// console.log(prueba)

// const classes = [
//   [
//     { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
//     { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
//     { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
//     { firstName: 'Lulu', lastName: 'Considine', age: 20 },
//     { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
//   ],
//   [
//     { firstName: 'Charlie', lastName: 'Rolfson', age: 23 },
//     { firstName: 'Austin', lastName: 'Schowalter', age: 26 },
//     { firstName: 'Emie', lastName: 'Franecki', age: 29 },
//     { firstName: 'Okey', lastName: 'Runte', age: 18 },
//     { firstName: 'Jameson', lastName: 'Jakubowski', age: 22 }
//   ],
//   [
//     { firstName: 'Antwan', lastName: 'Marquardt', age: 22 },
//     { firstName: 'Eugenia', lastName: 'Nienow', age: 23 },
//     { firstName: 'Keely', lastName: 'Hagenes', age: 29 },
//     { firstName: 'Jazmin', lastName: 'Aufderhar', age: 29 },
//     { firstName: 'Stanley', lastName: 'Hand', age: 22 }
//   ],
//   [
//     { firstName: 'Vincent', lastName: '', age: 20 },
//     { firstName: 'Mervin', lastName: 'Blick', age: 28 },
//     { firstName: 'Damien', lastName: '', age: 28 },
//     { firstName: 'Fabian', lastName: 'Kautzer', age: 22 },
//     { firstName: 'Lilliana', lastName: 'Lesch', age: 26 }
//   ],
//   [
//     { firstName: 'Antonette', lastName: 'Stokes', age: 25 },
//     { firstName: 'Alexandrine', lastName: 'DuBuque', age: 22 },
//     { firstName: 'Braeden', lastName: 'Walker', age: 26 },
//     { firstName: 'Derick', lastName: 'Weber', age: 22 },
//     { firstName: 'Robert', lastName: 'Beatty', age: 30 }
//   ]
// ];

// const studentsLessThan25 = classes[0].filter((student) => student.age < 25)

// 1. Crear un array nuevo en el que metas todos los estudiantes mayores de 23 años de la tercera clase
// 2. Crear un array nuevo en el que metas a todos los estudiantes de la cuarta clase que no tengan registado un apellido
// 3. Crear un array nuevo en el que estén todos mis estudiantes. Los que tengan más de 25 años, cambiarles el apellido a 'Rodriguez'.

// console.log(studentsLessThan25)

// const numbers = [34, 56, 21, 34, 8]

// const answer = numbers.map((number)=>{
//   if(number % 2 === 0){
//     return number + 10
//   } else {
//     return number - 10
//   }
// })

// console.log(answer)

// const a = [2, 3, 4]
// const b = a.map((number)=>number)

//Spread operator
// const b = [...a]

// b.push(9)

// console.log(a)

//REDUCE

// 1. Se aplica sobre un array que no va a modificar
// 2. Te devuelve un valor (no te devuelve un array)
// 3. Reduce un array a un valor

// const numbers = [1, 2, 2, 5]

// const answer = numbers.reduce((counter, number)=>{
//   return counter + number
// })

// console.log(answer)

//counter va a coger el valor del primer item del array (si no le definimos un valor)

//counter va a coger el valor de lo que devolvemos (return) dentro de la callback function

// const menu = [
//   { name: 'Carrots', calories: 150 },
//   { name: 'Steak', calories: 350 },
//   { name: 'Broccoli', calories: 120 },
//   { name: 'Chicken', calories: 250 },
//   { name: 'Pizza', calories: 520 }
// ];

//.reduce(<callback>, <valor inicial de counter>)

// const answer = menu.reduce((counter, food)=>{
//   return counter + food.calories
// }, 0)

// console.log(answer / menu.length)

// setTimeout(()=>{

// }, 5000)

//SORT
// 1. Se aplica sobre un array
// 2. sort modifica el array original
// 3. Como funciona? sort tiene una serie de instrucciones que tú puedes utilizar para crear tu propio algoritmo de ordenación. Para ello, tienes que pasarle una callback function como argumento, y en ella meter la lógica que quieres que aplique el sort. Las reglas que sigue el sort son las siguientes:

// Si el return es negativo o 0, se mantienene en el mismo orden
// Si el return es positivo, se cambian el orden

// const numbers = [56, 2, 10, 9, 8]

// //Ordenar numeros de menor a mayor
// const answer = numbers.sort((a, b)=>{
//   return a - b
// })

// //Ordenar numeros de mayor a menor
// const answer = numbers.sort((a, b)=>{
//   return b - a
// })

// console.log(answer)

const menu = [
  { name: "Chicken", calories: 150 },
  { name: "Steak", calories: 150 },
  { name: "Broccoli", calories: 120 },
  { name: "Carrots", calories: 250 },
  { name: "Caaaaa", calories: 520 },
];

// const answer = menu.sort((a, b) => a.calories - b.calories)

// console.log(answer)

//Oerdenar alfabeticamente

menu.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name <= b.name) return -1;
});

console.log(menu);

console.log("Chicken" > "Carrots");

//BONUS

const menu = [
  { name: "Caaaaa", calories: 350 },
  { name: "Steak", calories: 150 },
  { name: "Broccoli", calories: 120 },
  { name: "Carrots", calories: 250 },
  { name: "Chicken", calories: 350 },
  { name: "Pizza", calories: 350 },
  { name: "Pasta", calories: 350 },
];

menu.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name <= b.name) {
    return -1;
  }
});

menu.sort((a, b) => {
  return a.calories - b.calories;
});

console.log(menu);
