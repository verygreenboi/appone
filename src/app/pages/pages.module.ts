import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { P500Component } from './500/500.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PagesComponent, P500Component],
  exports: [PagesComponent]
})
export class PagesModule { }
