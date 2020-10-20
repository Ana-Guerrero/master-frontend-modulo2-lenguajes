console.log("-----Ejercicios entregables 1: Array operations-----");

const listFruits = ["Sandía", "Plátano", "Fresa", "Manzana"];

// Head: Implementa una función head (inmutable), tal que, dado un array como entrada
// extraiga y devuelva su primer elemento. Utiliza destructuring

const head = <T>([first]: T[]) => first;
console.log("Head:", head(listFruits));


// Tail: Implementa una función tail (inmutable), tal que, dado un array como entrada
// devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = <T>([, ...elements]: T[]) => elements;
console.log("Tail;", tail(listFruits));


// Init: Implementa una función init (inmutable), tal que, dado un array como
// entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = <T>(items: T[]) => items.slice(0, -1);
console.log("Init:", init(listFruits));


// Last: Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = <T>(items: T[]) => items[items.length - 1];
console.log("Last:", last(listFruits));