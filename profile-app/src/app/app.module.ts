import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRouting} from "./app.routing";
import { BlockUIModule } from 'ng-block-ui';
import {LoginComponent} from "./login/login.component";
import {MainModule} from "./main/main.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BlockUIModule,
    MainModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
