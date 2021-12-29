import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamoohaVariSontilluRoutingModule } from './samooha-vari-sontillu-routing.module';
import { SamoohaVariSontilluComponent } from './samooha-vari-sontillu.component';


@NgModule({
  declarations: [
    SamoohaVariSontilluComponent
  ],
  imports: [
    CommonModule,
    SamoohaVariSontilluRoutingModule
  ]
})
export class SamoohaVariSontilluModule { }
