import { Address } from 'classes/Address'
import { Profession } from "classes/Profession";
import { SocialLinks } from "classes/SocialLinks";
import { Status } from "classes/Status";
export class Prospect {
    id: number;
    name: string;
    phoneNumber: string;
    address: Address;
    profession: Profession;
    socialLinks: SocialLinks;
    status: Status;
    emailAddress: String;
    imageLink: String
    description: String;
    firstName: string;
    surName: string;
    infix: string;
    fullName: string;
    //TODO: ImageLink 
    constructor(firstName?: string, surName?: string, infix?: string, phonenNumber?: string, address?: Address, profession?: Profession, socilaLinks?: SocialLinks, status?: Status, emailAddress?: string, description?: string, imageLink?: string, id?: number, fullName?: string) {
        this.firstName = firstName;
        this.surName = surName;
        this.infix = infix;
        this.phoneNumber = phonenNumber;
        this.address = address;
        this.profession = profession;
        this.socialLinks = socilaLinks;
        this.status = status;
        this.emailAddress = emailAddress;
        this.imageLink = imageLink;
        this.description = description;
        this.firstName = firstName;
        this.fullName = fullName;
        this.id = id;

    }
}

