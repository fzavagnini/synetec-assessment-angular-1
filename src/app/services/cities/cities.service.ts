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
}