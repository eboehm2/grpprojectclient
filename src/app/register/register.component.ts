import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
export interface IUser {
  id?: number;
  email: string;
  password: string;
  username: string;
}
export interface IStudent {
  id?: number;
  student_first_name: string;
  student_last_name: string;
  street: string;
  state: string;
  city: string;
  zipcode: string;
  university: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: IUser = { email: null, password: null, username: null };
  currentUser = {};
  loggedIn = false;
  someVar: boolean;
  student: IStudent = { student_first_name: null, student_last_name: null,
  street: null, state: null, city: null, zipcode: null, university: null };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private http: HttpService,
    private forms: FormsModule
  ) { }


   async ngOnInit() {

    const payload = {
      email: 'johndoe',
      password: '1234'
    //   this.router.navigate(['']);
    // } else {


    };
    const resp: any = await this.http.post('user/login', payload);


    if (resp && resp.token) {
      localStorage.setItem('id_token', resp.token);

     // this.router.navigate(['']);

      }
    }
    async createUser(user: IUser) {

         const resp = await this.http.post('user', user);
         if (resp) {
          this.toastService.showToast('success', 3000, 'Student Created successfully!');
         }
        }
        async createStudent(student: IStudent) {

          const resp: any = await this.http.post('student/create-student', student);
          if (resp) {
            this.toastService.showToast('success', 3000, 'Student Created successfully!');
          }
          if (resp.status === 200) {
            localStorage.removeItem('id_token');
          }


         // this.router.navigate(['']);
        }

  async logout() {
 {
      localStorage.removeItem('id_token');
  }
}
}
