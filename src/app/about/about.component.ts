import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: AboutModel = {
    email : '',
    password : '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  };
  constructor() { }

  ngOnInit() {
  }

  submitForm(): void {
    console.log(this.about.email);
  }

}

export interface AboutModel {
  email: string;
  password: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
}
