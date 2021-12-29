import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  { 
    path: 'ongoing-projects', 
    loadChildren: () => import('./ongoing-projects/ongoing-projects.module').then(m => m.OngoingProjectsModule) 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
