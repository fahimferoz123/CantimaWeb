import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-instock',
  templateUrl: './instock.component.html',
  styleUrls: ['./instock.component.scss']
})
export class InstockComponent implements OnInit {

  submitted = false;

  addNewItemForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    category: new FormControl(0, [Validators.required]),
    image: new FormControl('', [Validators.required]),
    mealTime: new FormControl(0, [Validators.required]),
    veg: new FormControl(false, [Validators.required]),
    des: new FormControl('', [Validators.required]),

  });

  constructor() { }


  ngOnInit(): void {
    
  }



  // productName: String;
  // price: String;
  // category: String;
  // menuItem: String;
  // isVegetarian: boolean;
  // description: String;

  addItem() {
    //Code this @dulaj
 
  }

}