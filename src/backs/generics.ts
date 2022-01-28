//Podemos añadir un alias a las importaciones con la instruccion AS
import { Hero as SuperHero } from "../classes/Hero"; //Esta instruccion exporta el contenido de la clase Hero para poder acceder al contenido

//?De la misma forma se puede importar todo el contenido de una importacion
// import * as HeroClasses from "./classes/hero";

//?Como se trata de la importacion por defecto le podemos poner el nombre que mas nos convenga
// import powers from "./data/powers";

//?De la misma forma podríamos importar la interfaz power con la siguiente instruccion
// import powers, {power} from "./data/powers";


//console.log('Hola Mundo!!!!');


const ironman = new SuperHero('Iron man', 1, 55)

// const ironman = new HeroClasses.Hero('Iron man', 1, 55)
console.log(ironman)
console.log(ironman.power)


// una funcion generica es capaz de imprimir cualquier cosa
import { imprimirObjeto, funcionGenerica, funcionGenericaFlecha } from '../generics/generics';
import { Villain,Hero } from "../interfaces";



// imprimirObjeto(123)
// imprimirObjeto(new Date())
// imprimirObjeto({ a: 1, b: 2, c: 3 })
// imprimirObjeto([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// imprimirObjeto('Hola Mundo')

// let nombre:string = 'Ignacio'

// console.log(funcionGenericaFlecha(3.141618).toFixed(2))
// console.log(funcionGenericaFlecha(new Date()).getDate())
// console.log(funcionGenericaFlecha(nombre).toUpperCase())

const deadpool = {
    nombre: 'DeadPool',
    nombreReal : 'Wade Winston Wilson',
    nivelPeligro : 130
}

//?Cuando le ponemos el hero antes de mandar el parametro le estamos especificando a la funcion el tipo de dato que se le va a enviar que en
//?este caso es de tipo Hero
console.log(funcionGenerica<Villain>(deadpool))