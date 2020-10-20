var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
console.log("-----Ejercicios entregables 2: Concat-----");
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, 
// devuelva la concatenación de ambos. Utiliza rest / spread operators.
var concat = function (a, b) { return __spreadArrays(a, b); };
console.log("Concat:", concat([1, 2, 3], [4, 5, 6]));
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).
var concatMultiple = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(concat);
};
console.log("ConcatMultiple:", concatMultiple([1, 2, 3], [4, 5, 6], [7, 8, 9]));
