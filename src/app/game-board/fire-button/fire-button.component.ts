import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-fire-button',
  templateUrl: './fire-button.component.html',
  styleUrls: ['./fire-button.component.css'],
})
export class FireButtonComponent implements OnInit, AfterViewInit {
  @Input() value!: string | number;
  @Output() targetKeyboardFire: EventEmitter<string | number> =
    new EventEmitter();

  constructor() {}

  ngAfterViewInit(): void {
    this.hitThisCoordinate();
  }

  ngOnInit(): void {}

  hitThisCoordinate() {
    this.targetKeyboardFire.emit(this.value);
  }
}
