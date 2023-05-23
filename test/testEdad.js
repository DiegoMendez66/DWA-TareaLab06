const edad = require('../source/calcularEdad') 

const fechaNacimiento = "2000-02-13"; // Formato: AAAA-MM-DD
const resultado = edad.calcularEdad(fechaNacimiento);

console.log("La persona tiene", resultado, "años");