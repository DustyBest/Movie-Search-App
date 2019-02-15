import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  loadFilms() {
    console.log(this.movie$.popularFilms[0].poster_path);
  }

  // imgPath:string = "https://image.tmdb.org/t/p/w500/xRWht48C2V8XNfzvPehyClOvDni.jpg";
  imgPath:string = "https://image.tmdb.org/t/p/w500";
  movieTitle:string = "Alita";

  constructor(public movie$: MovieService) { }

  ngOnInit() {
    this.movie$.landingFilms();
    console.log(this.movie$.popularFilms);
  }

}
