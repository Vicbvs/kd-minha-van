import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPassageiroPage } from './cadastro-passageiro';

@NgModule({
  declarations: [
    CadastroPassageiroPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPassageiroPage),
  ],
})
export class CadastroPassageiroPageModule {}
