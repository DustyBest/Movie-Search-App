import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  constructor(public movie$: MovieService) { }

  show(){
    console.log(this.movie$.filmDetails);
  }

  update() {
    console.log("triggered");
    this.movie$.filmID=438650;
    console.log(this.movie$.filmID);
  }

  ngOnInit() {
    this.movie$.showFilm();
  }

}
