
function printToConsole(constructor: Function) {
    console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {

    if (print) {
        //No le ponemos los () porque estamos referenciando la funcion, no la estamos llamando
        return printToConsole
    } else {
        return () => { }
    }
}

const bloquearPrototipo = function (constructor: Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

//Esto es una propertyFunction
function validarPokemonId() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // console.log({target, propertyKey, descriptor});
        // descriptor.value = () => console.log('Hola mundo');
        const originalMethod = descriptor.value; //? aqui en esta constante tenemos nuestro metodo original sin modificar

        descriptor.value = (id: number) => {

            //? para el caso de que la condicion del id no se cumpla se pisa el metodo por el siguiente
            if (id < 1 || id > 800) {
                return console.error('EL id del pokemon tiene que estar entre 1 y 800');
            } else {
                return originalMethod(id)
            }
        }
    }
}

//Vamos a crear un decorador que nos sirva para evitar que la gente pueda modificar el publicApi
//? No ponemos el argumento descriptor: PropertyDescriptor ya que es solo para metodos no para propiedades
function soloLectura(isEscribible: boolean = true): Function {
    return function (target: any, properKey: string) {

        //Al ponerlo aqui quiere decir que lo estamos creando, porque si se pone en la parte de arriba se recibe como indefinido
        const descriptor: PropertyDescriptor = {
            //con esta instruccion lo que hemos conseguido es que la propiedad 
            //no aparezca con el valor que debería sino con el valor que le hemos puesto abajo
            get() {
                console.log(this);
                return 'Ignacio'
            },
            //this -> hace referencia a esta instancia
            //val -> hace referencia al nuevo valor que tenemos que cambiar
            set(this,val) {
                
                Object.defineProperty(this, properKey, {
                    value:val, //Solo la primera vez que se ejecute el código se podrá escribir, luego nada
                    writable: !isEscribible, //ahora le indicamos que no se puede escribir
                    enumerable : false //Con esta instruccion hacemos que no se pueda ni siquiera ver 
                })
            }
        }

        return descriptor
    }
}

@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {

    @soloLectura() //si le ponemos false entonces la propiedad se podrá modificar sin problemas
    public publicApi: string = 'https://pokeapi.com';

    constructor(
        public name: string
    ) { }

    @validarPokemonId()
    savePokemonToDB(id: number) {
        console.log(`pokemon guardado a la base de datos ${id}`)
    }
}

