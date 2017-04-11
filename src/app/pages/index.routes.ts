import { Route } from '@angular/router';

import { PagesComponent } from './pages.component';
import { P500Routes } from './500/index';

export const PageRoutes: Route[] = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      ...P500Routes
    ]
  }
];
