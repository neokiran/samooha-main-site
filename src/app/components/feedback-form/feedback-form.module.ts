import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackFormComponent } from './feedback-form.component';



@NgModule({
  declarations: [
    FeedbackFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeedbackFormComponent
  ]
})
export class FeedbackFormModule { }
