import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MainComponent} from "./main.component";
import {ProfileModule} from "./profile/profile/profile.module";
import { RouterModule} from "@angular/router";
import {MainRouting} from "./main.routes";
import {BlockUIModule} from "ng-block-ui";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BlockUIModule,
    ProfileModule,
    MainRouting
  ],
  providers: []
})
export class MainModule { }
