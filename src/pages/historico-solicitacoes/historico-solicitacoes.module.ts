import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricoSolicitacoesPage } from './historico-solicitacoes';

@NgModule({
  declarations: [
    HistoricoSolicitacoesPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricoSolicitacoesPage),
  ],
})
export class HistoricoSolicitacoesPageModule {}
