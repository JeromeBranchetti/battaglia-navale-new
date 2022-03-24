import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
})
export class CellComponent implements OnInit {
  number!: number;
  letter: string = '';
  seaOrShip: string = '';
  uncover: boolean = false;
  myName!: any[];
  clickable: boolean = true;
  @Input() toggleVisibleInput: boolean = false;

  @Input() inputNumber!: number;
  @Input() inputLetter!: string;
  @Input() inputSeaOrShip!: string;
  @Output() reduceLifeFired: EventEmitter<boolean> = new EventEmitter();
  @Output() myCoordinates: EventEmitter<any[]> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.number = this.inputNumber;
    this.letter = this.inputLetter;
    this.seaOrShip = this.inputSeaOrShip;
  }

  tellMeAboutYou() {
    console.log(
      'My name is ' +
        this.letter +
        this.number +
        ' and i am ' +
        this.inputSeaOrShip
    );
    if (this.seaOrShip === 'sea') {
      this.reduceLifeFired.emit(this.inputSeaOrShip === 'sea');
    }
    if (this.seaOrShip === 'ship') {
      this.myCoordinates.emit(this.myName);
    }
    this.uncover = true;
    this.clickable = false;
  }

  ngAfterViewInit() {
    this.myName = [this.letter, this.number];
  }

  styleFunction(bool: boolean) {
    if (bool) {
      return 'auto';
    } else {
      return 'none';
    }
  }

  
}
