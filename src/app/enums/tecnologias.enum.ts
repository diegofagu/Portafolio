import { Tecnologias } from "../models/Tecnologias";
import { Level } from "./level.enum";


export enum TecnologiasEnum {
    DOCKER ,
    GIT 
}

export class TecnologiasE {
    private readonly _DOCKER : Tecnologias ;
    private readonly _GIT : Tecnologias;
    private readonly _TECNOLOGIAS_LIST : Tecnologias [];
    
    constructor (){
       
        this._DOCKER = {
            id : TecnologiasEnum.DOCKER,
            name : 'Docker',
            level : Level.beginner
        } as Tecnologias;
       
        this._GIT = {
            id : TecnologiasEnum.GIT,
            name : 'Git',
            level : Level.middle
        } as Tecnologias;
    
        this._TECNOLOGIAS_LIST = [
            this._DOCKER,
            this._GIT
        ]
    }

    get DOCKER() : Tecnologias {
        return this._DOCKER ;
    }

    get GIT() : Tecnologias {
        return this._GIT ;
    }

    get TECNOLOGIAS_LIST() : Tecnologias[] {
        return this._TECNOLOGIAS_LIST;
    }

}