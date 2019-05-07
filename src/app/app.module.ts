import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ToastModule } from './toast/toast.module';
import { LoginComponent } from './login/login.component';
import { NgxUploaderModule } from 'ngx-uploader';
import { AppRoutes } from './app.routes';
import { BuyBookComponent } from './buybook/buybook.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SharedServiceModule } from '../shared-service/shared-service.module';
import { BookService, AuthorService, PublisherService, SearchService} from './services';
import { EditComponent } from './edit/edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatDialog} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavComponent,
    HomeComponent,
    CartComponent,
    RegisterComponent,
    BuyBookComponent,
    EditComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastModule,
    AppRoutes,
    BrowserAnimationsModule,
    MaterialDesignModule,
    SharedServiceModule,
    FormsModule,
    Ng2SearchPipeModule,

    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,

  ],
  providers: [
    BookService,
    AuthorService,
    PublisherService,
    SearchService,

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
