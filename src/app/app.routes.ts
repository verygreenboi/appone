import { Routes } from '@angular/router';

import { PageRoutes } from './pages/index';
import { BackendRoutes } from './backend/index';

export const routes: Routes = [
  ...PageRoutes,
  ...BackendRoutes,
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
