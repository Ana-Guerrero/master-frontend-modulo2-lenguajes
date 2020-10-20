console.log("-----Ejercicios entregables 3: Clone Merge-----");

// Clone: Implementa una función clone que, a partir de un objeto de entrada
// source devuelva un nuevo objeto con las propiedades de source.

interface Tienda {
  address: Address;
  name: string;
}

interface Address {
  street: string;
  number: number;
  city: string;
}

const informatica: Tienda = {
  name: "Informática AGA",
  address: {
    street: "Semilleros",
    number: 20,
    city: "Granada"
  }
};

const clone = <T>(source: T) => ({ ...source });
console.log("Clone:", clone(informatica));

const cloneDeep = <T>(source: T) => JSON.parse(JSON.stringify(source));
console.log("CloneDeep:", cloneDeep(informatica));


// Merge: Implementa una función merge que, dados dos objetos de entrada source
// y target, devuelva un nuevo objeto con todas las propiedades de target
// y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

const aMerge = { name: "Maria", surname: "Ibañez", country: "SPA" };
const bMerge = { name: "Luisa", age: 31, married: true };

const merge = <T, G>(source: T, target: G): T & G => ({ ...target, ...source });
console.log("Merge:", merge(aMerge, bMerge));

const mergeDeep = <T, G>(source: T, target: G): T & G => {
  const sourceDeepClone = cloneDeep(source);
  const targetDeepClone = cloneDeep(target);
  return { ...targetDeepClone, ...sourceDeepClone };
};
console.log("MergeDeep:", mergeDeep(aMerge, bMerge));