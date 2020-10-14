import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.getTodaydata();
  }

  ngOnInit(): void {
  }

  getTodaydata() {
    this.http.get('http://3.223.72.19/api/history/today', { observe: 'response' }
    ).subscribe({
      next: data => {
        console.log(data);

        if (data.status === 200) {
          // this.router.navigateByUrl('/instock');
          console.log("today data fetched");

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
