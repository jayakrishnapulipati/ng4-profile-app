import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DashboardComponent} from "./dashboard.component";
import {DashboardRouting} from "./dashboard.routes";
import {ProfileModule} from "../profile/profile.module";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    DashboardRouting,
    DashboardRouting
  ],
  providers: []
})
export class DashboardModule { }
