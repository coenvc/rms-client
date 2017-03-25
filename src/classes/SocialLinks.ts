export class SocialLinks {
  id: number;
  facebook: string;
  linkdIn: string;
  twitter: string;

  constructor(facebook: string, linkedIn: string, twitter: string, id?: number) {
    this.facebook = facebook;
    this.linkdIn = linkedIn;
    this.twitter = twitter;
    if (!id) {
      this.id = id;
    }
  }
}
