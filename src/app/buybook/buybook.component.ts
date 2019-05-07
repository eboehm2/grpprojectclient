
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



export interface IBook {
  id?: number;
  title: string;
  price: string;
  isbn: string;
  edition: string;
  description: string;
  category: string;
  condition: string;
  cover: string;
}


@Component({
    selector: 'app-buybook',
    templateUrl: './buybook.component.html',
    styleUrls: ['./buybook.component.css']
})
export class BuyBookComponent implements OnInit {


  book: Array<IBook> = [];

    searchText;
    books = [];
    constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private toastService: ToastService,
      private http: HttpService,

    ) { }
    async ngOnInit() {
      await this.refresh();



        const payload = {
          email: 'johndoe',
          password: '1234'
        //   this.router.navigate(['']);
        // } else {


        };
        const resp: any = await this.http.post('user/login', payload);


        if (resp && resp.token) {
          localStorage.setItem('id_token', resp.token);
    }
  }

    async refresh() {
      this.books = await this.getBooks('book');
    }

    // getCars('car');
    async getBooks(path: string) {
      const resp = await this.http.get(path);
      // console.log('resp from getBooks()', resp);
      return resp;
    }

    async logout() {
      {
           localStorage.removeItem('id_token');
       }
}
}

