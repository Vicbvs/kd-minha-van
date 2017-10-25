import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassageiroInicialPage } from './passageiro-inicial';

@NgModule({
  declarations: [
    PassageiroInicialPage,
  ],
  imports: [
    IonicPageModule.forChild(PassageiroInicialPage),
  ],
})
export class PassageiroInicialPageModule {}
