import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Item } from './instock.component';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root',

})
export class InstockService {

  constructor(private http: HttpClient, private router: Router, private datePipe: DatePipe) { }

  addItem(id: string, name: string, price: number, category: number, mealTime: number, isVeg: boolean, description: string) {
    this.http.post('http://3.223.72.19/api/item/add', {
      'id': id,
      'name': name,
      'price': price,
      'category': category,
      'time': mealTime,
      'image': "abczd",
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


  editItem(id: string, item: Item,) {
    this.http.patch('http://3.223.72.19/api/item/' + id, {
      'id': id,
      'name': item.name,
      'price': item.price,
      'category': item.category,
      'image': "avcd",
      'time': item.time,
      'veg': item.veg,
      'des': item.des,
    }, { observe: 'response' }
    ).subscribe({
      next: data => {
        console.log(data);

        if (data.status === 200) {
          // this.router.navigateByUrl('/instock');
          console.log("item edited successfully");

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


  deleteItem(id: string) {
    this.http.delete('http://3.223.72.19/api/item/' + id, { observe: 'response' }
    ).subscribe({
      next: data => {
        console.log(data);

        if (data.status === 200) {
          // this.router.navigateByUrl('/instock');
          console.log("item deleted successfully");

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

  //add new item to the inventory for today

  addNewItemToShowCase(itemID: number, qty: number) {
    let today = this.datePipe.transform(new Date(), 'yyyy.MM.dd');

    this.http.put('http://3.223.72.19/api/history/add-item', {
      'itemid': itemID,
      'count': qty,
      'id': today
    },
      { observe: 'response' }
    ).subscribe({
      next: data => {
        console.log(data);

        if (data.status === 200) {
          // this.router.navigateByUrl('/instock');
          console.log("item incremented successfully");

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

