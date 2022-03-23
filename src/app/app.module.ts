import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StartPageComponent } from './start-page/start-page.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { ColumnCellComponent } from './game-board/column-cell/column-cell.component';
import { CellComponent } from './game-board/column-cell/cell/cell.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { FireButtonComponent } from './game-board/fire-button/fire-button.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    GameBoardComponent,
    ColumnCellComponent,
    CellComponent,
    FireButtonComponent,
  ],
  imports: [BrowserModule, NgbModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons();
  }
}
