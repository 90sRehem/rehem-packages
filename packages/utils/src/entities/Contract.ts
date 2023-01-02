import * as classValidator from 'class-validator';
import { Notification } from './Notification';

export class Contract {
  private _notifications: Array<Notification> = [];
  private validator = classValidator;

  public get notifications(): Array<Notification> {
    return this._notifications;
  }

  protected result(property: string, message: string | string[]): void {
    this._notifications.unshift(new Notification(property, message));
  }

  public validateSync(props: object) {
    this.validator
      .validateSync(props)
      .map((error) =>
        this.result(
          error.property,
          Object.values(error.constraints as unknown as string),
        ),
      );

    return this._notifications;
  }
}
