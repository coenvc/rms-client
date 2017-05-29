import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rmts-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  removeLoggedinUser(){
    localStorage.setItem('currentUser', null);
  }

}
