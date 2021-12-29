import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamoohaPharmaVillageRoutingModule } from './samooha-pharma-village-routing.module';
import { SamoohaPharmaVillageComponent } from './samooha-pharma-village.component';


@NgModule({
  declarations: [
    SamoohaPharmaVillageComponent
  ],
  imports: [
    CommonModule,
    SamoohaPharmaVillageRoutingModule
  ]
})
export class SamoohaPharmaVillageModule { }
