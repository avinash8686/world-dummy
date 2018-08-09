import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WorldService } from '../../world.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  // public allData:any = [];

  // Total there are 7 regions
  // public totalRegions: number [] = [1, 2, 3, 4, 5, 6, 7];

  // public africaRegion: any[] = [];
  // public americasRegion: any[] = [];
  // public asiaRegion: any[] = [];
  // public europeRegion: any[] = [];
  // public oceaniaRegion: any[] = [];
  // public noRegion: any[] = [];
  // public otherRegion: any[] = [];


  public allRegions:any [] = [
    {
      region:"Africa",
     countries: []
    },
    {
      region:"Americas",
     countries: []
    },
    {
      region:"Asia",
     countries: []
    },
    {
      region: "Polar",
      countries: []
    },
    {
      region:"Europe",
      countries: []
    },
    {
      region:"Oceania",
      countries: []
    },
    {
      region: "NoRegion",
      countries: []
    }
    
  ];

  constructor(public worldService: WorldService) { }

  ngOnInit() {
    // Data coming out of the server is an observable
    // To handle that data we need to subscirbe.
    this.worldService.allRegions().subscribe(
      data => {
        // this.allData = data;
        for(let country of data){

          // Africa
          if(country.region === "Africa"){
            console.log("Africa");
            this.allRegions[0].countries.push(country);
            console.log(this.allRegions[0]);
          }

          // Americas
          else if (country.region === "Americas"){
            console.log("Americas");
            this.allRegions[1].countries.push(country);
            console.log(this.allRegions[1]);
          }

          //  Asia
          else if (country.region === "Asia"){
            console.log("Asia");
            this.allRegions[2].countries.push(country);
            console.log(this.allRegions[2]);
          }

          // Other Region
          if (country.region !== "" && country.region !== "Asia" && country.region !== "Africa" && country.region !== "Americas" && country.region !== "Europe" && country.region !== "Oceania") {
            console.log("Polar");
            this.allRegions[3].countries.push(country);
            console.log(this.allRegions[3]);
          }

          // Europe
          else if (country.region === "Europe"){
            console.log("Europe");
            this.allRegions[4].countries.push(country);
            console.log(this.allRegions[4]);
          }

          // Oceania
          else if (country.region === "Oceania"){
            console.log("Oceania");
            this.allRegions[5].countries.push(country);
            console.log(this.allRegions[5]);
          }

         

          else if (country.region === "") {
            console.log("No Region");
            this.allRegions[6].countries.push(country);
            
            console.log(this.allRegions[6]);
          }

        }
        console.log(this.allRegions[0]);
        console.log(this.allRegions[1]);
        console.log(this.allRegions[2]);
        console.log(this.allRegions[3]);
        console.log(this.allRegions[4]);
        console.log(this.allRegions[5]);
        console.log(this.allRegions[6]);
        console.log(`All Regions:- ${this.allRegions}`);
      },
      error => {
        console.log(error);
      }
    )
  }

  // Africa

}
