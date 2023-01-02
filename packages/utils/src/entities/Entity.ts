import { Guid } from './Guid';
import { Notifiable } from './Notifiable';

export abstract class BaseEntity<T extends object> extends Notifiable {
  protected readonly _id: Guid;
  protected readonly _props: T;

  constructor(props: T, id?: Guid) {
    super();
    this._props = props;
    this._id = id ?? new Guid();
  }

  public get id(): string {
    return this._id.toValue();
  }

  public equals(object?: BaseEntity<T>): boolean {
    if (object === null || object === undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }
    if (this === object) {
      return true;
    }
    if (!(object instanceof BaseEntity)) {
      return false;
    }

    return this._id.equals(object._id);
  }
}
