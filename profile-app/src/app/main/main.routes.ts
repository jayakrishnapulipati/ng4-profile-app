import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MainComponent} from "./main.component";
import {ProfileComponent} from "./profile/profile/profile.component";

export const routes: Routes = [
  {
    path: 'main', component: MainComponent,
    children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', component: ProfileComponent, pathMatch: 'full'},
    ]
  }
];

export const MainRouting: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
