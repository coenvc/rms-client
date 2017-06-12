import {Component, OnInit} from '@angular/core';
import {Prospect} from '../../classes/Prospect';
import {NgClass} from '@angular/common';
import {ProspectDataService} from '../../../src/app/prospect-data.service';
import {Test} from '../../../src/classes/TestProspect';
import {SearchPipePipe} from '../../pipes/search-pipe.pipe';
import {FilterPipe} from '../../pipes/filter.pipe';
import {User} from 'classes/user';
import {Status} from 'classes/Status';
import {StatusDataService} from 'app/status-data.service';


@Component({
  selector: 'app-dashboard-narrow',
  templateUrl: './prospect-narrow.component.html',
  styleUrls: ['./prospect-narrow.component.css', '../../styles/buttons.css', '../../styles/forms.css']
})
export class DashboardNarrowComponent implements OnInit {
  prospects: Prospect[];
  status = '';
  test: Test;
  name = '';
  initialProspects: Prospect[];
  providers: [ProspectDataService];
  currentUser: User;
  statusses: Status[];

  constructor(private prospectDataService: ProspectDataService, statusService: StatusDataService) {
    prospectDataService.getAll().subscribe(request => this.initialProspects = request);
    prospectDataService.getAll().subscribe(request => this.prospects = request);
    statusService.getAll().subscribe(request => this.statusses = request);
  }

  reloadMembers() {
    if (this.prospects !== this.initialProspects) {
      this.prospects = this.initialProspects;
    }
  }

  searchmember() {
    console.log(this.name);
  }

  onChange(t) {
    if (t.toLowerCase() === 'alle') {
      this.prospects = this.initialProspects;
    } else {
      this.prospects = this.initialProspects.filter(p => p.status.id === t);
    }
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
