type TCallback = () => void;

export class Event {
	eventsList: { [key: string]: TCallback[] } = {};

	on(evtName: string, cb: TCallback): void {
		const evtHandlers = this.eventsList[evtName] || [];
		evtHandlers.push(cb);
		this.eventsList[evtName] = evtHandlers;
	}

	trigger(evtName: string): void {
		const evtHandlers = this.eventsList[evtName];

		if (!evtHandlers || evtHandlers.length === 0) {
			return;
		}

		evtHandlers.forEach((cb) => {
			cb();
		});
	}
}
