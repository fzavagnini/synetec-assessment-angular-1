import { Injectable } from "@angular/core";
import { CitiesEndpoint } from "./cities-endpoint.service";
import { Observable } from "rxjs/Observable";
import { ICity } from "../../models/city.model";

@Injectable()
export class CitiesService {
    constructor(private _citiesEndpoint: CitiesEndpoint) {}

    getCities(): Observable<ICity[]>{        
        return this._citiesEndpoint.getCities();
    }

    getCity(id: number): Observable<ICity>{
        return this._citiesEndpoint.getCity(id)
    }

    removeCity(id: number){
        return this._citiesEndpoint.removeCity(id);
    }
}