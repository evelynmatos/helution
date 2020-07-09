import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SolicitacoesProvider {

  private post = "http://aulas2.getsandbox.com";

  constructor(public http: HttpClient) {
    console.log('Hello SolicitacoesProvider Provider');
  }

  getListaPost(){
    return this.http.get(this.post + "/posts");
  }

  getLatestPost(){
    return this.http.get(this.post + "/last_post");
  }

}
