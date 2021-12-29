import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmaAvenueComponent } from './pharma-avenue.component';

const routes: Routes = [
  {
    path: '',
    component: PharmaAvenueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmaAvenueRoutingModule { }
