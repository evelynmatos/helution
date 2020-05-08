import { Component } from '@angular/core';

import { MinhasSolicitacoesPage } from '../minhas-solicitacoes/minhas-solicitacoes';
import { NovaSolicitacaoPage } from '../nova-solicitacao/nova-solicitacao';
import { HistoricoSolicitacoesPage } from '../historico-solicitacoes/historico-solicitacoes';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MinhasSolicitacoesPage;
  tab2Root = NovaSolicitacaoPage;
  tab3Root = HistoricoSolicitacoesPage;
  constructor() {

  }
}
