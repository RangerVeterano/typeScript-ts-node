export const imprimirObjeto = (arg: any) => {
    console.log(arg)
};

//Para transformar esta funcion normal en una generica tenemos que poner las llaves <>
//La T se usa para definir que es de tipo generico
//Con la T le decimos a la funcion que vamos a recibir un tipo de dato, luego asignamos esa T al tipo del argumento pasado
//de esa forma hacemos que el tipo del valor pasado sea el mismo tipo de valor adjuntado
export function funcionGenerica<T>(arg: T): T {
    return arg
}

export const funcionGenericaFlecha = <T>(argumento: T):T => argumento