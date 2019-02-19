import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  showFilm(film) {
    console.log(film);
    this.movie$.filmDetails=film;
    console.log(this.movie$.filmDetails.title);
    console.log(this.movie$.filmDetails.id);
    this.movie$.filmDetailUrl="https://api.themoviedb.org/3/movie/"+film.id+"?api_key=d2f9aeb928b4ee9c23f818d63efa391a";
    console.log(this.movie$.filmDetailUrl);
    this.movie$.http.get(this.movie$.filmDetailUrl)
    .subscribe((data:any) => this.movie$.filmDetails=data);
    console.log(this.movie$.filmDetails);
    this.router.navigate([`details/${this.movie$.filmDetails.id}`]);
  }

  constructor(public movie$: MovieService, private router: Router) { }

  ngOnInit() {
  }

}
