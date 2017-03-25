export class Status {
  id: number;
  content: string;

  constructor(content: string, id?: number) {
    this.content = content;
    if (!id) {
      this.id = id;
    }
  }
}


