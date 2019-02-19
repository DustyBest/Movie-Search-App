import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../app-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public appUser$: AppUserService) { }

  ngOnInit() {
  }

}
