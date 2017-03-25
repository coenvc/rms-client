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
     emailAddress:String; 
     imageLink:String  
    //TODO: ImageLink
    constructor(name:string,phonenNumber:string,address:Address,profession:Profession,socilaLinks:SocialLinks,status:Status,emailAddress:string,imageLink?:string,id?:number){ 
        this.name = name; 
        this.phoneNumber = phonenNumber; 
        this.address = address; 
        this.profession = profession; 
        this.socialLinks = socilaLinks; 
        this.status = status; 
        this.emailAddress = emailAddress; 
        this.imageLink = imageLink;   
        if(!id){ 
            this.id = id;
        }
    }

}

