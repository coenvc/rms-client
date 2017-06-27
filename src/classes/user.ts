export class User {
  id: number;
  username: String;
  name: String;
  isActive: Boolean;
  password: String;

  constructor(id?, username?, name?, active?, password?) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.isActive = active;
    this.password = password;
  }
}
