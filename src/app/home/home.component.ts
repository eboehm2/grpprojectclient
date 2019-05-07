import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../shared-service/http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
loggedIn = false;
currentUser = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpService

  ) { }
// if not logged in redirects to login page
  ngOnInit() {
     const token = localStorage.getItem('id_token');
    // console.log('from login ngOnInit token: ', token);
      if (token == null) {
       this.loggedIn = false;
        this.router.navigate (['./login']);
     } else {
         this.loggedIn = true;

  //  }

}
}
}
