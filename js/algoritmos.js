// /* 1. Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33” */
// const functionSaludo = (nombre,apellido,edad) => {
//     console.log(`Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`)
// }

// functionSaludo('Moises','Avendaño',22);

// /* 2. Cree una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855  */
// function sumaCubos(...numeros){
//     let suma = 0;
//     for (i = 0; i < numeros.length; i++) {
//         suma = suma + Math.pow(numeros[i],3);
//     }
//     console.log(`La suma de los cubos de ${numeros[0]}, ${numeros[1]} y ${numeros[2]} es ${suma}.`);
// }

// sumaCubos(1,3,5);

// /* 3. Crear una funcion que me retorne el tipo de valor entregado, utilizar la función e imprimir los distintos tipos de JS. */
// const variables = [,null,true,1,'hola',{nombre: 'Juan'}];

// const functionTipoVariable = () => {
//     for (i = 0; i < variables.length; i++) {
//         console.log(`La variable ${variables[i]} es de tipo ${typeof variables[i]}`)
//     }
// }
// functionTipoVariable();

// /* 4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)  */
// function sumaNumeros(...numeros){
//     let suma = 0;
//     for (i = 0; i < numeros.length; i++) {
//         suma = suma + numeros[i];
//     }
//     console.log(`La suma de los numeros ${numeros} es ${suma}.`);
// }

// sumaNumeros(1,3,5);

// /* 5. Crear una función que reciba una matriz de valores y filtre los valores que no son string */
// const valores = [,null,true,1,'hola',{nombre: 'Juan'}];

// const filtrarNoString = valores.filter(valor =>{
//     for (i = 0; i < valores.length; i++) {
//         console.log(`Las variables que no son string son ${typeof valores[i]!==String}`)
//     }
// })

// /* 6. Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden. minMax([1, 2, 3, 4, 5]) ➞ [1, 5]  */
// const valores = [1,2,3,4,5];

// const minMax = () => console.log(`minMax([${valores}]) -> [${Math.min.apply(null, valores)},${Math.max.apply(null, valores)}]`)

// minMax();

// /* 7. Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono. formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890" */

// const enteros = [1,2,3,4,5,6,7,8,9,0];

// const formatPhoneNumber = () => console.log(`formatPhoneNumber([${enteros}]) ➞ "(${enteros[0]}${enteros[1]}${enteros[2]}) ${enteros[3]}${enteros[4]}${enteros[5]}-${enteros[6]}${enteros[7]}${enteros[8]}${enteros[9]}"`)

// formatPhoneNumber();

// /* 8. Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno. findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2] */
// const matriz1 = [4, 2, 7, 1];
// const matriz2 = [20, 70, 40, 90];
// const matriz3 = [1, 2, 0];

// const findLargestNums = () => console.log(`findLargestNums([[${matriz1}],[${matriz2}],[${matriz3}]]) -> [${Math.max.apply(null, matriz1)},${Math.max.apply(null, matriz2)},${Math.max.apply(null, matriz3)}]`)

// findLargestNums();

// /* 9. Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter. charIndex("hello", "l") ➞ [2, 3] // The first "l" has index 2, the last "l" has index 3.  
// charIndex("circumlocution", "c") ➞ [0, 8] // The first "c" has index 0, the last "c" has index 8.  */

// const palabra = "Hackaton";
// const charIndex = () => console.log(`The first "a" has index ${palabra.indexOf("a")}, the last "a" has index ${palabra.lastIndexOf("a")}.`) 

// charIndex();

// /* 10. Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor. toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]  */

// const objeto = {
//     a: 1,
//     b: 2
// };

// let claveValor = Object.entries(objeto);

// console.log(claveValor);

// /* 11. Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas. 
 
// getBudgets([   { name: "John", age: 21, budget: 23000 }, 
//   { name: "Steve",  age: 32, budget: 40000 },   { name: "Martin",  age: 16, budget: 2700 } ]) ➞ 65700 */

// const datos =[{ name: "John", age: 21, budget: 23000},{name: "Steve",age: 32, budget: 40000},{name:"Martin",age:16,budget:2700}]
// let resultado = datos.reduce((presupuesto,dato)=>{
//     return presupuesto += dato.budget;
// },0)

// console.log(resultado);

// /* 12. Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes. getStudentNames([   { name: "Steve" },   { name: "Mike" },   { name: "John" } ]) ➞ ["Becky", "John", "Steve"]  */

// const estudiantes =[{ name: "Steve"},{name: "Mike"},{name:"Jhon"}]
// for(let estudiante of estudiantes){
//     console.log(Object.values(estudiante));

// }

/* 13. Escriba una función que convierta un objeto en una matriz de claves y valores. objectToArray({   likes: 2,   dislikes: 3,   followers: 10 }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]  */
// const valores ={
//     likes: 2,
//     dislikes: 3,
//     followers: 10
// }
// let arregloDeClavesYValores = Object.entries(valores);
// console.log("Claves y valores: ", arregloDeClavesYValores);

/* 14. Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.  */
// function sumaCuadrados(...n){
//     let suma= 0;
//     for (i = 0; i < n.length; i++) {
//         suma=suma + Math.pow(n[i],2)
//     }
//     console.log(suma);
// }
// sumaCuadrados(1,2,3);

/* 15. Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]  */
// const valoresAMultiplicar = [2,3,1,0];

// function productoPorCantValores(){
//     valoresAMultiplicar.forEach(element => {
//             console.log(element*valoresAMultiplicar.length);
//     });
// }

// productoPorCantValores();

/* 16.  Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero. countdown(5) ➞ [5, 4, 3, 2, 1, 0]  */
// function ordSelDesc(numero) {
//     for (i = numero ; i >=0 ; i--) {
//         let newMatriz =[];
//         newMatriz.push(i);
//         console.log(newMatriz);
//     }
// }

// ordSelDesc(5)

/* 17. Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.  */
// const valores = [10, 4, 1, 4, -10, -50, 32, 21];

// const differenceMinMax = () => {

//     let valorMayor;
//     let valorMenor;
//     let diferencia;
//     valorMayor=Math.max.apply(null, valores);
//     valorMenor=Math.min.apply(null, valores);
//     diferencia=valorMayor-valorMenor;
//     console.log(`La diferencian entre el numero mayor ${valorMayor} y el numero menor ${valorMenor} es ${diferencia}`)
// }

// differenceMinMax();

/* 22. Cree una función que capitalice la última letra de cada palabra.   */

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return console.log(s.slice(0,s.length-1)+ s.charAt(s.length-1).toUpperCase());  
}

capitalize("hello");
