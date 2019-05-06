import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';

export interface IBook {
  id?: number;
  image: string;
  title: number;
  isbn: number;
  price: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  currentUser = {};
  loggedIn = false;
  bikes: Array<IBook> = [];
  myName = '';
  books = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private http: HttpService
  ) { }

  async ngOnInit() {
    const token = localStorage.getItem('id_token');
    this.books = await this.getBooks('book');

    //  if (token == null) {
      //  this.loggedIn = true;
      // this.router.navigate (['./login']);
    //  } else {
        // this.loggedIn = false;


    // }
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



  async updateBook(book: any) {
    // console.log('from updateBook book: ', book);
    const resp = await this.http.put(`book/id/${book.id}`, book);
    if (resp) {
      this.toastService.showToast('success', 3000, 'Book updated successfully!');
    }
    return resp;
  }
  async removeBook(book: any, index: number) {
    // console.log('from removeBook...', index);
    this.books.splice(index, 1);
  }
  }

