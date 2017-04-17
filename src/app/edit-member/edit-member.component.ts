import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ProspectDataService} from "../../../src/app/prospect-data.service";
import {Prospect} from "../../classes/prospect";
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

  prospect: Prospect;
  socialLinks: SocialLinks;
  address: Address;
  status: Status;
  profession: Profession;

  constructor(private prospectDataService: ProspectDataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    //this.getObject(2);
    this.route.params.subscribe(params => this.getObject(+params['id']));
  }

  private getObject(id: number) {
    this.prospect = new Prospect();
    this.socialLinks = new SocialLinks("", "", "");
    this.address = new Address();
    this.status = new Status();
    this.profession = new Profession();

    this.prospectDataService.getProspectById(id).subscribe(request => this.splitObject(request));
  }

  private splitObject(prospect: Prospect) {
    this.prospect = prospect;
    this.socialLinks = prospect.socialLinks;
    this.address = prospect.address;
    this.status = prospect.status;
    this.profession = prospect.profession;
  }

  onSubmit() {
    // Merge the objects back to Prospect
    this.prospect.socialLinks = this.socialLinks;
    this.prospect.address = this.address;
    this.prospect.status = this.status;
    this.prospect.profession = this.profession;

    console.log(this.prospect)
  }
}
