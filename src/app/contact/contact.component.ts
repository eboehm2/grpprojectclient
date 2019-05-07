import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatDialogModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatDialog, MatDialogConfig} from '@angular/material';
export interface IBook {
  id?: number;
  image: string;
  title: number;
  isbn: number;
  price: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private http: HttpService,

  ) {}
  loggedIn = false;
  ngOnInit()  {const token = localStorage.getItem('id_token');
  // console.log('from login ngOnInit token: ', token);
    if (token == null) {
     this.loggedIn = false;
      this.router.navigate (['./login']);
   } else {
       this.loggedIn = true;
   }
  }
}

