export class Profession{ 
    id:number; 
    name:string; 

  //   constructor(values: Object = {}) {
  //   Object.assign(this, values);
  // } 

  constructor(name:string,id?:number){  
    if(!id){
    this.id = id;   
    }
    this.name = name; 
  }
}



