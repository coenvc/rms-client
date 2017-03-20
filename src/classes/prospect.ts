export class Prospect{ 
    id:number;
    name:string; 
    jobTitle:string; 
    phoneNumber:string; 
    emailAddress:string; 
    facebookLink:string; 
    linkedinLink:string; 
    status:string; 
    streetname:string; 
    housenumber:number; 
    zipCode:string; 
    city:string; 
    imageLink:string;

    constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}