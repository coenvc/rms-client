import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from 'classes/user';
import { UserDataService } from 'app/user-data.service';

@Component({
  selector: 'edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})
export class EditUserModalComponent implements OnInit {
  @Output() onButtonClicked: EventEmitter<any> = new EventEmitter<any>();
  @Input('currentId') currentId: number;

  User: User = new User(null, null, null, null);
  constructor(private userDataService: UserDataService) { }


  ngOnInit() {
    this.userDataService.getUserById(this.currentId)
      .subscribe(response => this.User = response);
  }

  editUser() {
    this.User.id = this.currentId;
    this.userDataService.update(this.User)
      .subscribe(response => this.onButtonClicked.emit());
  }

  close() {
    this.onButtonClicked.emit();
  }

}
