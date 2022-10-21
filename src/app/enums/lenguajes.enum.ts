import { MessageBundle } from "@angular/compiler"
import { MenuComponent } from "../menu/menu.component"
import { Level } from "./level.enum"
import { Lenguajes } from "../models/Lenguaje"

export enum LenguajesEnum {

    TYPESCRIPT = 0,
    JAVA = 1,
    HTML = 2,
    CSS = 3
}

export class LenguajesE {
        //readonly indica que la propiedad solamente es de lectura por parte del uso externo.
    private readonly _TYPESCRIPT : Lenguajes ;
    private readonly _JAVA : Lenguajes ; 
    private readonly _HTML : Lenguajes ;
    private readonly _CSS : Lenguajes ;
    private readonly _LENGUAJES_LIST : Lenguajes [];
    constructor () {
        
        this._TYPESCRIPT = {
            id: LenguajesEnum.TYPESCRIPT,
            name: 'TypeScript',
            level: Level.middle
        } as Lenguajes ;
        
        this._JAVA = {
            id : LenguajesEnum.JAVA,
            name : 'Java',
            level : Level.beginner
        } as Lenguajes;
        
        this._HTML = {
            id : LenguajesEnum.HTML,
            name : 'Html',
            level : Level.middle
        } as Lenguajes;
        
        this._CSS = {
            id : LenguajesEnum.CSS,
            name : 'Css',
            level : Level.middle
        } as Lenguajes;

        this._LENGUAJES_LIST = [
            this._TYPESCRIPT,
            this._JAVA,
            this._HTML,
            this._CSS
        ]
    }

    get TYPESCRIPT() : Lenguajes {
        return this._TYPESCRIPT;
    }

    get JAVA() :Lenguajes {
        return this._JAVA;
    }

    get HTML() : Lenguajes {
        return this._HTML;
    }

    get CSS () : Lenguajes {
        return this._CSS;
    }

    get LENGUAJES_LIST() : Lenguajes[] {
        return this._LENGUAJES_LIST;
    }

}
