import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  IssComponent } from './pages/iss/iss.component'
import { RocketLaunchesComponent } from './pages/rocket-launches/rocket-launches.component'
import { EarthPhotoComponent } from './pages/earth-photo/earth-photo.component';
import { LandingComponent } from './pages/landing/landing.component'

const routes: Routes = [
  {path: 'iss', component: IssComponent},
  {path: 'rocket-launches', component: RocketLaunchesComponent},
  {path: 'earth-photo', component: EarthPhotoComponent},
  {path: '', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
