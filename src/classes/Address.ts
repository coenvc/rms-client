export class Address {
  id: number;
  street: string;
  houseNumber: string;
  city: string;
  zipcode: string;

  constructor(street?: string, houseNumber?: string, city?: string, zipCode?: string, id?: number) {
    this.street = street;
    this.city = city; 
    this.houseNumber = houseNumber;
    this.zipcode = zipCode;
    this.id = id;
  }
}





