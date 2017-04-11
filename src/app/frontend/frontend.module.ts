import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendComponent } from './frontend.component';
import { IndexComponent } from './index/index.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FrontendComponent, IndexComponent, SobreComponent, ContatoComponent]
})
export class FrontendModule { }
