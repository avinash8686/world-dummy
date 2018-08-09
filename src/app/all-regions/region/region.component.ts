import { Component, OnInit } from '@angular/core';
import { WorldService } from '../../world.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  public singleRegionData: any [] = [];
  public noRegionCountriesData: any [] = [];
  public noRegionData: any [] = [];

  constructor(public worldService: WorldService, public _route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    let regionName = this._route.snapshot.paramMap.get('regionName');
    console.log(regionName);

    if(regionName === 'NoRegion'){
      
      for (var i = 1; i < 3; i++) {
        if (i === 1) {
          let countryOne: String = 'Bouvet Island';
          this.worldService.noRegion(countryOne).subscribe(
            data => {
              console.log(data);
              this.noRegionCountriesData.push(data[0]);
            },
            error => {
              console.log(error);
            }
          )
        }
        else {
          // setTimeout(() => {
          let countryTwo: String = 'Heard Island and McDonald Islands';
          this.worldService.noRegion(countryTwo).subscribe(
            data => {
              console.log(data);
              this.noRegionCountriesData.push(data[0]);
              console.log(this.noRegionCountriesData);
            },
            error => {
              console.log(error);
            }
          )
          // }, 500);
        }
      } 
      this.noRegionData = this.noRegionCountriesData;
    }
    else{
      this.worldService.singleRegion(regionName).subscribe(
        data => {
          console.log(data);
          this.singleRegionData = data;
          console.log(this.singleRegionData);
        },
        error => {
          console.log(error);
        }
      )
    }
  }

}
