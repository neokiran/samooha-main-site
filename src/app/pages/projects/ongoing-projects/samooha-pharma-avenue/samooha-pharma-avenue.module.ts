import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamoohaPharmaAvenueRoutingModule } from './samooha-pharma-avenue-routing.module';
import { SamoohaPharmaAvenueComponent } from './samooha-pharma-avenue.component';


@NgModule({
  declarations: [
    SamoohaPharmaAvenueComponent
  ],
  imports: [
    CommonModule,
    SamoohaPharmaAvenueRoutingModule
  ]
})
export class SamoohaPharmaAvenueModule { }
