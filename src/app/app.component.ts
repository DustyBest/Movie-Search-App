import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { AppUserService } from './app-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-project';


constructor(public movie$: MovieService, public appUser$: AppUserService) { }
}