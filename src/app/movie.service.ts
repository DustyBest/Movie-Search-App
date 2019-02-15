import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  firstName:string = 'Wil';
  username:string = 'No4BigDog';
  email:string = 'BigWil@padres.com';
  popularFilms:any = [];


  constructor(public http: HttpClient) { }

  landingFilms() {
    this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d2f9aeb928b4ee9c23f818d63efa391a')
    .subscribe((data:any) => this.popularFilms=data.results);
  }

  

  postUser(){

    console.log("started");
    console.log(`${this.firstName}`);
    this.http.post('http://localhost:3000/api/appUsers',


    {
      "firstName": `${this.firstName}`,
      "email": `${this.email}`,
      "username": `${this.username}`,
      "password": "default"
    }
    ).subscribe(
      (data:any[]) => {
        console.log(data);
      }
    );
  }
}


