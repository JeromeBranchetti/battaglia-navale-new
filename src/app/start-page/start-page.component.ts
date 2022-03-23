import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css'],
})
export class StartPageComponent implements OnInit {
  page = 'due';
  selectedFiredMode: string = '';
  @Output() startFired: EventEmitter<string> = new EventEmitter();
  @Output() inputClickOrKey: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  startClicked() {
    this.startFired.emit(this.page);
    if (this.selectedFiredMode === '') {
      this.selectedFiredMode = 'keyboard';
    }
  }

  tastieraPressed() {
    this.selectedFiredMode = 'keyboard';
    this.inputClickOrKey.emit(this.selectedFiredMode);
  }

  clickPressed() {
    this.selectedFiredMode = 'click';
    this.inputClickOrKey.emit(this.selectedFiredMode);
  }
}
