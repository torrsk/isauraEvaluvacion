let sueldo = parseFloat(prompt("ingrese el monto de su sueldo: "));
let bonificacion = parseFloat(prompt("ingrese el monto de la bonoficacion a recibir: "));
let nombre = prompt("ingrese su nombre: ");


let suma = sueldo + bonificacion

let total = suma * 12 

console.log("la suma de su sueldo mas la bonificacion es de: "+suma);
console.log(nombre + " su sueldo anual es de: "+total);