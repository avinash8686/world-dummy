import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { WorldService } from '../../world.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public country: any [];

  constructor(public _route:ActivatedRoute, public router:Router, public worldService: WorldService) { }

  ngOnInit() {
    let countryName = this._route.snapshot.paramMap.get('countryName');
    
    console.log(countryName);

    this.worldService.singleCountry(countryName).subscribe(
      data => {
        console.log(data);
        this.country = data;
        console.log(`Country Data: ${this.country[0].name}`);
      },
      error => {
        console.log(error);
      }
    )
  }

}
