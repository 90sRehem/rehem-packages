import { INotifiable } from './INotifiable';
import { Notification } from './Notification';
import { Contract } from './Contract';

export abstract class Notifiable implements INotifiable {
  private _notifications: Array<Notification> = [];

  public addNotification(property: string, message: string | string[]): void;
  public addNotification(notification: Notification): void;
  public addNotification(Contract: Contract): void;
  public addNotification(
    property?: string | Notification | Contract,
    message?: string | string[],
  ): void {
    if (property instanceof Notification) {
      this._notifications.unshift(property);
    }
    if (property instanceof Contract) {
      const nots = property.notifications;
      this._notifications.unshift(...nots);
    }
    // eslint-disable-next-line eqeqeq
    if (typeof property == 'string') {
      const newNotification = new Notification(property, String(message));
      this._notifications.unshift(newNotification);
    }
  }

  public addNotifications(notifications: Array<Notification>): void {
    notifications.forEach((notification) => this.addNotification(notification));
  }

  public get notifications(): Array<Notification> {
    return this._notifications;
  }

  public get invalid(): boolean {
    return this._notifications.length > 0;
  }

  public get valid(): boolean {
    return this._notifications.length <= 0;
  }
}
