import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-esquecimento-senha',
  templateUrl: 'esquecimento-senha.html',
})
export class EsquecimentoSenhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EsquecimentoSenhaPage');
  }

  enviarEsquecimento(){
    this.navCtrl.setRoot(LoginPage);
    alert('Solicitação enviada, verifique sua caixa de email!');
  }

  cancelarEsquecimento(){
    this.navCtrl.setRoot(LoginPage);
  }
}
