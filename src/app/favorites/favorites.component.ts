import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { AppUserService } from '../app-user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  imgPath:string = "https://image.tmdb.org/t/p/w500";

  constructor(public movie$: MovieService, public appUser$: AppUserService, private router: Router) { }

  showFilm(film) {
    console.log(film);
    this.movie$.filmDetails=film;
    console.log(this.movie$.filmDetails.title);
    console.log(this.movie$.filmDetails.id);
    this.movie$.id = this.movie$.filmDetails.id;
    console.log(this.movie$.id);
    this.movie$.filmDetailUrl="https://api.themoviedb.org/3/movie/"+film.filmid+"?api_key=d2f9aeb928b4ee9c23f818d63efa391a";
    console.log(this.movie$.filmDetailUrl);
    this.movie$.http.get(this.movie$.filmDetailUrl)
    .subscribe((data:any) => this.movie$.filmDetails=data);
    console.log(this.movie$.filmDetails);
    this.router.navigate([`details/${film.filmid}`]);
  }

  ngOnInit() {
    this.appUser$.favoriteFilms();
  }

}
