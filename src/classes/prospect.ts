import { Address } from 'classes/Address'
import { Profession } from "classes/Profession";
import { SocialLinks } from "classes/SocialLinks";
import { Status } from "classes/Status";
export class Prospect{ 
    id:number; 
    name:string; 
    phoneNumber:string;
    address:Address;
    profession:Profession; 
    socialLinks:SocialLinks; 
    status:Status; 
    //TODO: Email address 
    //TODO: ImageLink
    constructor(values: Object = {}) {
    Object.assign(this, values); 

  }
}

