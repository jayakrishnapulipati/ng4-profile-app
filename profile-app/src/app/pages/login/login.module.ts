import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginComponent } from "./login.component";
import {LoginRouting} from "./login.routes";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    LoginRouting
  ],
  providers: []
})
export class LoginModule { }
