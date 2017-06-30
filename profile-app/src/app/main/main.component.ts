import { Component } from '@angular/core';
import {NgBlockUI, BlockUI} from "ng-block-ui";

@Component({
  selector: 'main-root',
  templateUrl: './main.component.html'
})
export class MainComponent {

  @BlockUI() blockUI: NgBlockUI;

  constructor() {
    this.blockUI.start(); // Start blocking

    setTimeout(() => {
      this.blockUI.stop(); // Stop blocking
    }, 2000);
  }
}
