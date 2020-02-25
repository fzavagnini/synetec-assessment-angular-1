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
        this._citiesService.getCities().subscribe(res => {
            this.cities = res;
            this.displayErrorMessage = res === null || res.length === 0 ? true : false;           
        });  
    }

    removeCity(id: number){

        //Call API to remove city
        this._citiesService.removeCity(id).subscribe((res) => {
            this._citiesService.getCity(id).subscribe((r) => {
            console.log(r.name + " has been removed");     
            });        
        });
        
        //Remove from list
        for(let i = 0; i < this.cities.length; ++i){
            if (this.cities[i].id === id) {
                this.cities.splice(i, 1);
            }
        }
        
        //Display error message if no cities available
        this.displayErrorMessage = this.cities === null || this.cities.length === 0 ? true : false;  
    }
}