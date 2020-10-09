import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    }).subscribe({
      next: data => {
        // this.postId = data.id;
        console.log(data);
        this.router.navigateByUrl('/instock');
      },
      error: error => {
        // this.errorMessage = error.message;
        console.error('There was an error!', error.status);
      }
    }
    )


  }
}
