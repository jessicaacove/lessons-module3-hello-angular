import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  randomText: string;


  rightNow: Date = new Date();

  currentBitCoinInvestment: number = 100000;

  rockSearchText: string = "";

  theRocks: object[] = [
    { name: 'turtlenecktherock', pictureUrl: 'https://media.giphy.com/media/AjkKC77JZVCEg/giphy.gif'},
    { name: 'eyebrowtherock', pictureUrl: 'https://media.giphy.com/media/TT7JW4Qm7uaNW/giphy.gif'},
    { name: 'napoleandynamitetherock', pictureUrl: 'https://media.giphy.com/media/rYQU4kqwz0wAo/giphy.gif'},
    { name: 'smugtherock', pictureUrl: 'https://media.giphy.com/media/l0NwPZ027mabR6Tg4/giphy.gif'},
    { name: 'clappingtherock', pictureUrl: 'https://media.giphy.com/media/NnGGHE0muVqpO/giphy.gif'}
  ];

  constructor() { }

  ngOnInit() {
  }


  addOneHour() {
    //  Make a copy of the date
    const updated = new Date(this.rightNow);

    // Increase the hour of the copy
    updated.setHours(this.rightNow.getHours() + 1);

    // Save the copy in the object
    this.rightNow = updated;
  }

}
