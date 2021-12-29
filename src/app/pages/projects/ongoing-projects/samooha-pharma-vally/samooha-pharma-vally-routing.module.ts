import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamoohaPharmaVallyComponent } from './samooha-pharma-vally.component';

const routes: Routes = [
  {
    path: '',
    component: SamoohaPharmaVallyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamoohaPharmaVallyRoutingModule { }
