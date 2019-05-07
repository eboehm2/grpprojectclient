import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { HttpService } from '../../shared-service/http.service';

@Injectable()
export class PublisherService {

  path: '/publisher';

  constructor(private http: HttpService) {}

  async addPublisher (publisher) {
    const resp = await this.http.post('publisher', publisher);
    return resp;
  }

  async updatePublisher (publisher: any) {
    const resp = await this.http.put('author/id/${author.id}', publisher);
    return resp;
  }
  async getPublisher (publisher) {
    const resp = await this.http.get('publisher', );
    return resp;
  }

  deletePublisher (id) {
    return this.http.delete(`${this.path}/${id}`);
  }
}
