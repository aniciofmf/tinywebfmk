import { IUser } from "../interfaces/IUser";
import { Attrs } from "./Attrs";
import { Event } from "./Event";
import { Sync } from "./Sync";

const apiUrl = "http://localhost:3000";

export class User {
	public events: Event = new Event();
	public sync: Sync<IUser> = new Sync<IUser>(apiUrl);
	public attrs: Attrs<IUser>;

	constructor(attrs: IUser) {
		this.attrs = new Attrs<IUser>(attrs);
	}
}
