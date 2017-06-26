export class User {
    id: number;
    username: string;
    password: string;
    name: string;
    IsActive: Boolean;

    constructor(id, username, name, active) {
        this.id = id;
        this.username = id;
        this.name = name;
        this.IsActive = active;
        console.log(this.getEncodedCredentials())
    }

    public getEncodedCredentials() {

    }
}

User.prototype.getEncodedCredentials = function () {
    const credentials = this.username + ':' + this.password;
    const t = btoa(credentials);
    console.log(t);
    return t;
}
