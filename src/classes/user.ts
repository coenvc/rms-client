export class User {
    id: number;
    username: string;
    password: string;
    name: string;
    IsActive: Boolean;
    test = btoa(this.username + ':' + this.password)

    constructor(id, username, name, active) {
        this.id = id;
        this.username = id;
        this.name = name;
        this.IsActive = active;
    }

    getEncodedCredentials(): String {
        const credentials = this.username + ':' + this.password;
        const t = btoa(credentials);
        console.log(t);
        return t;
    }
}
