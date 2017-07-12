import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-thangs',
  templateUrl: './input-thangs.component.html',
  styleUrls: ['./input-thangs.component.css']
})
export class InputThangsComponent implements OnInit {
  message: string = 'Select an option';

  //this variable is used to store the user's selection (dropdown)
  mySelection: string = "";

  // this variable is used to store the user's name (user input)
  userName: string;

  //this variable is used to store the product info from the inputs
  theProduct: object = {};


  constructor() { }

  ngOnInit() {
  }

  reactToSelection() {
    if (this.mySelection === 'bell') {
      this.message = 'You are being irresponsible with regards to your general well being.';
    }
    else if (this.mySelection === 'ketchup') {
      this.message = 'You are Ihor.';
    }
    else if (this.mySelection === 'mojo') {
      this.message = 'We can be friends.';
    }
    else if (this.mySelection === '') {
      this.message = 'You are indecisive.';
    }
    else {
      this.message = 'Reasonable choice.';
    }
  }

  createProduct() {
    console.log('Recieved user product!');
    console.log(this.theProduct);
  }
}
