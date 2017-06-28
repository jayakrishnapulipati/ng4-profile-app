import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import {PagesRouting} from "./pages.routing";
import {LoginModule} from "./login/login.module";
import {DashboardModule} from "./dashboard/dashboard.module";



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    DashboardModule,
    PagesRouting
  ],
  providers: []
})
export class PagesModule { }
