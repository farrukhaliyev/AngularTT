import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class RandomNumService{
    private _random : number;

    constructor(){
        console.log("Service started!");

        this._random = Math.floor(Math.random() * 1000);
    }

    getRandom() : number {
        return this._random;
    }
}