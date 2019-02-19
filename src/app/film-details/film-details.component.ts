import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  constructor(public movie$: MovieService) { }

  imgPath:string = "https://image.tmdb.org/t/p/w500";
  movieTitle:string = "Alita";

  show(){
    console.log(this.movie$.filmDetails);
  }

  update() {
    console.log("triggered");
    this.movie$.filmID=438650;
    console.log(this.movie$.filmID);
  }

  ngOnInit() {
    // this.movie$.showFilm();
  }

}
