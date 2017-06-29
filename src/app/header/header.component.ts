import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'rmts-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../styles/buttons.css']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  removeLoggedinUser() {
    localStorage.setItem('currentUser', null);
  }

  setLangague(language: string) {
    this.translate.use(language);
  }
}
