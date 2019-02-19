import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  baseUrl = "http://localhost:3000/api/appUsers";


  userName:string = 'dick';
  password:string = 'dick';
  email:string = 'dick@dick.com';

  constructor(public http: HttpClient) { }
  
  postUser(){

    console.log("started");
    console.log(`${this.userName}`);
    this.http.post('http://localhost:3000/api/appUsers',


    {
      "userName": `${this.userName}`,
      "email": `${this.email}`,
      "password": `${this.password}`
    }
    ).subscribe(
      (data:any[]) => {
        console.log(data);
      }
    );
  }

  
}
