import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendComponent } from './backend.component';
import { IndexComponent } from './index/index.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BackendComponent, IndexComponent, SettingsComponent]
})
export class BackendModule { }
