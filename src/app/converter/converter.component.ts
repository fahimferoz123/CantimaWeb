import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  constructor(private http: HttpClient) { }
  userId = "";
  amount = 0;

  ngOnInit(): void {
  }


  addCredits() {
    var url = "http://3.223.72.19/api/order/add-credits"
    this.http.post(url, {
      "id": this.userId,
      "amount": {
        "amount": this.amount
      }
    }, { observe: 'response' }
    ).subscribe({
      next: data => {
        console.log(data);

        if (data.status === 200) {
          // this.router.navigateByUrl('/instock');
          console.log("credits added");

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
