import poderes from "../data/powers"

//Queremos exportar la clase esta para que se pueda acceder desde el fichero index.ts
//Para eso usamos la instrucción export


export class Hero {
    constructor(
        public nombre:string,
        public poderId:number,
        public edad:number,
    ){}

    //Getter para el poder
    get power():string{
        //! con la instruccion ? se puede comprobar que el resultado no sea undefined, verifica si toda la instrucion da null y de ser en ese caso no continua y devuelve undefined
        //todo el caso contrario es ! para decir que siempre se va a encontrar el resultado
        // return poderes.find(power => power.id === this.poderId)?.desc || 'not found'

        let poder = poderes.find(poder => poder.id === this.poderId); 
        
        return (poder === undefined)?'not found':poder.desc;
    }
} 

export class Hero2 {}
export class Hero3 {}
export class Hero4 {}