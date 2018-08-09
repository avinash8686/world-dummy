import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';

import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'country/:countryName', component: CountryComponent}
    ])
  ],
  declarations: [CountryComponent]
})
export class AllCountriesModule { }
