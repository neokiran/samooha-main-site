import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), data: { title: 'Samooha Project | Experience Smart Real estate Investment'} },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), data: { title: 'Samooha Project | Experience Smart Real estate Investment'} },
  { path: 'about-us', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule), data: { title: 'About | Samooha Projects'} },
  { path: 'awards', loadChildren: () => import('./pages/awards/awards.module').then(m => m.AwardsModule), data: { title: 'Awards | Samooha Projects'} },
  { path: 'gallery', loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryModule), data: { title: 'Open Plots in Hyderabad | Residential Plots | Residential Plots for Sale | Samooha Projects'} },
  { path: 'projects', loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule), data: { title: 'Up Coming Open Plot Ventures In Hyderabad | On Going Open Plot Ventures In Hyderabad | Samooha Projects'} },
  { path: 'upcomming-projects', loadChildren: () => import('./pages/projects/completed-projects/completed-projects.module').then(m => m.CompletedProjectsModule), data: { title: 'Open Plots in Hyderabad | Residential Plots | Residential Plots for Sale | Samooha Projects'} },
  { path: 'contact-us', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule), data: { title: 'Contact Us  | Samooha Projects'} },
  { path: 'pharma-avenue', loadChildren: () => import('./pages/pharma-avenue/pharma-avenue.module').then(m => m.PharmaAvenueModule), data: { title: 'Pharma Avenue  | Pharma Avenue'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
