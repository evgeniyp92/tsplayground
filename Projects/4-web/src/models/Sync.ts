import axios, { AxiosPromise } from 'axios';

interface HasID {
  id?: number;
}

export class Sync<T extends HasID> {
  constructor(public rootUrl: string) {}

  public fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  public save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(`${this.rootUrl}`, data);
    }
  }
}
