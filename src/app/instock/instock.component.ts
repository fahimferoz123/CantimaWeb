import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InstockService } from './instock.service';

@Component({
  selector: 'app-instock',
  templateUrl: './instock.component.html',
  styleUrls: ['./instock.component.scss']
})
export class InstockComponent implements OnInit {

  submitted = false;
  isVeg = false;

  addNewItemForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    category: new FormControl(0, [Validators.required]),
    // image: new FormControl('', [Validators.required]),
    mealTime: new FormControl(0, [Validators.required]),
    veg: new FormControl(this.isVeg, [Validators.required]),
    des: new FormControl('', [Validators.required]),

  });

  constructor(private instockService: InstockService) { }



  ngOnInit(): void {

  }

  checkIsVeg() {
    this.isVeg = !this.isVeg;
}


  onFormSubmit() {
    const id = this.addNewItemForm.get('id').value;
    const name = this.addNewItemForm.get('name').value;
    const price = this.addNewItemForm.get('price').value;
    const category = this.addNewItemForm.get('category').value;
    const mealTime = this.addNewItemForm.get('mealTime').value;
    const isVeg = this.addNewItemForm.get('veg').value;
    const desc = this.addNewItemForm.get('des').value;
    this.instockService.addItem(id, name, price, category, mealTime, isVeg, desc);
  }

  // productName: String;
  // price: String;
  // category: String;
  // menuItem: String;
  // isVegetarian: boolean;
  // description: String;

  addItem() {

    // Code this @dulaj

  }

}
