import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProspectDataService } from "../../../src/app/prospect-data.service";
import { StatusDataService } from "../../../src/app/status-data.service";
import { Prospect } from "../../classes/Prospect";
import { SocialLinks } from "../../classes/SocialLinks";
import { Address } from "../../classes/Address";
import { Status } from "../../classes/Status";
import { Profession } from "../../classes/Profession";


@Component({
  selector: 'edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css', '../../styles/buttons.css']
})
export class EditMemberComponent implements OnInit {
  id: number;
  statuses: Status[];
  prospect: Prospect;
  socialLinks: SocialLinks;
  address: Address;
  status: Status;
  profession: Profession;
  description: String;
  statusId: number;

  constructor(private prospectDataService: ProspectDataService,
    private statusDataService: StatusDataService,
    private route: ActivatedRoute,
    private router : Router) {
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
    if (prospect.socialLinks != null) this.socialLinks = prospect.socialLinks;
    if (prospect.address != null) this.address = prospect.address;
    this.status = prospect.status;
    this.profession = prospect.profession;
    this.description = prospect.description
    this.statusId = prospect.status.id
  }

  onSubmit(form, statusId) {

    this.statusDataService.find(statusId).subscribe(res => {
      this.prospect.socialLinks = this.socialLinks;
      this.prospect.address = this.address;
      this.prospect.status = res;
      this.prospect.profession = this.profession;
      this.prospectDataService.update(this.prospect).subscribe(request => {
        alert("Aanpassing voltooid!")
        this.router.navigate(['prospect/:id', {id: this.prospect.id}]);
      }, error => console.log(error));
    }, error => console.log(error))

  }
}
