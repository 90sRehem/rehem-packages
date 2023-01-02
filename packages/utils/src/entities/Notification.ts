export class Notification {
    constructor(public property: string, public message: string | string[]) {
      this.message = message;
      this.property = property;
    }
  }