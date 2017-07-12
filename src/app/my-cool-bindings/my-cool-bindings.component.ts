import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anything-bindings',
  templateUrl: './my-cool-bindings.component.html',
  styleUrls: ['./my-cool-bindings.component.css']
})
export class MyCoolBindingsComponent implements OnInit {
  feedbackMessage: string = 'Please click on these things.';
  imageUrl: string = 'https://media.giphy.com/media/VxLkYEkjHviP6/giphy.gif';
  clickCount: number = 0;

  isImputDisabled: boolean = false;
  buttonText: string = 'Disable The Input';

  constructor() { }

  ngOnInit() {
  }

  changeTheImage() {
    if (this.imageUrl === 'https://media.giphy.com/media/VxLkYEkjHviP6/giphy.gif') {
      this.imageUrl = 'https://media.giphy.com/media/uCMN3qWZNeTaU/giphy.gif';
    }
    else {
      this.imageUrl = 'https://media.giphy.com/media/VxLkYEkjHviP6/giphy.gif';
    }
    this.clickCount += 1;
  }

  updateMessage() {
    this.feedbackMessage = 'Thanks for clicking!';
    this.clickCount += 1;
  }

  toggleThatInput() {
    if (this.isImputDisabled === true) {
      this.isImputDisabled = false;
      this.buttonText = 'Disable This Input';
    }
    else {
      this.isImputDisabled = true;
      this.buttonText = 'Enable This Input';
    }
  }
}
