import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { EsquecimentoSenhaPage } from '../esquecimento-senha/esquecimento-senha';
import { MinhasSolicitacoesPage } from '../minhas-solicitacoes/minhas-solicitacoes';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  dadosUsuario = {
    matricula: '',
    senha: '',
  };

  /*desabilitarBotao = true;

  habilitarBotao: boolean = false;*/

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.navCtrl.setRoot(MinhasSolicitacoesPage);
  }

  esquecimentoSenha(){
    this.navCtrl.setRoot(EsquecimentoSenhaPage);
  }

  cadastro(){
    this.navCtrl.setRoot(CadastroPage);
  }

}
