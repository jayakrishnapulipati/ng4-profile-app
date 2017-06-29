import { Component } from '@angular/core';
import {NgBlockUI, BlockUI} from "ng-block-ui";

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent {
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
