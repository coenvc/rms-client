import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../../classes/user'


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  private user: User;

  ngOnInit() {

  }

  onSubmit(input) {
    this.loginService.login(input.username, input.password)
      .subscribe(this.login);
  }

  private login(res) {
    this.user = res;
    console.log(this.user);
  }
}