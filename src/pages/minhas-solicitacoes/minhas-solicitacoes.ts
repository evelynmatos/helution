import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AlterarPerfilPage } from '../alterar-perfil/alterar-perfil';
import { AlterarSenhaPage } from '../alterar-senha/alterar-senha';
import { LoginPage } from '../login/login';
import { SolicitacoesProvider } from '../../providers/solicitacoes/solicitacoes';

@Component({
  selector: 'page-minhas-solicitacoes',
  templateUrl: 'minhas-solicitacoes.html',
})

export class MinhasSolicitacoesPage {

  public list: any = new Array;
  public loader;
  public refresher;
  public isRefresher: boolean = false;

  rootPage: MinhasSolicitacoesPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private solicitacoes: SolicitacoesProvider,
    public loadingCtrl: LoadingController) {
  }

  public objeto_feed = {
    title: "Evelyn Matos",
    data: "November 5, 1955",
    descricao: "Pia quebrada",
    time_post: "18:34",
    status: "fechado",
  }

  abrirAlterarPerfil() {
    this.navCtrl.setRoot(AlterarPerfilPage);
  }

  abrirAlterarSenha() {
    this.navCtrl.push(AlterarSenhaPage);
  }

  sairAplicativo() {
    this.navCtrl.setRoot(LoginPage);
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando posts...",
    });
    this.loader.present();
  }

  fechaCarregando() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefresher = true;
    this.carregarPosts();

  }

  ionViewDidEnter() {
    this.carregarPosts();

  }

  carregarPosts() {
    this.abreCarregando();
    this.solicitacoes.getListaPost().subscribe(
      (data) => {
        this.list = data;
        console.log(data);
        this.fechaCarregando();
        if (this.isRefresher) {
          this.refresher.complete();
          this.isRefresher = false;
        }
      }, error => {
        console.log(error);
        this.fechaCarregando();
        if (this.isRefresher) {
          this.refresher.complete();
          this.isRefresher = false;
        }
      }
    )
  }

}


