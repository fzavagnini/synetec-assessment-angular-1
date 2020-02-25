import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesService } from "../../services/cities/cities.service";

@Component ({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit{

    cities: ICity[] = [];
    displayErrorMessage: boolean;

    constructor(private _citiesService: CitiesService) {}

    ngOnInit(): void {        
        this.displayErrorMessage = this.cities === null || this.cities.length === 0 ? true : false;          
    }
}