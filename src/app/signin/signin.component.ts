import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from './auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log("inside onsubmit");
    console.log(this.signInForm.get('username').value);
    console.log(this.signInForm.get('password').value);

    this.authService.loginFun(this.signInForm.get('username').value, this.signInForm.get('password').value);


  }


}
