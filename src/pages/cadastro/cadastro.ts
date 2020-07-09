import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
import { FuncoesProvider } from '../../providers/funcoes/funcoes';
import { CameraService } from '../../providers/camera/camera-service';
@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  imgPerfil = "../../assets/imgs/avatar.png";
  habilitar = true;
  tipoUsuario: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
                    public funcoesProvider: FuncoesProvider,
                    public camera: CameraService,
                    public actionSheet: ActionSheet,
                    public funcoes: FuncoesProvider,
                    ) {
  }

  public dadosUsuario = {
    matricula: '',
    email: '',
    telefone: '',
    senha: '',
    confirmarSenha: '',
    opcoes: ["Aluno", "Gestor"],
  };


  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  habilitarCampos(tipoUsuario : any){

    if(tipoUsuario != "Aluno"){
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

  tirarFoto(perguntaId: string): void {

    let buttonLabels = ['Tirar Foto'];

    const options: ActionSheetOptions = {
      title: 'Como gostaria de obter a imagem?',
      subtitle: 'Escolha uma opção',
      buttonLabels: buttonLabels,
      addCancelButtonWithLabel: 'Cancelar',
      // addDestructiveButtonWithLabel: 'Delete',
      // androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
      destructiveButtonLast: true
    };

    this.actionSheet.show(options).then((buttonIndex: number) => {

      this.camera.takePicture(buttonIndex).then((data: string) => {

        //Transformando o retorno em objeto para validar o retorno
        let retorno = JSON.parse(data);

        let loading = this.funcoes.showLoading("Armazenando a foto...");

        if (retorno.status == "true") {

          this.imgPerfil = retorno.path;
          loading.dismiss();
          
        } else {
          loading.dismiss();
          this.funcoes.showAlert(retorno.mensagem);
          
        }

      });

    });


  }
}
