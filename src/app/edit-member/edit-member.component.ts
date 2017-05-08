import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ProspectDataService} from "../../../src/app/prospect-data.service";
import {StatusDataService} from "../../../src/app/status-data.service";
import {Prospect} from "../../classes/Prospect";
import {SocialLinks} from "../../classes/SocialLinks";
import {Address} from "../../classes/Address";
import {Status} from "../../classes/Status";
import {Profession} from "../../classes/Profession";


@Component({
  selector: 'edit-member',
  templateUrl: './edit-member.component.html'
})
export class EditMemberComponent implements OnInit {
  id: number;

  // Temp status array until it is fixed
  statuses: Status[];

  prospect: Prospect;
  socialLinks: SocialLinks;
  address: Address;
  status: Status;
  selectedStatus: Status;
  profession: Profession;

  constructor(private prospectDataService: ProspectDataService,
              private statusDataService: StatusDataService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.getObject(+params['id']));
    this.statusDataService.getAll().subscribe(request => this.statuses = request,
      error => console.log(error));
  }

  private getObject(id: number) {
    this.prospect = new Prospect();
    this.socialLinks = new SocialLinks("", "", "");
    this.address = new Address();
    this.status = new Status();
    this.profession = new Profession();

    this.prospectDataService.getProspectById(id)
      .subscribe(request => this.splitObject(request),
      error => console.log(error));
  }

  private splitObject(prospect: Prospect) {
    this.prospect = prospect;
    this.socialLinks = prospect.socialLinks;
    this.address = prospect.address;
    this.status = prospect.status;
    this.profession = prospect.profession;

    console.log(this.status.id + " " + this.status.content)
  }

  onSubmit() {
    console.log("Status: " + this.status.content);
    console.log("selectedStatus: " + this.selectedStatus.content);

    // Merge the objects back to Prospect
    this.prospect.socialLinks = this.socialLinks;
    this.prospect.address = this.address;
    this.prospect.status = this.status;
    this.prospect.profession = this.profession;

    console.log(this.prospect);
    //console.log(JSON.stringify(this.prospect));

     this.prospectDataService.update(this.prospect)
       .subscribe(request => console.log(request),
         error => console.log(error)
       );
  }
}
