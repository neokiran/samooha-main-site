import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamoohaVariSontilluComponent } from './samooha-vari-sontillu.component';

const routes: Routes = [
  {
    path: '',
    component: SamoohaVariSontilluComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamoohaVariSontilluRoutingModule { }
