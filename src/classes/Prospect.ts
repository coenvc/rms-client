import {Address} from "classes/Address";
import {Profession} from "classes/Profession";
import {SocialLinks} from "classes/SocialLinks";
import {Status} from "classes/Status";
export class Prospect {
  public id: number;
  public name: string;
  public phoneNumber: string;
  public address: Address;
  public profession: Profession;
  public socialLinks: SocialLinks;
  public status: Status;
  public emailAddress: String;
  public imageUrl: String;
  public description: String;
  public firstName: string;
  public surname: string;
  public infix: string;
  public fullName: string;

  constructor(firstName?: string, surname?: string, infix?: string, phoneNumber?: string, address?: Address, profession?: Profession, socialLinks?: SocialLinks, status?: Status, emailAddress?: string, description?: string, imageUrl?: string, id?: number, fullName?: string) {
    this.firstName = firstName;
    this.infix = infix;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.profession = profession;
    this.socialLinks = socialLinks;
    this.status = status;
    this.emailAddress = emailAddress;
    this.imageUrl = imageUrl;
    this.description = description;
    this.firstName = firstName;
    this.fullName = fullName;
    this.surname = surname;
    this.id = id;
  }
}

