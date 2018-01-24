import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRouting} from "./app.routing";
import { BlockUIModule } from 'ng-block-ui';
import {LoginComponent} from "./login/login.component";
import {MainModule} from "./main/main.module";
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BlockUIModule,
    MainModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
