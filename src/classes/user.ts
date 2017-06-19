export class User {
    id: number
    username: String
    name: String
    IsActive: Boolean

  constructor(id, username, name, active) {
        this.id = id;
        this.username = id;
        this.name =name;
        this.IsActive = active;
    }
}
