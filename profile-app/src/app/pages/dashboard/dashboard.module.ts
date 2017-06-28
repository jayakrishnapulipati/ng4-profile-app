import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DashboardComponent} from "./dashboard.component";
import {DashboardRouting} from "./dashboard.routes";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    DashboardRouting,
    DashboardRouting
  ],
  providers: []
})
export class DashboardModule { }
