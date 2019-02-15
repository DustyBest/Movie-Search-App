import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  // update() {
  // this.movie$.filmID=480530;
  // }

  loadFilms() {
    console.log(this.movie$.filmID);
  }

  // imgPath:string = "https://image.tmdb.org/t/p/w500/xRWht48C2V8XNfzvPehyClOvDni.jpg";
  imgPath:string = "https://image.tmdb.org/t/p/w500";
  movieTitle:string = "Alita";

  constructor(public movie$: MovieService) { }

  ngOnInit() {
    this.movie$.landingFilms();
    console.log(this.movie$.popularFilms);
    this.movie$.filmID=480530;
    console.log(this.movie$.filmID);
  }

}
