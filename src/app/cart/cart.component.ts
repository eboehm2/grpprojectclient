import { Component, OnInit, ViewChild, NgZone, Inject, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';
import {FormsModule} from '@angular/forms';
import { PublisherService } from '../services/publisher.service';
import { UploaderOptions } from 'ngx-uploader';

import { BookService} from '../services/book.service';
import { AuthorService } from '../services/author.service';
import {forkJoin} from 'rxjs';

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
export interface IPublisher {
  id?: number;
  publisher: string;
}
export interface IAuthor {
  id?: number;
  author: string;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  book: IBook = {title: null, price: null, isbn: null, edition:
    null, description: null, category: null, condition: null, cover: null};

    publisher: IPublisher = { publisher: null};
    author: IAuthor = { author: null};

  pageTitle: string;
  action: string;
  currentUser = {};
  edit = false;

  loggedIn = false;

  someVar: boolean;

  authors = [];
   publishers = [];
books = [];



  hasBaseDropZoneOver: boolean;
  previewData: any;
  private events: EventEmitter<any> = new EventEmitter();

  constructor(
    @Inject(NgZone) private zone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private http: HttpService,
    private forms: FormsModule,
    private authorService: AuthorService,
    private publisherService: PublisherService,
    private bookService: BookService,

  ) {
     const {url} = this.router;
  this.setTitle(url);
  this.getDefaults();


 }
  ngOnInit()  {const token = localStorage.getItem('id_token');
  // console.log('from login ngOnInit token: ', token);
    if (token == null) {
     this.loggedIn = false;
      this.router.navigate (['./login']);
   } else {
       this.loggedIn = true;
   }
  }
       async addPublisher() {
        const publisher = {
          publisher: null,

        };

        const resp = await this.http.post('publisher', publisher);
        // console.log('from createBook resp: ', resp);
        if (resp) {
          // this.refresh();

        } else {
          this.toastService.showToast('danger', 3000, 'Book create failed!');
        }
        return resp;
      }



  setTitle (route) {

    if (route === '/cart') {
        this.pageTitle = 'Add A Book To Sell';
        this.action = 'Submit';

    } else {
      this.pageTitle = 'Edit Book';
      this.action = 'Update';
      this.edit = true;
    }
  }


   getDefaults () {
     // we get the data needed from the server
     const authors = this.authorService.getAuthor({authors: {}});
     const publishers = this.publisherService.getPublisher({publisher: {}});
     const books = this.bookService.getBook({books: {}});
      // we fork all the http calls and get the results e.g. promise.all
    forkJoin([ authors, publishers, books ])
      .subscribe(results => {
        this.authors = results[0];
        this.publishers = results[1];
        this.books = results[2];
      });
  }









 sendBook (book: IBook ) {
   console.log(book);
   {
     this.bookService.addBook(book);


   }
 }

 sendPublisher (publisher: IPublisher) {
   console.log (publisher);
   this.publisherService.addPublisher(publisher);
 }
 sendAuthor (author: IAuthor) {
  console.log (author);
  this.authorService.addAuthor(author);

}







  // async refresh() {
    // this.books = await this.getBooks('book');
  // }

  // getCars('car');
  // async getBooks(path: string) {
    // const resp = await this.http.get(path);
    // console.log('resp from getBooks()', resp);
    // return resp;
  // }

  // async createBook() {
    // const book = {
      // make: null,
      // model: null,
      // year: null
    // };
    // const resp = await this.http.post('book', book);
    // console.log('from createBook resp: ', resp);
    // if (resp) {
      // this.refresh();
      // this.books.unshift(resp);
    // } else {
      // this.toastService.showToast('danger', 3000, 'Book create failed!');
    // }
    // return resp;
  // }

  // async updateBook(book: any) {
    // console.log('from updateBook book: ', book);
    // const resp = await this.http.put(`book/id/${book.id}`, book);
    // if (resp) {
      // this.toastService.showToast('success', 3000, 'Book updated successfully!');
    // }
    // return resp;
  // }
  // async removeBook(book: any, index: number) {
    // console.log('from removeBook...', index);
    // this.books.splice(index, 1);
  // }
  // }

}
