import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StartshopService {

  constructor(private http: HttpClient) { }


  startShop() {
    this.http.post('http://3.223.72.19/api/history/create', {
    }, { observe: 'response' }
    ).subscribe({
      next: data => {
        // this.postId = data.id;
        console.log(data);

        if (data.status == 200) {
          // this.router.navigateByUrl('/instock');


        } else {
          // add a error message here

        }
      },
      error: error => {
        // this.errorMessage = error.message;
        console.error('There was an error!', error);
        // add a error message here
        if (error.status == 400) {
          console.log(error["error"]['message']);

        }

      }
    }
    )
  }
}
