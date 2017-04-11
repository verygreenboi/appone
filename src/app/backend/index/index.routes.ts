import { Route } from '@angular/router';
import { IndexComponent } from './index';

export const IndexRoutes: Route[] = [
  {
    path: 'index', 
    component: IndexComponent,
    data: { title: 'Backend Index' }
  }
];
