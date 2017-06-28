import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });