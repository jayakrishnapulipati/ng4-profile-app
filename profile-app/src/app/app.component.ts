import {Component, DoCheck} from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  //Decorator wires up blockUI instance
  @BlockUI() blockUI: NgBlockUI;

  constructor() {
    this.blockUI.start(); // Start blocking

    setTimeout(() => {
      this.blockUI.stop(); // Stop blocking
    }, 2000);
  }
}
