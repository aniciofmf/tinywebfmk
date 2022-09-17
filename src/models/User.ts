import { IUser } from "../interfaces/IUser";
import { Event } from "./Event";
import { Sync } from "./Sync";

const apiUrl = "http://localhost:3000";

export class User {
	public events: Event = new Event();
	public sync: Sync<IUser> = new Sync<IUser>(apiUrl);

	constructor(private data: IUser) {}

	get(prop: string): string | number {
		return this.data[prop];
	}

	set(value: IUser): void {
		Object.assign(this.data, value);
	}
}
