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

  constructor(private loginService: LoginService, private router : Router) { }

  private user: User;

  ngOnInit() {
    localStorage.setItem('currentUser', null);
  }

  onSubmit(input) {

    
    this.loginService.login(input.username, input.password)
      .subscribe(result => {        
        if (this.login(result)) {
          this.router.navigate(['dashboard']);
        } else {
          alert("Gebruiker staat op non-actief.")
        }
      });
  }

  private login(res) {
    this.user = res;    
    if (!this.user.IsActive) {      
      localStorage.setItem('currentUser',JSON.stringify(this.user))
      return true;
    }
     else {
      return false;
    }
  }
}
