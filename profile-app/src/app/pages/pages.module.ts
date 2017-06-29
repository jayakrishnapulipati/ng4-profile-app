import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import {PagesRouting} from "./pages.routing";
import {LoginModule} from "./login/login.module";
import {ProfileModule} from "./profile/profile.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {BlockUIModule} from "ng-block-ui";




@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    BrowserModule,
    BlockUIModule,
    LoginModule,
    DashboardModule,
    ProfileModule,
    PagesRouting
  ],
  providers: []
})
export class PagesModule { }
