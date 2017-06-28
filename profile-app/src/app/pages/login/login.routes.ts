import {Routes, RouterModule}  from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from "./login.component";
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [

    ]
  }
];

export const LoginRouting: ModuleWithProviders = RouterModule.forChild(routes);
