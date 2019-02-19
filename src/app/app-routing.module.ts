import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LandingComponent } from './landing/landing.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'main', component: MainComponent },
  {path: 'landing', component: LandingComponent },
  {path: 'details/:id', component: FilmDetailsComponent },
  {path: 'details', redirectTo: 'landing', pathMatch: 'full' },
  {path: 'results', component: ResultsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
