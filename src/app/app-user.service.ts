import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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

  constructor(public http: HttpClient) {}

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
      .subscribe((data: any[]) => {
        console.log(data);
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
      .subscribe((data: any[]) => {
        console.log(data);
        window.sessionStorage.setItem('token', data.token);
        window.sessionStorage.setItem('userId', data.userId);
      });
  }

  // logoutUser(){
  //   this.http.post('http://localhost:3000/api/appUsers/logout',
  //   {
  //     "token": `${this.userToken}`
  //   }
  //   );
  // }

  //   subscribe( res => {
  //     sessionStorage.setItem('token', res.token);
  //     sessionStorage.setItem('userId', res.userId);
  //  })

  //  let token = sessionStorage.getItem("token”);
  //  let userId = sessionStorage.getItem("userId”);
}
