import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';
import { FormsModule } from '@angular/forms';
export interface IBike {
    id?: number;
    image: string;
    price: number;
    quantity: number;
    description: string;
}

@Component({
    selector: 'app-buybook',
    templateUrl: './buybook.component.html',
    styleUrls: ['./buybook.component.css']
})
export class BuyBookComponent  {
    @Input() headTitle;
    @Output() searchObj = new EventEmitter();
    @Output() searchTitle = new EventEmitter();
    @Output() searchAuthor = new EventEmitter();
    @Output() searchPrice = new EventEmitter();

    setPriceObj(search): any {
        if ('price' in search) {
            const number = search['price'];
            if (search['filter'] === 'lower') {
                return { price: { number, lower: true } };
            } else if (search['filter'] === 'higher') {
                return { price: { number, higher: true } };
            } else {
                return { price: number };
            }
        }
    }

    makeBookObj (values): any {
        const {search: filters} = values;
        const book = {};

        for (const key in filters) {
            if (filters[key] !== '') {
                if (key === 'author') {
                  book[key] = [filters[key]];
                } else {
                  book[key] = filters[key];
                }
            }
        }
        if (filters['price'] !== '') {
            const price = this.setPriceObj(filters);
            delete book['filter'];
            Object.assign(book, price);
        }
        return book;
      }
      searchBook (search) {
        this.searchObj.next(this.makeBookObj(search));
      }
      searchByTitle (title) {
        this.searchTitle.next({title});
      }
      searchByAuthor (author) {
        this.searchAuthor.next({author});
      }

      searchByPrice (price) {
        this.searchPrice.next({price});
      }
    }
