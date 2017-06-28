import {Routes, RouterModule}  from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DashboardComponent} from "./dashboard.component";
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [

    ]
  }
];

export const DashboardRouting: ModuleWithProviders = RouterModule.forChild(routes);

