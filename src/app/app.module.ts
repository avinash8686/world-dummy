import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AllCountriesModule } from './all-countries/all-countries.module';
import { AllRegionsModule } from './all-regions/all-regions.module';
import { RegionsComponent } from './all-regions/regions/regions.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AllCountriesModule,
    AllRegionsModule,
    RouterModule.forRoot([
      { path:'all-regions', component: RegionsComponent},
      { path:'', redirectTo:'all-regions', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
