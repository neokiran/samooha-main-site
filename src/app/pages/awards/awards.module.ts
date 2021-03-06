import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwardsRoutingModule } from './awards-routing.module';
import { AwardsComponent } from './awards.component';


@NgModule({
  declarations: [
    AwardsComponent
  ],
  imports: [
    CommonModule,
    AwardsRoutingModule
  ]
})
export class AwardsModule { }
