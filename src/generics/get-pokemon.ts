import axios from "axios";
import { Pokemon } from '../interfaces';



export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {

    // if(1 == 1 ){
    //     throw new Error('Auxilio');
    // }
    // console.log('Hola mundo');

    //Como esto se trata de una promesa podemos usar la palabra reservada await (esto es para esperar la promesa)
    //*Con lo de pokemon estamos diciendo que la respuesto pinta como un pokemon pero no es un pokemon sino que es para tener ayudas de typescript
    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

    // console.log(reps.data.name);

    return data;
}