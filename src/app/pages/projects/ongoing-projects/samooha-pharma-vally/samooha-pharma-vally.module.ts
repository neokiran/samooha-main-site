import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamoohaPharmaVallyRoutingModule } from './samooha-pharma-vally-routing.module';
import { SamoohaPharmaVallyComponent } from './samooha-pharma-vally.component';


@NgModule({
  declarations: [
    SamoohaPharmaVallyComponent
  ],
  imports: [
    CommonModule,
    SamoohaPharmaVallyRoutingModule
  ]
})
export class SamoohaPharmaVallyModule { }
