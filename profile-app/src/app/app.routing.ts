import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
