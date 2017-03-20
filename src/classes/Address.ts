export class Address{  
    id:number;
    street:string; 
    houseNumber: string; 
    city:string; 
    zipcode:string;  

    constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}





