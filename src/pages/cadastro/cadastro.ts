import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  habilitar = true;
  tipoUsuario: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public dadosUsuario = {
    matricula: '9999',
    email: 'evelyn.matos',
    telefone: '0876',
    senha: '12345',
    confirmarSenha: '12345',
    opcoes: ["aluno", "gestor"],
  };


  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  habilitarCampos(tipoUsuario : any){

    if(tipoUsuario != "aluno"){
      this.habilitar = false;
    }else{
      this.habilitar = true;
  }
}

  cadastrar(){
    this.navCtrl.push(LoginPage);
    alert('Conta criada com sucesso');
  }

  login(){
    this.navCtrl.push(LoginPage);
  }
}
