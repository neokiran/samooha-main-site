import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamoohaPharmaAvenueComponent } from './samooha-pharma-avenue.component';

const routes: Routes = [
  {
    path: '',
    component: SamoohaPharmaAvenueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamoohaPharmaAvenueRoutingModule { }
