import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.scss']
})
export class InsightComponent implements OnInit {

  public chart1Type:string = 'bar';
  public chart2Type:string = 'pie';
  public chart3Type:string = 'line';


  public chartDatasets: Array<any> = [
    {data: [50, 40, 60, 51, 56, 55, 40], label: 'Rice'},
    {data: [28, 80, 40, 69, 36, 37, 110], label: 'Beverages'},
    {data: [38, 58, 30, 90, 45, 65, 30], label: 'Short Eats'}
  ];

  public chartDatasetmonth: Array<any> = [
    {data: [50, 40, 60, 51, 56, 55, 40], label: 'Traffic'},
    {data: [28, 80, 40, 69, 36, 37, 110], label: 'Sales'},
    {data: [38, 58, 30, 90, 45, 65, 30], label: 'Convertions'}
  ];

  public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  public chartLabels1: Array<any> = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public chartColors:Array<any> = [ ];

  public dateOptionsSelect: any[];
  public bulkOptionsSelect: any[];
  public showOnlyOptionsSelect: any[];
  public filterOptionsSelect: any[];

  public chartOptions: any = {
    responsive: true,
    legend: {
      labels: {
        fontColor: '#5b5f62',
      }
    },
    // scales: {
    //   yAxes: [{
    //     ticks: {
    //       fontColor: '#5b5f62',
    //     }
    //   }],
    //   xAxes: [{
    //     ticks: {
    //       fontColor: '#5b5f62',
    //     }
    //   }]
    // }
  };


  constructor() { }

  ngOnInit(): void {
  }

}
