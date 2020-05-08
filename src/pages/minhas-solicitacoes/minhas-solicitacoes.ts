import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlterarPerfilPage } from '../alterar-perfil/alterar-perfil';
import { AlterarSenhaPage } from '../alterar-senha/alterar-senha';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-minhas-solicitacoes',
  templateUrl: 'minhas-solicitacoes.html',
})

export class MinhasSolicitacoesPage {

  rootPage: MinhasSolicitacoesPage;
  constructor(public navCtrl: NavController) {
  }

  public objeto_feed ={
    title: "Evelyn Matos",
    data: "November 5, 1955",
    descricao: "Pia quebrada",
    time_post: "18:34",
    status: "fechado",
  }

  abrirAlterarPerfil(){
    this.navCtrl.setRoot(AlterarPerfilPage);
  }

  abrirAlterarSenha(){
    this.navCtrl.push(AlterarSenhaPage);
  }

  sairAplicativo(){
    this.navCtrl.setRoot(LoginPage);
  }
}


