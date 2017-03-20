export class Test {
    _id: number;
    _name: string;
    _jobTitle: string;
    _phoneNumber: string;
    _emailAddress: string;
    _facebookLink: string;
    _linkedinLink: string;


    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}