import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryPageRoutingModule } from './country-page-routing.module';
import { CountryPageComponent } from './country-page.component';


@NgModule({
  declarations: [CountryPageComponent],
  imports: [
    CommonModule,
    CountryPageRoutingModule
  ]
})
export class CountryPageModule { }
