import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pagina: string = 'uno';
  faHeart = faHeart;
  howToFireInput: string = 'keyboard';

  staretedSignal(page: string) {
    this.pagina = page;
  }

  resetedSignal(page: string) {
    this.pagina = page;
  }

  gameOverReceived(signal: boolean) {
    this.pagina = 'tre';
    setTimeout(() => {
      this.pagina = 'uno';
    }, 2000);
  }

  youWin(message: boolean) {
    this.pagina = 'quattro';
    setTimeout(() => {
      this.pagina = 'uno';
    }, 3000);
  }

  clickOrKeyActivated(message: string) {
    this.howToFireInput = message;
  }
}
