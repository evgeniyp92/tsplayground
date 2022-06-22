import axios, { AxiosResponse } from 'axios';

export class Sync {
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
