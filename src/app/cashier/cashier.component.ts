import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.scss']
})
export class CashierComponent implements OnInit {

  orderId;


  userid;
  time;

  allitems;
  total;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getOrderDetails() {

    if (this.orderId != null) {
      let url = "http://3.223.72.19/api/order/" + this.orderId;
      this.http.get(url, { observe: 'response' }
      ).subscribe({
        next: data => {
          console.log(data.body['order']);

          if (data.status === 200) {
            // this.router.navigateByUrl('/instock');
            console.log("order data fetched");

            this.userid = data.body['order']['customerID'];
            this.time = data.body['order']['date'];
            this.allitems = data.body['order']['items'];
            this.total = data.body['order']['price'];

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

    } else {

    }
  }



  completeOrder() {

  }
}
