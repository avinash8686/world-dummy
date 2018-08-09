import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RegionsComponent } from './regions/regions.component';
import { RegionComponent } from './region/region.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'region/:regionName', component:RegionComponent},
      
    ])
  ],
  declarations: [RegionsComponent, RegionComponent]
})
export class AllRegionsModule { }
