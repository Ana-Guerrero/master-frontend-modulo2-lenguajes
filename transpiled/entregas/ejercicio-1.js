console.log("-----Ejercicios entregables 1: Array operations-----");
var listFruits = ["Sandía", "Plátano", "Fresa", "Manzana"];
// Head: Implementa una función head (inmutable), tal que, dado un array como entrada
// extraiga y devuelva su primer elemento. Utiliza destructuring
var head = function (_a) {
    var first = _a[0];
    return first;
};
console.log("Head:", head(listFruits));
// Tail: Implementa una función tail (inmutable), tal que, dado un array como entrada
// devuelta todos menos el primer elemento. Utiliza rest operator.
var tail = function (_a) {
    var elements = _a.slice(1);
    return elements;
};
console.log("Tail;", tail(listFruits));
// Init: Implementa una función init (inmutable), tal que, dado un array como
// entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
var init = function (items) { return items.slice(0, -1); };
console.log("Init:", init(listFruits));
// Last: Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
var last = function (items) { return items[items.length - 1]; };
console.log("Last:", last(listFruits));
