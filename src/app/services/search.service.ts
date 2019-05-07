import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { HttpService } from '../../shared-service/http.service';


@Injectable({
    providedIn: 'root'
  })
  export class SearchService {


    apiURL = '/book'; // http://localhost:3002/api/v1/
    constructor(
      private http: Http
    ) {
      this.apiURL = environment.apiURL;
    }

    getBooks() {
        const resp =  this.http.get(this.apiURL , this.headers);
      //  return this.http.get(this.apiURL + path, this.headers).toPromise();
      }


      get headers() {
        const token = localStorage.getItem('id_token') || null;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        if (token) {
          headers.append('Authorization', 'Bearer ' + token);
        }

       return {
         headers,
         withCredentials: true
       };
     }
    }

    export class Book {
        id: number;
        title: string;
        price: string;
        isbn: string;
        edition: string;
        description: string;
        category: string;
        condition: string;
        cover: string;


        constructor (obj?: any) {
            this.id  = obj && Number(obj.id) || null;
            this.title = obj && obj.title || null;
            this.price = obj && obj.price || null;
            this.category = obj && obj.isbn || null;
            this.edition = obj && obj.edition || null;
            this.description = obj && obj.description || null;
            this.category = obj && obj.category || null;
            this.condition = obj && obj.condition || null;
            this.cover = obj && obj.cover || null;
        }


        }
