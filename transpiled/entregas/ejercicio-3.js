var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("-----Ejercicios entregables 3: Clone Merge-----");
var informatica = {
    name: "Informática AGA",
    address: {
        street: "Semilleros",
        number: 20,
        city: "Granada"
    }
};
var clone = function (source) { return (__assign({}, source)); };
console.log("Clone:", clone(informatica));
var cloneDeep = function (source) { return JSON.parse(JSON.stringify(source)); };
console.log("CloneDeep:", cloneDeep(informatica));
// Merge: Implementa una función merge que, dados dos objetos de entrada source
// y target, devuelva un nuevo objeto con todas las propiedades de target
// y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
var aMerge = { name: "Maria", surname: "Ibañez", country: "SPA" };
var bMerge = { name: "Luisa", age: 31, married: true };
var merge = function (source, target) { return (__assign(__assign({}, target), source)); };
console.log("Merge:", merge(aMerge, bMerge));
var mergeDeep = function (source, target) {
    var sourceDeepClone = cloneDeep(source);
    var targetDeepClone = cloneDeep(target);
    return __assign(__assign({}, targetDeepClone), sourceDeepClone);
};
console.log("MergeDeep:", mergeDeep(aMerge, bMerge));
