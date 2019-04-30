import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { HttpService } from '../../shared-service/http.service';
@Injectable()
export class AuthorService {

  path: '/author';

  constructor(private http: HttpService) {}

  async  addAuthor (author) {
    const resp = await this.http.post('author', author);
    return resp;
  }

  async getAuthor (authors) {
    const resp = await this.http.get('author', authors);
    return resp;
  }


  deleteAuthor (id) {
    return this.http.delete(`${this.path}/${id}`);
  }
}
