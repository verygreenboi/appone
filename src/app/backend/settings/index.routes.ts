import { Route } from '@angular/router';
import { SettingsComponent } from './index';

export const SettingsRoutes: Route[] = [
  {
    path: 'settings',
    component: SettingsComponent,
    data: { title: 'Backend Settings' }
  }
];
