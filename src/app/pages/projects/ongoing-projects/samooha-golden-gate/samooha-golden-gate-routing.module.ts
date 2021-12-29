import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamoohaGoldenGateComponent } from './samooha-golden-gate.component';

const routes: Routes = [
  {
    path: '',
    component: SamoohaGoldenGateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamoohaGoldenGateRoutingModule { }
