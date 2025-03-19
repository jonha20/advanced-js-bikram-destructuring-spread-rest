//RESUELVE LOS EJERCICIOS AQUÍ
//1.- Dado el objeto empleados, extrae la empleada Ana completa.

const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];
let ana = empleados[1];
console.log(ana);

//2.- Dado el objeto empleados, extrae el email del empleado Luis --> Luis@gmail.com
let emailLuis = empleados[0].email;
console.log(emailLuis);
//3.- Usa destructuración para cambiar los valores de a y b;
let a = 5;
let b = 3;
[a, b] = [3, 5];
console.log(a);
console.log(b);

// Al final
//let a = 3;
//let b = 5;

// 4.- Dado el objeto HIGH_TEMPERATURES: Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
let {yesterday: MaximaAyer, today:maximaHoy ,tomorrow:maximaManana} = HIGH_TEMPERATURES;
console.log(maximaHoy);
console.log(maximaManana);

// 5.- Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
function sumEveryOther(...rest){
    let total = 0
    for (const element of rest) {
         total+= element;
    }return total
}; 
console.log("La suma es: "+ sumEveryOther(11, 3, 12)); 
console.log("La suma es: " + sumEveryOther(1,2,3,4,5));
console.log("La suma es: " + sumEveryOther(1,1,1,1,1,1,1));

//6 - Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números)

function addOnlyNums(...items){
    let suma = 0;
    for (const element of items) {
        if (!isNaN(element)) {
            suma += element;
        }
    }//return suma;
    let result6 =  items.filter(number => !isNaN(number)).reduce((num, acumulador) => num + acumulador,0)
    return result6
}

console.log(addOnlyNums(1,"perro", 6, "gato", "ratón", 7));// to equal 14
console.log(addOnlyNums(1, "perro", 6, "gato", 2, "ratón", 7, 3, "vaca", "gallina")); //to equal 19

//7 - Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

const countTheArgs = (...args) => args.length

console.log(countTheArgs(1,"perro", 6, "gato", "ratón", 7)); //to equal 6
console.log(countTheArgs(1, "perro", 6, "gato", 2, "ratón", 7, 3, "vaca", "gallina"));// to equal 10

//8 - Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
const combineTwoArrays = (b, c) => [...b, ...c]; 

console.log(combineTwoArrays([1, 2, 3], [4, 5, 6]) )//devuelve [1, 2, 3, 4, 5, 6
console.log(combineTwoArrays([1, 2], [3, 4, 5, 6]) )//devuelve [1, 2, 3, 4, 5, 6
console.log(combineTwoArrays([1], [2, 3, 4, 5, 6])) //devuelve [1, 2, 3, 4, 5, 6

//9 - Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

const onlyUniques = (...items) =>[... new Set(items)]
   

console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo")); //["gato", "pollo", "cerdo"]
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); //[1, 2, 3, 6, 7, 8]

//10 - Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array..

const combineAllArrays = (...array) => array.reduce((b,c) => [...b, ...c]) ; 

console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]) );//devuelve [3, 6, 7, 8, 2, 7, 3, 1]
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12],[2, 44, 22, 7, 3, 1]));// devuelve [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

//11 - Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

const sumAndSquare = (...array) => array.reduce((accumulator, currentValue) => accumulator + currentValue ** 2, 0); 

console.log(sumAndSquare(1, 2, 3, 4, 5, 6));
console.log(sumAndSquare(1, 2, 3, 4, 5));