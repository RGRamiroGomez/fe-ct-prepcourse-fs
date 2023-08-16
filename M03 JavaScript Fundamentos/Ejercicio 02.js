/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   var strin= "Henry"
   return strin;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var summa= x + y;
   return summa;
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var rest=x-y;
   return rest;
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var div=x/y;
   return div;
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var multi=x*y;
   return multi;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var mod=x%y;
   return mod;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
