export class SocialLinks {
  id: number;
  facebook: string;
  linkedIn: string;
  twitter: string;

  constructor(facebook: string, linkedIn: string, twitter: string, id?: number) {
    this.facebook = facebook;
    this.linkedIn = linkedIn;
    this.twitter = twitter;
    if (!id) {
      this.id = id;
    }
  }
}
