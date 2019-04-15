import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';

export interface IBike {
  id?: number;
  image: string;
  price: number;
  quantity: number;
  description: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  bikes: Array<IBike> = [];
  myName = '';
  books = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private http: HttpService
  ) { }

  async ngOnInit() {
    await this.refresh();
    // this.createCar('car', { make: 'Tesla', model: 'X'});
    // this.updateCar('car/id/1', { make: 'Ford', model: 'Fiasta'});
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

  async createBook() {
    const book = {
      make: null,
      model: null,
      year: null
    };
    const resp = await this.http.post('book', book);
    // console.log('from createBook resp: ', resp);
    if (resp) {
      // this.refresh();
      this.books.unshift(resp);
    } else {
      this.toastService.showToast('danger', 3000, 'Book create failed!');
    }
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

