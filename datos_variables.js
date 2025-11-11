let nombre = "Juan";
let apellido = 'Perez';
let mensaje = `Hola ${nombre}`; // template literals

let edad = 25;
let precio = 99.99;
let infinito = Infinity;
let noEsNumero= NaN;

let esActivo = true;
let esMayor = false;

let valorVacio = null;

let simbolo = Symbol('descripcion');

let numeroGrande = 123456789012345678901234567890n;

// arrays
let colores = ['rojo','verde','azul'];
// objetos
let persona = {
    nombre: 'Ana',
    edad: 30,
    activo:true
};
// Funciones
let saludar = function() {
    console.log('Hola!');
};

// Primitivos (por valor)
let a = 5;
let b = a; // b obtiene una COPIA del valor 5
b = 10; // Cambiar b no afecta a
console.log(a); // 5
console.log(b); // 10

// Referencia (por referencia)
let array1 = [1, 2, 3];
let array2 = array1; // array2 obtiene una REFERENCIA al mismo array
array2.push(4); // Modificar array2 afecta array1
console.log(array1); // [1,2,3,4]
console.log(array2); // [1,2,3,4]

function ejemplo() {
    console.log(x); // undefined (hoisting)
    var x = 5;
    console.log(x); // 5
}

let contador = 0;
contador = 1; // Permitido

if (true) {
    let mensaje = "Hola";
    console.log(mensaje); // Funciona
}
console.log(mensaje); // Reference Error

const PI = 3.14159;
const CONFIG = {apiUrl: 'https//api.example.com' };

const colores1 = ['rojo', 'verde'];
colores1.push('azul'); // Permitido (modifica contenido)
console.log(colores1)

// String coercion
let resultado = "5" + 2; // "52" (numero convertido a string)
let texto = 5 + "2"; // "52" (numero convertido a string)

// Number coercion
let suma = "5" - 2; // 3 (string convertido a numero)
let resta = "10" * 2; // 20 (string convertido a numero)

// Boolean coercion
let verdadero = !!1; // true
let falso = !!0; // false
let textoVacio = !!"Hola"; // true
let vacio = !!""; // false

5 == "5" // true (conversion de tipos)
5 === "5" // false (sin conversion)

0 == false // true
0 === false // false

null = undefined // true
null === undefined // false

if ("") {
    console.log("Esto no se ejecuta");
}

if ("Hola") {
    console.log("Esto si se ejecuta");
}

if (0) {
    console.log("Esto no se ejecuta");
}

if (1) {
    console.log("Esto si se ejecuta");
}