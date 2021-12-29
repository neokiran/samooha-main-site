import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmaAvenueRoutingModule } from './pharma-avenue-routing.module';
import { PharmaAvenueComponent } from './pharma-avenue.component';
import { FeedbackFormModule } from 'src/app/components/feedback-form/feedback-form.module';


@NgModule({
  declarations: [
    PharmaAvenueComponent
  ],
  imports: [
    CommonModule,
    PharmaAvenueRoutingModule,
    FeedbackFormModule
  ]
})
export class PharmaAvenueModule { }
