import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MinhasSolicitacoesPage } from '../pages/minhas-solicitacoes/minhas-solicitacoes';
import { NovaSolicitacaoPage } from '../pages/nova-solicitacao/nova-solicitacao';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { EsquecimentoSenhaPageModule } from '../pages/esquecimento-senha/esquecimento-senha.module';
import { AlterarPerfilPageModule } from '../pages/alterar-perfil/alterar-perfil.module';
import { AlterarSenhaPageModule } from '../pages/alterar-senha/alterar-senha.module';
import { HistoricoSolicitacoesPageModule } from '../pages/historico-solicitacoes/historico-solicitacoes.module';
import { FuncoesProvider } from '../providers/funcoes/funcoes';
import { CameraService } from '../providers/camera/camera-service';
import { SolicitacoesProvider } from '../providers/solicitacoes/solicitacoes';


@NgModule({
  declarations: [
    MyApp,
    MinhasSolicitacoesPage,
    NovaSolicitacaoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    CadastroPageModule,
    EsquecimentoSenhaPageModule,
    AlterarPerfilPageModule,
    AlterarSenhaPageModule,
    HistoricoSolicitacoesPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MinhasSolicitacoesPage,
    NovaSolicitacaoPage,
    TabsPage,
    ],
  providers: [
    StatusBar,
    SplashScreen,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FuncoesProvider,
    CameraService,
    SolicitacoesProvider,
  ]
})
export class AppModule {}
