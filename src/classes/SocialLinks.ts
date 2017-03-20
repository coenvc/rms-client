export class SocialLinks{ 
    id:number; 
    facebook:string; 
    linkedIn: string; 
    twitter:string; 

    constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
