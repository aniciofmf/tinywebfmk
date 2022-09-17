import axios, { AxiosPromise } from "axios";
import { IUser } from "../interfaces/IUser";

interface Id {
	id?: number;
}

export class Sync<T extends Id> {
	constructor(public rootUrl: string) {}

	fetch(id: number): AxiosPromise {
		return axios.get(`${this.rootUrl}/${id}`);
	}

	save(data: T): AxiosPromise {
		const { id } = data;

		if (id) {
			return axios.put(`${this.rootUrl}/${id}`, data);
		} else {
			return axios.post(this.rootUrl, data);
		}
	}
}
