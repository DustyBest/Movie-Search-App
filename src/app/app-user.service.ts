import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MovieService } from "./movie.service";

@Injectable({
  providedIn: "root"
})
export class AppUserService {
  baseUrl = "http://localhost:3000/api/appUsers";

  userName: string;
  password: string;
  email: string;

  logUserName: string;
  logPassword: string;

  userToken:string;
  userId: string;
  id: string;
  favFilmId: number;

  constructor(public http: HttpClient, public movie$: MovieService) {}

  loginUser() {
    console.log(`${this.logUserName}`);
    this.http
      .post(
        "http://localhost:3000/api/appUsers/login",

        {
          username: `${this.logUserName}`,
          password: `${this.logPassword}`
        }
      )
      .subscribe((data: any) => {
        console.log(data);
        window.sessionStorage.setItem('token', data.token);
        window.sessionStorage.setItem('userId', data.userId);
        console.log(data.token);
        this.userToken = data.token;
        this.userId = data.userId;
        this.id = data.id;
        console.log(this.userToken);
      });
  }

  registerUser() {
    console.log(`${this.userName}`);
    this.http
      .post(
        "http://localhost:3000/api/appUsers",

        {
          username: `${this.userName}`,
          email:    `${this.email}`,
          password: `${this.password}`
        }
      )
      .subscribe((data: any) => {
        console.log(data);
        window.sessionStorage.setItem('token', data.token);
        window.sessionStorage.setItem('userId', data.userId);
        this.userToken = data.token;
        this.userId = data.userId;
        this.id = data.id;
      });
  }

  logoutUser(){
    console.log(this.userToken);
    console.log("logout ran");
    this.http.post('http://localhost:3000/api/appUsers/logout?access_token='+`${this.userToken}`,{})
    .subscribe((data:any) => {
      console.log(data);
      window.sessionStorage.clear();
    });
  }

  addFavorite(){
    console.log(this.movie$.filmDetails);
    this.favFilmId = this.movie$.filmDetails.id;
    console.log(this.favFilmId);
    this.http.post(`http://localhost:3000/api/appUsers/${this.userId}/favFilms?access_token=${this.userToken}`,
    {
      "filmid": `{{movie$.filmDetails.id}}`,
      "userId": `${this.userId}`
    })
    .subscribe((data:any) => {
      console.log(data);
    });
  }

  //   subscribe( res => {
  //     sessionStorage.setItem('token', res.token);
  //     sessionStorage.setItem('userId', res.userId);
  //  })

  //  let token = sessionStorage.getItem("token”);
  //  let userId = sessionStorage.getItem("userId”);
}
