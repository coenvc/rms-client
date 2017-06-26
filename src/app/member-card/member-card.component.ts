import {Component, OnInit} from '@angular/core';
import {Prospect} from '../../classes/Prospect';
import {NgClass} from '@angular/common';
import {ProspectDataService} from '../prospect-data.service';
import {Test} from '../../classes/TestProspect';
import {SearchPipePipe} from '../../pipes/search-pipe.pipe';
import {FilterPipe} from '../../pipes/filter.pipe';
import {User} from 'classes/user';
import {Status} from 'classes/Status';
import {StatusDataService} from 'app/status-data.service';


@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css', '../../styles/buttons.css', '../../styles/forms.css']
})
export class MemberCardComponent implements OnInit {
  prospects: Prospect[];
  pipes: [SearchPipePipe, FilterPipe];
  status = '';
  test: Test;
  name = '';
  initialProspects: Prospect[];
  directives: [NgClass];
  providers: [ProspectDataService];
  currentUser: User;
  statusses: Status[];
  narrowOverview = true;

  constructor(private prospectDataService: ProspectDataService, statusService: StatusDataService) {
    prospectDataService.getAll().subscribe(request => this.initialProspects = request);
    prospectDataService.getAll().subscribe(request => this.prospects = request);
    statusService.getAll().subscribe(request => this.statusses = request);
  }

  invertOverviewType() {
    switch (this.narrowOverview) {
      case null: {
        this.narrowOverview = false;
        break;
      }
      case true: {
        this.narrowOverview = false;
        break;
      }
      case false: {
        this.narrowOverview = true;
        break;
      }
      default: {
        this.narrowOverview = false;
        break;
      }
    }
  }

  reloadMembers() {
    if (this.prospects !== this.initialProspects) {
      this.prospects = this.initialProspects;
    }
  }

  filterMember(e) {
    const memberStatus = e.srcElement.attributes[1].nodeValue;
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
