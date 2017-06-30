import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./main/profile/profile/profile.component";
import {MainComponent} from "./main/main.component";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
