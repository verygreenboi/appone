import { Routes } from '@angular/router';

import { PageRoutes } from './pages/index';

export const routes: Routes = [
  ...PageRoutes,
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
