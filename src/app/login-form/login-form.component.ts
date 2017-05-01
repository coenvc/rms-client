import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../../classes/user'
import { Router } from '@angular/router';


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  private user: User;
  private router = Router

  ngOnInit() {

  }

  onSubmit(input) {
    this.loginService.login(input.username, input.password)
      .subscribe(this.login);
  }

  private login(res) {
    this.user = res;
    if (this.user.active) {
      localStorage.setItem('currentUser',JSON.stringify(this.user)) 
      window.location.assign('/prospect') 
    } else {
      alert("Gebruiker staat op non-actief.")
    }
  }
}