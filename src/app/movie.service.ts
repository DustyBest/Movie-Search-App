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


  constructor(public http: HttpClient) { }

  

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


