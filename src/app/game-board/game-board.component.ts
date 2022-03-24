import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CellComponent } from './column-cell/cell/cell.component';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';
import { ColumnCellComponent } from './column-cell/column-cell.component';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})
export class GameBoardComponent implements OnInit, AfterViewInit {
  page = 'uno';
  canGenerateBoard: boolean = true;
  arrayLetters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  arrayGridColumns: ColumnCellComponent[] = [];
  lifeRemaining: number = 10;
  toggleVisible: boolean = false;
  lifeRemainingArray: string[] = [
    'on',
    'on',
    'on',
    'on',
    'on',
    'on',
    'on',
    'on',
    'on',
    'on',
  ];
  faHeart = faHeart as IconProp;
  easyMode = false;
  currentCoordinates: any[] = [];
  possibleCoordinates: any[] = [null, null];
  readyToFire: boolean = false;
  victory: boolean = false;
  listBoardRand: CellComponent[] = [];
  listOfTargets: CellComponent[] = [];
  listOfHit: string[] = [];

  fixedConfig_1 = [
    ['A', 1],
    ['B', 1],
    ['A', 3],
    ['A', 4],
    ['A', 5],
    ['A', 6],
    ['A', 8],
    ['B', 8],
    ['D', 1],
    ['D', 2],
    ['D', 3],
    ['E', 10],
    ['F', 3],
    ['F', 6],
    ['F', 7],
    ['F', 10],
    ['G', 3],
    ['H', 3],
    ['J', 6],
    ['J', 10],
  ];
  fixedConfig_2 = [
    ['E', 3],
    ['D', 3],
    ['E', 8],
    ['E', 8],
    ['H', 1],
    ['H', 2],
    ['H', 3],
    ['A', 10],
    ['B', 7],
    ['G', 6],
    ['G', 7],
    ['B', 10],
    ['C', 3],
    ['C', 3],
    ['I', 6],
    ['E', 7],
  ];
  fixedConfig_3 = [
    ['D', 10],
    ['E', 10],
    ['F', 10],
    ['G', 10],
    ['J', 1],
    ['J', 2],
    ['J', 3],
    ['C', 5],
    ['D', 5],
    ['E', 5],
    ['I', 2],
    ['H', 2],
    ['A', 1],
    ['F', 6],
    ['F', 7],
    ['F', 10],
    ['G', 3],
    ['B', 8],
    ['J', 6],
    ['J', 10],
  ];
  fixedConfig_4 = [
    ['E', 2],
    ['F', 2],
    ['G', 2],
    ['H', 2],
    ['D', 4],
    ['D', 5],
    ['D', 6],
    ['F', 8],
    ['F', 9],
    ['F', 10],
    ['I', 9],
    ['I', 10],
    ['A', 6],
    ['A', 7],
    ['B', 7],
    ['B', 6],
    ['G', 10],
    ['C', 6],
    ['E', 8],
    ['H', 8],
  ];
  fixedConfig_5 = [
    ['D', 7],
    ['E', 7],
    ['F', 7],
    ['G', 7],
    ['B', 8],
    ['B', 9],
    ['B', 10],
    ['E', 1],
    ['E', 2],
    ['E', 3],
    ['D', 2],
    ['D', 3],
    ['D', 10],
    ['E', 10],
    ['H', 1],
    ['H', 2],
    ['A', 4],
    ['J', 6],
    ['B', 6],
    ['E'],
  ];
  fixedConfig_6 = [
    ['E', 4],
    ['E', 5],
    ['E', 6],
    ['E', 7],
    ['A', 7],
    ['A', 8],
    ['A', 9],
    ['E', 9],
    ['F', 9],
    ['G', 9],
    ['J', 8],
    ['J', 9],
    ['I', 7],
    ['I', 8],
    ['I', 9],
    ['I', 10],
    ['B', 4],
    ['D', 1],
    ['G', 2],
    ['J', 3],
  ];
  fixedConfig_7 = [
    ['I', 4],
    ['I', 5],
    ['I', 6],
    ['I', 7],
    ['B', 7],
    ['B', 8],
    ['B', 9],
    ['I', 8],
    ['J', 8],
    ['G', 6],
    ['H', 6],
    ['E', 9],
    ['E', 10],
    ['A', 1],
    ['B', 10],
    ['C', 10],
    ['D', 10],
    ['E', 2],
    ['I', 1],
    ['B', 3],
  ];
  fixedConfig_8 = [
    ['F', 2],
    ['F', 3],
    ['F', 4],
    ['F', 5],
    ['H', 5],
    ['I', 5],
    ['J', 5],
    ['D', 7],
    ['D', 8],
    ['D', 9],
    ['D', 6],
    ['E', 6],
    ['A', 2],
    ['B', 2],
    ['B', 9],
    ['C', 9],
    ['C', 4],
    ['I', 8],
    ['B', 10],
    ['J', 1],
  ];
  fixedConfig_9 = [
    ['H', 3],
    ['H', 4],
    ['H', 5],
    ['H', 6],
    ['C', 4],
    ['D', 4],
    ['E', 4],
    ['B', 2],
    ['C', 2],
    ['D', 2],
    ['A', 6],
    ['B', 6],
    ['C', 10],
    ['D', 10],
    ['F', 2],
    ['F', 3],
    ['G', 10],
    ['H', 9],
    ['I', 4],
    ['D', 8],
  ];
  fixedConfig_10 = [
    ['F', 6],
    ['G', 6],
    ['H', 6],
    ['I', 6],
    ['F', 7],
    ['F', 8],
    ['F', 9],
    ['D', 8],
    ['D', 9],
    ['D', 10],
    ['E', 2],
    ['F', 2],
    ['H', 3],
    ['I', 3],
    ['D', 4],
    ['D', 5],
    ['A', 5],
    ['B', 10],
    ['H', 10],
    ['I', 2],
  ];

