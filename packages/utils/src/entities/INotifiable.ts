import {Notification  } from './Notification';

export interface INotifiable {
  addNotification({ message, property }: Notification): void;
  addNotifications(notifications: Array<Notification>): void;
}
