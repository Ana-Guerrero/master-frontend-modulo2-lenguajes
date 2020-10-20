// Apartado A: Implementa un mecanismo de memoización para funciones costosas y tipalo con TypeScript. 
console.log("-----Challenge: Memoization-----");
var expensiveFunction = function () {
    console.log("Una única llamada");
    return 3.1415;
};
var memoize = function (fn) {
    var cache = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var stringArgs = JSON.stringify(args);
        var result = (cache[stringArgs]) =
            typeof cache[stringArgs] === 'undefined'
                ? fn.apply(void 0, args) : cache[stringArgs];
        return result;
    };
};
var memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415
