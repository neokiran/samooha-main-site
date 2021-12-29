import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamoohaPharmaVillageComponent } from './samooha-pharma-village.component';

const routes: Routes = [
  {
    path: '',
    component: SamoohaPharmaVillageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamoohaPharmaVillageRoutingModule { }
