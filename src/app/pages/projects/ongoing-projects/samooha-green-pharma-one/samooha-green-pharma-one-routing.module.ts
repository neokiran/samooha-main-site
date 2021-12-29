import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamoohaGreenPharmaOneComponent } from './samooha-green-pharma-one.component';

const routes: Routes = [
  {
    path: '',
    component: SamoohaGreenPharmaOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamoohaGreenPharmaOneRoutingModule { }
