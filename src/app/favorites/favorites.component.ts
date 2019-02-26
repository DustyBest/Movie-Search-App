import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { AppUserService } from '../app-user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  imgPath:string = "https://image.tmdb.org/t/p/w500";

  constructor(public movie$: MovieService, public appUser$: AppUserService) { }

  ngOnInit() {
    this.appUser$.favoriteFilms();
  }

}
