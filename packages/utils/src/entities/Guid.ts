import { randomUUID } from "node:crypto";

export class Guid {
  private _id: string;

  constructor(id?: string) {
    this._id = id ?? randomUUID();
  }

  public get id(): string {
    return this._id;
  }

  public equals(id: Guid): boolean {
    if (id === null || id === undefined) {
      return false;
    }
    if (!(id instanceof Guid)) {
      return false;
    }
    return id.toValue() === this._id;
  }

  public toValue(): string {
    return String(this.id);
  }
}
