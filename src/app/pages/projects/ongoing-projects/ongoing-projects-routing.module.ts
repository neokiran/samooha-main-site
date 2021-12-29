import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OngoingProjectsComponent } from './ongoing-projects.component';

const routes: Routes = [
  {
    path: '',
    component: OngoingProjectsComponent
  },
  { 
    path: 'golden-gate', 
    loadChildren: () => import('./samooha-golden-gate/samooha-golden-gate.module').then(m => m.SamoohaGoldenGateModule) 
  },
  { 
    path: 'green-pharma', 
    loadChildren: () => import('./samooha-green-pharma-one/samooha-green-pharma-one.module').then(m => m.SamoohaGreenPharmaOneModule) 
  },
  { 
    path: 'pharma-valley', 
    loadChildren: () => import('./samooha-pharma-vally/samooha-pharma-vally.module').then(m => m.SamoohaPharmaVallyModule) 
  },
  { 
    path: 'pharma-village', 
    loadChildren: () => import('./samooha-pharma-village/samooha-pharma-village.module').then(m => m.SamoohaPharmaVillageModule) 
  },
  { 
    path: 'samooha-vari-sontillu', 
    loadChildren: () => import('./samooha-vari-sontillu/samooha-vari-sontillu.module').then(m => m.SamoohaVariSontilluModule) 
  },
  { 
    path: 'samooha-pharma-avenue', 
    loadChildren: () => import('./samooha-pharma-avenue/samooha-pharma-avenue.module').then(m => m.SamoohaPharmaAvenueModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OngoingProjectsRoutingModule { }
