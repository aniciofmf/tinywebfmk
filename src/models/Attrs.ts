export class Attrs<T> {
	constructor(private data: T) {}

	get<K extends keyof T>(key: K): T[K] {
		return this.data[key];
	}

	set(update: T): void {
		if (this.data) {
			Object.assign(this.data, update);
		}
	}
}
