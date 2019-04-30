import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { HttpService } from '../../shared-service/http.service';
@Injectable()
export class BookService {

  path:  '/book';

  constructor(private http: HttpService) {}

  async addBook (book) {
    const resp = await this.http.post('book', book);
    return resp;
  }

  async updateBook (book: any) {
    const resp = await this.http.put(`book/id/${book.id}`, book);
    return resp;
  }

  async getBook (book: any) {
    const resp = await this.http.get('book', book);
    return resp;
  }

  deleteBook (id) {
    return this.http.delete(`${this.path}/${id}`);
  }
}
