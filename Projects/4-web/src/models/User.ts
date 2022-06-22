import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  public get(propName: string): number | string {
    return this.data[propName];
  }

  public set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  public fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((r: AxiosResponse): void => {
        this.set(r.data);
      });
  }

  public save(): void {
    const id = this.get('id');
    if (id) {
      // put
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      // post
      axios.post(`http://localhost:3000/users`, this.data);
    }
  }
}
