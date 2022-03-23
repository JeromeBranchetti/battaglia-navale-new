import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CellComponent } from './cell/cell.component';

@Component({
  selector: 'app-column-cell',
  templateUrl: './column-cell.component.html',
  styleUrls: ['./column-cell.component.css'],
})
export class ColumnCellComponent implements OnInit {
  myLetter!: string;
  arrayCells: CellComponent[] = [];
  @Output() clickedFired = new EventEmitter();
  @Input() myInputLetter: string = '';

  constructor() {
    for (let index = 1; index < 11; index++) {
      const cellGenerated: CellComponent = new CellComponent();
      this.arrayCells.push(cellGenerated);
    }
  }

  ngOnInit(): void {}

  wasClicked() {
    this.clickedFired.emit();
  }
}
