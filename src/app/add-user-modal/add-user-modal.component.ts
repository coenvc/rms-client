import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserDataService } from 'app/user-data.service';
import { User } from 'classes/user';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.css']
})
export class AddUserModalComponent implements OnInit {
  @Output() onButtonClicked: EventEmitter<any> = new EventEmitter<any>();
  User: User = new User(null, null, null, null);

  constructor(private userDataService: UserDataService) {
    this.User.IsActive = true;
  }

  addUser() {
    this.userDataService.register(this.User)
      .subscribe(response => this.onButtonClicked.emit());
  }

  close() {
    this.onButtonClicked.emit();
  }

  ngOnInit() {
  }

}
