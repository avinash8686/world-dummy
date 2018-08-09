import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class WorldService {

  public baseUrl: any = 'https://restcountries.eu/rest/v2';

  constructor(public _http: HttpClient) { }

  // method for all regions.
  public allRegions: any =() => {
    let httpResponse = this._http.get(`${this.baseUrl}/all`);
    console.log(httpResponse);
    return httpResponse;
  }

  // method for no regions.
  public noRegion = (countryName):any => {
    let httpResponse = this._http.get(`${this.baseUrl}/name/${countryName}?fullText=true`);
    console.log(httpResponse);
    return httpResponse;
  }

  // method for single region.
  public singleRegion = (regionName):any => {
    let httpResponse = this._http.get(`${this.baseUrl}/region/${regionName}`);
    console.log(httpResponse);
    return httpResponse;
  }

  // method for single Country.
  public singleCountry = (countryName): any => {
    let httpResponse = this._http.get(`${this.baseUrl}/name/${countryName}?fullText=true`);
    console.log(httpResponse);
    return httpResponse;
  }
}
