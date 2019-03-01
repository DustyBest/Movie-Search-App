import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  firstName: string = "Wil";
  username: string = "No4BigDog";
  email: string = "BigWil@padres.com";
  popularFilms: any = [];
  filmID: number = 399579;
  id: string;
  filmDetailUrl: string =
    "https://api.themoviedb.org/3/movie/" +
    this.filmID +
    "?api_key=d2f9aeb928b4ee9c23f818d63efa391a";

  filmDetails: any = {
    title: "Bohemian Rhapsody",
    poster_path: "/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg",
    overview:
      "Movie info! Movie info! Movie info! Movie info! Movie info!Movie info!Movie info! "
  };

  imgPath: string = "https://image.tmdb.org/t/p/w500";
  filmName: string = "";
  searchFilms: any = [];
  // userFavorites:any = [];

  constructor(public http: HttpClient, public router: Router) {}

  landingFilms() {
    this.http
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d2f9aeb928b4ee9c23f818d63efa391a"
      )
      .subscribe((data: any) => (this.popularFilms = data.results));
    this.searchFilms = this.popularFilms;
  }

  // favoriteFilms() {
  //   this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d2f9aeb928b4ee9c23f818d63efa391a')
  //   .subscribe((data:any) => this.userFavorites=data.results);
  // }

  searchFilm() {
    console.log(this.filmName);
    this.http
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=d2f9aeb928b4ee9c23f818d63efa391a&language=en-US&query=${
          this.filmName
        }&page=1&include_adult=false`
      )
      .subscribe((data: any) => (this.searchFilms = data.results));
    console.log(this.searchFilms);
    this.router.navigate([`results`]);
  }
  showFilm(film) {
    console.log(film);
    this.filmDetails = film;
    console.log(this.filmDetails.title);
    console.log(this.filmDetails.id);
    this.id = this.filmDetails.id;
    console.log(this.id);
    this.filmDetailUrl =
      "https://api.themoviedb.org/3/movie/" +
      film.id +
      "?api_key=d2f9aeb928b4ee9c23f818d63efa391a";
    console.log(this.filmDetailUrl);
    this.http
      .get(this.filmDetailUrl)
      .subscribe((data: any) => (this.filmDetails = data));
    console.log(this.filmDetails);
    this.router.navigate([`details/${film.id}`]);
  }
}
