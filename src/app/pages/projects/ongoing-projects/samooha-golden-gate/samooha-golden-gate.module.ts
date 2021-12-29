import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamoohaGoldenGateRoutingModule } from './samooha-golden-gate-routing.module';
import { SamoohaGoldenGateComponent } from './samooha-golden-gate.component';


@NgModule({
  declarations: [
    SamoohaGoldenGateComponent
  ],
  imports: [
    CommonModule,
    SamoohaGoldenGateRoutingModule
  ]
})
export class SamoohaGoldenGateModule { }
