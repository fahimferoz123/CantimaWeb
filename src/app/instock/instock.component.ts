import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { InstockService } from './instock.service';

@Component({
  selector: 'app-instock',
  templateUrl: './instock.component.html',
  styleUrls: ['./instock.component.scss']
})
export class InstockComponent implements OnInit {

  submitted = false;
  isVeg = false;

  allItems: Array<Item> = [];
  allItemsObservable: Observable<Item[]>;


  id: number;
  name: string;
  price: number;
  category: number;
  time: number;
  veg: boolean;
  des: string;



  editItemForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    category: new FormControl(0, [Validators.required]),
    // image: new FormControl('', [Validators.required]),
    mealTime: new FormControl(0, [Validators.required]),
    veg: new FormControl(this.isVeg, [Validators.required]),
    des: new FormControl('', [Validators.required]),

  });



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

  constructor(private instockService: InstockService, private http: HttpClient) {

    this.http.get('http://3.223.72.19/api/item/', { observe: 'response' }).subscribe({
      next: data => {
        // console.log(data.body['items']);

        if (data.status === 200) {
          // this.router.navigateByUrl('/instock');
          console.log("items fetched ");
          this.allItems = data.body['items'];
          // console.log(this.allItems);

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
    // console.log(isVeg);
    this.instockService.addItem(id, name, price, category, mealTime, isVeg, desc);
  }

  // productName: String;
  // price: String;
  // category: String;
  // menuItem: String;
  // isVegetarian: boolean;
  // description: String;
  editItem(itemID) {
    // console.log(itemID);
    // console.log(this.name);
  }


  // GET specific item to the edit form
  getToEdit(item) {
    // set edit form controllers
    this.editItemForm.controls['name'].setValue(item.name);
    this.editItemForm.controls['price'].setValue(item.price);
    this.editItemForm.controls['category'].setValue(item.category);
    this.editItemForm.controls['mealTime'].setValue(item.time);
    this.editItemForm.controls['veg'].setValue(item.veg);
    this.editItemForm.controls['des'].setValue(item.des);
  }

}

export interface Item {
  'id': number;
  'name': string;
  'price': number;
  'category': number;
  'time': number;
  'image': string;
  'veg': boolean;
  'des': string;
}
