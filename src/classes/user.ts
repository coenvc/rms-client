export class User {
    id: number;
    username: String;
    name: String;
    active: Boolean;
    password: String; 
  constructor(id?, username?, name?, active?, password?) {
        this.id = id;
        this.username = username;
        this.name =name;
        this.active = active; 
        this.password = password;
    }
}
