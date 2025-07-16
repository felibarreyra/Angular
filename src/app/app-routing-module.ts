import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurofutbolBoots } from './purofutbol-boots/purofutbol-boots';
import { PurofutbolAbout } from './purofutbol-about/purofutbol-about';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'boots',
    pathMatch: 'full'
  },
  {
    path: 'boots',
    component: PurofutbolBoots
  },
  { 
    path: "about",
    component: PurofutbolAbout
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
