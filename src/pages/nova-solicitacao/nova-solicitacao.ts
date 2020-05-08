import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-nova-solicitacao',
  templateUrl: 'nova-solicitacao.html'
})
export class NovaSolicitacaoPage {

  img = "";

  dadosSolicitacao = {
    setor: '',
    local: '',
    andar: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, /*private camera: Camera*/) {

  }

  /*anexarFoto(foto){
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: foto == "foto" ? this.camera.PictureSourceType.CAMERA :
        this.camera.PictureSourceType.SAVEDPHOTOALBUM,
        correctOrientation: true
      }
      this.camera.getPicture(options).then((imageData) => {
       this.img = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        console.log(err)
      });
  }*/

  enviarSolicitacao(){
    this.navCtrl.setRoot('Solicitação enviada com sucesso!');
  }

}