  fixedConfigList = [
    this.fixedConfig_1,
    this.fixedConfig_2,
    this.fixedConfig_3,
    this.fixedConfig_4,
    this.fixedConfig_5,
    this.fixedConfig_6,
    this.fixedConfig_7,
    this.fixedConfig_8,
    this.fixedConfig_9,
    this.fixedConfig_10,
  ];

  @Input() fireState: string = '';
  @Output() resetFired: EventEmitter<string> = new EventEmitter();
  @Output() gameOverFired: EventEmitter<boolean> = new EventEmitter();
  @Output() victoryFired: EventEmitter<boolean> = new EventEmitter();

  @ViewChildren('cellRef') cellMatrixHit!: QueryList<CellComponent>;

  resetClicked() {
    this.resetFired.emit(this.page);
    this.boardRefresher;
  }

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.fireHasBeenSent();
  }

  // Logica per assegnare valori alle componenti celle: numero - lettara - tipo

  boardGenerator() {
    this.canGenerateBoard = false;
    const randIdexConfig: number = Math.floor(Math.random() * 10);
    for (let i = 0; i < 10; i++) {
      const filterdConfigList = this.fixedConfigList[randIdexConfig].filter(
        (el) => {
          return el[0] === this.arrayLetters[i];
        }
      );
      for (let j = 1; j < 11; j++) {
        var randomCell: CellComponent = new CellComponent();
        randomCell.letter = this.arrayLetters[i];
        randomCell.number = j;
        if (
          filterdConfigList.find((el) => {
            return el[1] === j;
          })
        ) {
          randomCell.seaOrShip = 'ship';
          this.listOfTargets.push(randomCell);
        } else {
          randomCell.seaOrShip = 'sea';
        }

        const coordinate2D: any[] = [randomCell.letter, randomCell.number];
        this.listBoardRand.push(randomCell);
      }
    }
    this.readyToFire = true;
  }

  boardRefresher() {
    this.listBoardRand = [];
    this.listOfTargets = [];
  }

  changeLife(what: boolean) {
    if (what) {
      this.lifeRemaining--;
      this.changeHearts();

      if (this.lifeRemaining === 0) {
        this.gameOverFired.emit(true);
      }
    }
  }

  changeHearts() {
    this.lifeRemainingArray[this.lifeRemaining] = 'off';
  }

  thisHasBeenHit(coordinate: any[]) {
    this.currentCoordinates = coordinate;
    this.listOfHit.push('');
    if (this.listOfHit.length === this.listOfTargets.length) {
      this.victory = true;
      this.victoryFired.emit(this.victory);
    }
  }

  updateTarget(coordinate: string | number) {
    if (typeof coordinate === 'string') {
      this.possibleCoordinates[0] = coordinate;
    }
    if (typeof coordinate === 'number') {
      this.possibleCoordinates[1] = coordinate;
    }
  }

  fireHasBeenSent() {
    this.currentCoordinates = this.possibleCoordinates;
    this.possibleCoordinates = [];

    this.cellMatrixHit
      .toArray()
      .find((el) => {
        return (
          el.number === this.currentCoordinates[1] &&
          el.letter === this.currentCoordinates[0]
        );
      })
      ?.tellMeAboutYou();
  }

  toggleVisibleChanger() {
    this.toggleVisible = !this.toggleVisible;
    console.log(this.toggleVisible);
  }

 
}
