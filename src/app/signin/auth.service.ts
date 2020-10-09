import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }


  loginFun(username: string, password: string) {
    this.http.post('http://3.223.72.19/api/staff/login', {
      "username": username,
      "password": password
    }, { observe: 'response' }
    ).subscribe({
      next: data => {
        // this.postId = data.id;
        console.log(data);

        if (data.status == 200) {
          this.router.navigateByUrl('/instock');


        } else {
          // add a error message here

        }
      },
      error: error => {
        // this.errorMessage = error.message;
        console.error('There was an error!', error);
        // add a error message here

      }
    }
    )


  }
  // loginFun(username: string, password: string) {
  //   this.http.post('http://3.223.72.19/api/staff/login', {
  //     "username": username,
  //     "password": password
  //   }).subscribe(res=>
  //     console.log(res.json())
  //   )


  // }
}
