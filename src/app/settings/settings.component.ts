import { Component, OnInit } from "@angular/core";
import { StatusDataService } from "../../../src/app/status-data.service";
import { ProfessionDataService } from "../../../src/app/profession-data.service";
import { ActiontypeDataService } from "../../../src/app/actiontype-data.service";

import { Status } from "../../classes/Status";
import { Profession } from '../../classes/Profession';
import { ActionType } from '../../classes/ActionType';
import { User } from "classes/user";
import { UserDataService } from 'app/user-data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css', '../../styles/buttons.css']
})
export class SettingsComponent implements OnInit {

  users: User[];
  statuses: Status[];
  professions: Profession[];
  actiontypes: ActionType[];
  //
  userCount: String  = '0';
  statusesCount: String = '0';
  professionsCount: String = '0';
  actiontypesCount: String = '0';
  //
  userSearch: String = '';
  statusesSearch: String = '';
  professionsSearch: String = '';
  actiontypesSearch: String = '';
  // 
  userSearchText: String = '';
  statusSearchText: String = '';
  actionSearchText: String = '';
  // booleans to show and hide the modals to add a new action
  addStatusModalVisible = false;
  addActionModalVisible = false;
  addUserModalVisible = false; 

  editActionModalVisible = false;
  editStatusModalVisible = false; 
  editUserModalVisible = false;

  currentUserId  = 0;
  currentActionId = 0;
  currentStatusId = 0;

  Status: Status = new Status();
  Profession: Profession = new Profession();
  ActionType: ActionType = new ActionType(); 
  User: User = new User();

  Math: any;

  constructor(private statusDataService: StatusDataService,
    private professionDataService: ProfessionDataService,
    private userDataService: UserDataService,
    private actiontypedataService: ActiontypeDataService) {
      this.Math = Math
  }

  ngOnInit() {
    this.userDataService.getAll().subscribe(request => this.mapAndCountUsers(request));
    this.statusDataService.getAll().subscribe(request => this.mapAndCountStatus(request));
    this.professionDataService.getAll().subscribe(request => this.mapAndCountProfession(request));
    this.actiontypedataService.getAll().subscribe(request => this.mapAndCountActiontype(request));
  }

  mapAndCountStatus(request: Status[]) {
    this.statuses = request;
    this.statusesCount = this.statuses.length.toString();
  }

  mapAndCountUsers(request: User[]){
    this.users = request;
    this.userCount = this.users.length.toString();
  }
  mapAndCountProfession(request: Profession[]) {
    this.professions = request;
    this.professionsCount = this.professions.length.toString();
  }

  mapAndCountActiontype(request: ActionType[]) {
    this.actiontypes = request;
    this.actiontypesCount = this.actiontypes.length.toString();
  }

  postStatus() {
    this.statusDataService.postStatus(this.Status)
      .subscribe()
  }

  postUser() {
    this.userDataService.register(this.User)
      .subscribe(request => console.log(request));
  }

  postUser() {
    this.userDataService.register(this.User)
      .subscribe(request => console.log(request));
  }

  postActionType() {
    this.actiontypedataService.register(this.ActionType)
      .subscribe()
  }

  deleteUser(id){ 
    if (window.confirm('Weet je zeker dat je deze gebruiker wilt verwijderen?')) {
      this.userDataService.delete(id)
        .subscribe(
        request => { this.userDataService.getAll().subscribe(request => this.users = request); },
        error => { window.alert('Activiteit kan niet verwijderd worden omdat deze in gebruik is'); }
        );
    }
  }

  deleteAction(id) {
    if (window.confirm('Weet je zeker dat je deze activiteit wilt verwijderen?')) {
      this.actiontypedataService.delete(id)
        .subscribe(
        request => { this.actiontypedataService.getAll().subscribe(request => this.actiontypes = request); },
        error => { window.alert('Gebruiker kan niet worden verwijderd worden omdat deze in gebruik is'); }
        );
    }
  }

  deleteStatus(id) {
    if (window.confirm('Weet je zeker dat je deze status wilt verwijderen?')) {
      this.statusDataService.delete(id)
        .subscribe(
        request => { this.statusDataService.getAll().subscribe(request => this.statuses = request); },
        error => { window.alert('Status kan niet verwijderd worden omdat deze in gebruik is'); }
        );
    }
  }
  postProfession() {
    this.professionDataService.register(this.Profession)
      .subscribe();
  }


  // Methods to show the modals
  showAddStatusModal() {
    this.addStatusModalVisible = true;
  } 
  showAddUserModal() {
    this.addUserModalVisible = true;
  } 
  closeAddUserModal() {
    this.addUserModalVisible = false;
    this.addActionModalVisible = false;
    this.addStatusModalVisible = false;
  }
  closeAddStatusModal() {
    this.addUserModalVisible = false;
    this.addActionModalVisible = false;
    this.addStatusModalVisible = false;
  }
  closeEditStatusModal() {
    this.addUserModalVisible = false;
    this.addActionModalVisible = false;
    this.addStatusModalVisible = false;
  } 

  showAddActionModal() {
    this.addActionModalVisible = true;
  }

  showEditUser(event){ 
    const id = event.srcElement.id; 
    this.currentUserId = id; 
    this.editUserModalVisible = true;
  }

  showEditAction(event) {
    const id = event.srcElement.id;
    this.currentActionId = id;
    this.editActionModalVisible = true;
  }

  showEditStatus(event) {
    const id = event.srcElement.id;
    this.currentStatusId = id;
    this.editStatusModalVisible = true;
  }

  showModal() {
    this.editStatusModalVisible = false;
    this.statusDataService.getAll().subscribe(request => this.statuses = request);
  }

  completeAddActionModal() {
    this.addActionModalVisible = false;
    this.actiontypedataService.getAll().subscribe(request => this.actiontypes = request);
  }

 completeAddUserModal(){ 
   this.addUserModalVisible = false; 
   this.userDataService.getAll().subscribe(request => this.users)
 } 

 completeEditUserModal(){ 
   this.editUserModalVisible = false; 
    this.userDataService.getAll().subscribe(request => this.users)

 }

  completeAddStatusModal() {
    this.addStatusModalVisible = false;
    this.statusDataService.getAll().subscribe(request => this.statuses = request);
  }


  completeEditActionModal() {
    this.editActionModalVisible = false;
    this.actiontypedataService.getAll().subscribe(request => this.actiontypes = request);
  }
}
