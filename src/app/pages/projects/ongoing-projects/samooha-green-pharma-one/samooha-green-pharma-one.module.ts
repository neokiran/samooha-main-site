import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamoohaGreenPharmaOneRoutingModule } from './samooha-green-pharma-one-routing.module';
import { SamoohaGreenPharmaOneComponent } from './samooha-green-pharma-one.component';


@NgModule({
  declarations: [
    SamoohaGreenPharmaOneComponent
  ],
  imports: [
    CommonModule,
    SamoohaGreenPharmaOneRoutingModule
  ]
})
export class SamoohaGreenPharmaOneModule { }
