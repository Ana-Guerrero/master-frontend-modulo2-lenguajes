// Apartado A
// Implementa un mecanismo deepGet para acceder en profundidad a objetos anidados, 
// de modo que podamos recuperar una propiedad en cualquiera de sus niveles.
//
// Apartado B
// Ahora implementa el complementario, deepSet, que permita guardar valores en profundidad.
var mydeepAccessObject = {
    a: 1,
    b: {
        c: null,
        d: {
            e: 3,
            f: {
                g: "bingo",
            }
        }
    }
};
var deepGet = function (deepObject) {
    var properties = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        properties[_i - 1] = arguments[_i];
    }
    return properties.reduce(function (object, key) {
        return (object || {})[key];
    }, deepObject);
};
console.log("DeepGet:", deepGet(mydeepAccessObject, "a")); // 1
console.log("DeepGet:", deepGet(mydeepAccessObject, "b")); // { c: null, d: {....}}
console.log("DeepGet:", deepGet(mydeepAccessObject, "b", "c")); // null
console.log("DeepGet:", deepGet(mydeepAccessObject, "b", "d", "f", "g")); // bingo
console.log("DeepGet:", deepGet(mydeepAccessObject)); // 1
console.log("-----Challenge: Deep Set-----");
var myObject = {};
var deepSet = function (value, deepSetObject) {
    var properties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        properties[_i - 2] = arguments[_i];
    }
    var lastKeyIndex = properties.length - 1;
    properties.reduce(function (key) {
        if (!(key in deepSetObject)) {
            deepSetObject[key] = {};
        }
        deepSetObject = deepSetObject[key];
    });
    deepSetObject[properties[lastKeyIndex]] = value;
};
deepSet(1, myObject, "a", "b");
console.log("DeepSet:", JSON.stringify(myObject)); // {a: { b: 1}} 
deepSet(2, myObject, "a", "c");
console.log("DeepSet:", JSON.stringify(myObject)); // {a: { b: 1, c: 2}}
deepSet(3, myObject, "a");
console.log("DeepSet:", JSON.stringify(myObject)); // {a: 3}
