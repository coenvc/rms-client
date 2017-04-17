export class Status {
  public id: number;
  public content: string;

  constructor(content?: string, id?: number) {
    this.content = content;
    this.id = id;
  }
}


