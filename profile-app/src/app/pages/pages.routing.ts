import {Routes, RouterModule}  from '@angular/router';
import {PagesComponent} from './pages.component';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent, pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'}
    ]
  }
];

export const PagesRouting: ModuleWithProviders = RouterModule.forChild(routes);
