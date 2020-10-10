import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { StartshopService } from './startshop.service';

import { NavbarService} from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private startShopService: StartshopService) { }

  switchClicked(event) {
    console.log(event.srcElement.checked);
    if (event.srcElement.checked == true) {

      this.startShopService.startShop();


    } else {

    }
  }

  ngOnInit(): void {
  }

}
