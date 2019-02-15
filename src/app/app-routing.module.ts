import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LandingComponent } from './landing/landing.component';
import { FilmDetailsComponent } from './film-details/film-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'main', component: MainComponent },
  {path: 'landing', component: LandingComponent },
  {path: 'details', component: FilmDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
