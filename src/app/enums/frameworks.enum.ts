import { Level } from "./level.enum"
import { Frameworks } from "../models/frameworks"

export enum FrameworksEnum {   
    ANGULAR ,
    SPRING
}

export class FrameworksE {
    private readonly _ANGULAR : Frameworks;
    private readonly _SPRING : Frameworks;
    private readonly _FRAMEWORKS_LIST : Frameworks [];

    constructor (){

        this._ANGULAR = {
          id:  FrameworksEnum.ANGULAR,
          name: 'Angular',
          level : Level.middle
        } as Frameworks ;

        this._SPRING = {
            id: FrameworksEnum.SPRING,
            name : 'Spring',
            level : Level.beginner
        } as Frameworks ;

        this._FRAMEWORKS_LIST = [
            this._ANGULAR,
            this._SPRING
        ]
    }

    get ANGULAR() : Frameworks {
        return this._ANGULAR;
    }

    get SPRING() : Frameworks {
        return this._SPRING;
    }

    get FRAMEWORKS_LIST() : Frameworks[]{
        return this._FRAMEWORKS_LIST;
    }
}

