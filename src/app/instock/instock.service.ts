import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class InstockService {

  constructor(private http: HttpClient, private router: Router) { }

  addItem(id: string, name: string, price: number, category: number, mealTime: number, isVeg: boolean, description: string) {
    this.http.post('http://3.223.72.19/api/item/add', {
      'id': id,
      'name': name,
      'price': price,
      'category': category,
      'time': mealTime,
      'image': "abcd",
      'veg': isVeg,
      'des': description,
    }, { observe: 'response' }
    ).subscribe({
      next: data => {
        console.log(data);

        if (data.status === 200) {
          // this.router.navigateByUrl('/instock');
          console.log("item added successfully");

        } else {
          // add a error message here
          console.log("error occured");

        }
      },
      error: error => {
        // this.errorMessage = error.message;
        console.error('There was an error!', error);
        // add a error message here

      }
    }
    );


  }
}

