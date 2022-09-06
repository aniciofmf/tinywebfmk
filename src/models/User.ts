import { IUser } from "../interfaces/IUser";

type TCallback = () => void;

export class User {
	eventsList: { [key: string]: TCallback[] } = {};

	constructor(private data: IUser) {}

	get(prop: string): string | number {
		return this.data[prop];
	}

	set(value: IUser): void {
		Object.assign(this.data, value);
	}

	on(evtName: string, cb: TCallback): void {
		const evtHandlers = this.eventsList[evtName] || [];
		evtHandlers.push(cb);
		this.eventsList[evtName] = evtHandlers;
	}
}
