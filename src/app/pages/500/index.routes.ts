import { Route } from '@angular/router';
import { P500Component } from './index';

export const P500Routes: Route[] = [
  {
    path: '500.html',
    component: P500Component,
    data: { title: 'Internal Server Error P500Component' }
  }
];
