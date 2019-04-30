import { Injectable } from '@angular/core';
import { Http, Headers, } from '@angular/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  apiURL = ''; // http://localhost:3002/api/v1/
  constructor(
    private http: Http
  ) {
    this.apiURL = environment.apiURL;
  }

  testing() {
    console.log('from http service testing......');
  }
  // get('car');
  async get(path: any, payload: any) {
    const resp = await this.http.get(this.apiURL + path, this.headers).toPromise();
  //  return this.http.get(this.apiURL + path, this.headers).toPromise();
return resp.json();
  }
// put('book/id/1',) {title: "make"}
async put(path: any, payload: any) {
  const resp = await this.http.put(this.apiURL + path, payload, this.headers).toPromise();
  // console.log('from http service put()', resp.json());
  return resp.json();

}
  // post('car', { make: 'Nissan', model: '350z'});
  async post (path: any, payload: any) {
    const resp = await this.http.post(this.apiURL + path, payload, this.headers).toPromise();
    return resp.json();
    // return this.http.post(this.apiURL + path, payload, this.headers).toPromise();
      // .map(this.checkForError)
      // .catch(err => Observable.throw(err))
      // .map(this.getJson);
  }
// put('book/id/1',) {title: "make"}
async delete(path: string) {
  const resp = await this.http.delete(this.apiURL + path, this.headers).toPromise();
  // return this.http.put(`${this.apiURL}${path}`, JSON.stringify(body),
  return resp.json();
    // .map(this.checkForError)
    // .catch(err => Observable.throw(err))
    // .map(this.getJson);



}

 async logout() {
    const resp = await this.http.get(this.apiURL + 'user/logout', this.headers).toPromise();
   console.log('from http service logout()', resp.json());
     return resp.json();
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

